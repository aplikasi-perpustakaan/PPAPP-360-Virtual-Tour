import json
import re

# Read matched markers
with open(r'D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\matched_markers.json', 'r') as f:
    markers_data = json.load(f)

# Group markers by scene_id
markers_by_scene = {}
for m in markers_data:
    scene_id = m['scene_id']
    if scene_id not in markers_by_scene:
        markers_by_scene[scene_id] = []
    markers_by_scene[scene_id].append(m)

js_file = r'D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\locations\ppaj\ppaj-f1-main-area.js'

with open(js_file, 'r', encoding='utf-8') as f:
    content = f.read()

for scene_id, markers in markers_by_scene.items():
    # Build the markers array string
    markers_str = "markers: [\n"
    for idx, m in enumerate(markers):
        marker_id = f"{scene_id}-img-{idx+1}"
        image_path = m['marker_image']
        title = m['marker_name'].replace('_', ' ')
        
        # We use custom-marker. Note the backticks for JS multi-line string.
        html_content = f"""<custom-marker data-icon="pin" style="--marker-color: var(--color-accent-blue, #2D6CDF);"><img src="{image_path}" alt="{title}" /><h2>{title}</h2></custom-marker>"""
        
        markers_str += f"""      {{
        id: '{marker_id}',
        position: {{ yaw: '{m['yaw']}', pitch: '{m['pitch']}' }},
        html: `{html_content}`,
        size: {{ width: 44, height: 44 }},
        anchor: 'center center'
      }},
"""
    markers_str += "    ],"
    
    # regex to find the scene block
    chunks = content.split("id: '")
    for i in range(1, len(chunks)):
        if chunks[i].startswith(scene_id + "'"):
            # This is the chunk for this scene. Replace `markers: [],` or existing markers block
            chunks[i] = re.sub(r'markers:\s*\[[\s\S]*?\],', markers_str, chunks[i])
            break
    
    content = "id: '".join(chunks)

with open(js_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Markers injected successfully.")
