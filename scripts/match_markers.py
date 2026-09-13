import cv2
import numpy as np
import glob
import os
import json

# Paths
panoramas = glob.glob(r'D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\images\ppaj\f1\*.jpg')
markers = glob.glob(r'D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\images\ppaj\markers\**\*.jpg', recursive=True)

# Initialize SIFT
sift = cv2.SIFT_create()

# Precompute keypoints and descriptors for all panoramas to save time
print("Precomputing panorama features...")
pano_data = {}
for p in panoramas:
    # Read in grayscale
    img = cv2.imread(p, cv2.IMREAD_GRAYSCALE)
    if img is None:
        continue
    # Resize panorama to speed up processing (e.g. 50% scale)
    h, w = img.shape
    scale = 0.5
    img_small = cv2.resize(img, (int(w * scale), int(h * scale)))
    
    kp, des = sift.detectAndCompute(img_small, None)
    pano_data[p] = {
        'kp': kp,
        'des': des,
        'w': w,
        'h': h,
        'scale': scale,
        'id': os.path.basename(p).replace('.jpg', '')
    }

# FLANN parameters
FLANN_INDEX_KDTREE = 1
index_params = dict(algorithm=FLANN_INDEX_KDTREE, trees=5)
search_params = dict(checks=50)
flann = cv2.FlannBasedMatcher(index_params, search_params)

results = []

print(f"Matching {len(markers)} markers...")
for m_path in markers:
    m_img = cv2.imread(m_path, cv2.IMREAD_GRAYSCALE)
    if m_img is None:
        continue
    kp_m, des_m = sift.detectAndCompute(m_img, None)
    if des_m is None or len(des_m) < 10:
        continue
        
    best_pano = None
    best_matches = 0
    best_kp_pano = None
    best_good = []
    
    for p, data in pano_data.items():
        if data['des'] is None:
            continue
        # Use knnMatch to find 2 nearest neighbors
        try:
            matches = flann.knnMatch(des_m, data['des'], k=2)
        except Exception as e:
            continue
            
        # Lowe's ratio test
        good = []
        for m_n in matches:
            if len(m_n) != 2:
                continue
            m, n = m_n
            if m.distance < 0.7 * n.distance:
                good.append(m)
                
        if len(good) > best_matches:
            best_matches = len(good)
            best_pano = data
            best_good = good
            
    if best_pano and best_matches > 10:
        # Find the center of the matches in the panorama
        pts = np.float32([ best_pano['kp'][m.trainIdx].pt for m in best_good ]).reshape(-1, 1, 2)
        
        # We can calculate the centroid of the matched points
        mean_x_small = np.mean(pts[:, 0, 0])
        mean_y_small = np.mean(pts[:, 0, 1])
        
        # Scale back to original panorama size
        mean_x = mean_x_small / best_pano['scale']
        mean_y = mean_y_small / best_pano['scale']
        
        # Calculate yaw and pitch
        # Yaw: 0 to 360 (left to right)
        yaw = (mean_x / best_pano['w']) * 360
        # Pitch: 90 (top) to -90 (bottom)
        pitch = (0.5 - (mean_y / best_pano['h'])) * 180
        
        results.append({
            'marker_image': m_path.replace('D:\\_ASSISTANTS\\PPAPP\\PPAPP-360-Virtual-Tour\\', './').replace('\\', '/'),
            'marker_name': os.path.basename(m_path).replace('.jpg', ''),
            'scene_id': best_pano['id'],
            'yaw': f"{yaw:.2f}deg",
            'pitch': f"{pitch:.2f}deg",
            'matches': best_matches
        })
        print(f"Matched {os.path.basename(m_path)} to {best_pano['id']} ({best_matches} matches)")
    else:
        print(f"Could not find a good match for {os.path.basename(m_path)} (best: {best_matches})")

with open(r'D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\matched_markers.json', 'w') as f:
    json.dump(results, f, indent=2)

print("Done. Saved to matched_markers.json")
