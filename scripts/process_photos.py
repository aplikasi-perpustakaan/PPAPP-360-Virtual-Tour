import os
import shutil

src_dir = r"D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\360\Floor 1"
dest_dir = r"D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\images\gt\f1-main-area"

os.makedirs(dest_dir, exist_ok=True)
os.makedirs(os.path.join(dest_dir, "thumbs"), exist_ok=True)

files = [f for f in os.listdir(src_dir) if f.endswith(".jpg") and not f.endswith(".part")]
files.sort()

js_content = [
    "// Floor 1 Main Area Section for GT",
    "export default ["
]

for i, f in enumerate(files):
    scene_num = i + 1
    new_name = f"gt-f1-main-area-{scene_num}.jpg"
    src_path = os.path.join(src_dir, f)
    dest_path = os.path.join(dest_dir, new_name)
    shutil.move(src_path, dest_path)
    
    links_str = []
    if i > 0:
        links_str.append(f"""      {{
        nodeId: 'gt-f1-main-area-{scene_num - 1}',
        position: {{ yaw: '178.45deg', pitch: '-8.15deg' }},
        name: 'Go to Area {scene_num - 1}',
      }}""")
    if i < len(files) - 1:
        links_str.append(f"""      {{
        nodeId: 'gt-f1-main-area-{scene_num + 1}',
        position: {{ yaw: '358.45deg', pitch: '-8.15deg' }},
        name: 'Go to Area {scene_num + 1}',
      }}""")
      
    links_join = ',\n'.join(links_str)
    
    scene_obj = f"""  {{
    id: 'gt-f1-main-area-{scene_num}',
    name: 'Floor 1 – Main Area {scene_num}',
    caption: 'GT – Floor 1 – Main Area {scene_num}',
    panorama: './images/gt/f1-main-area/{new_name}',
    thumbnail: './images/gt/f1-main-area/thumbs/{new_name}',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
{links_join}
    ],
    markers: [],
    data: {{
      floor: 'f1',
      tags: ['main'],
    }},
  }},"""
    js_content.append(scene_obj)

js_content.append("];")

with open(r"D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\locations\gt\gt-f1-main-area.js", "w", encoding="utf-8") as f:
    f.write("\n".join(js_content))
