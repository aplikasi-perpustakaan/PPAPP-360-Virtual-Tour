import os
import shutil
import re

base_src = r"D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\360"
base_dest = r"D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\images\gt"
loc_dir = r"D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\locations\gt"

sections = [
    {
        "src": os.path.join(base_src, "Floor 1"),
        "dest": "f1-main-area",
        "floor": "f1",
        "name": "Floor 1 – Main Area",
        "tags": "['main']",
        "append": True,
        "start_idx": 31
    },
    {
        "src": os.path.join(base_src, "Floor 1", "i-play-toy"),
        "dest": "f1-i-play-toy",
        "floor": "f1",
        "name": "Floor 1 – i-Play Toy",
        "tags": "['toy']",
        "append": False,
        "start_idx": 1
    },
    {
        "src": os.path.join(base_src, "Floor 2"),
        "dest": "f2-main-area",
        "floor": "f2",
        "name": "Floor 2 – Main Area",
        "tags": "['main']",
        "append": False,
        "start_idx": 1
    },
    {
        "src": os.path.join(base_src, "Floor 2", "Bilik Koleksi Khas"),
        "dest": "f2-bilik-koleksi-khas",
        "floor": "f2",
        "name": "Floor 2 – Bilik Koleksi Khas",
        "tags": "['koleksi']",
        "append": False,
        "start_idx": 1
    },
    {
        "src": os.path.join(base_src, "Outside"),
        "dest": "ext-outside",
        "floor": "ext",
        "name": "Exterior – Outside",
        "tags": "['outside']",
        "append": False,
        "start_idx": 1
    },
    {
        "src": os.path.join(base_src, "Stairs"),
        "dest": "stairs",
        "floor": "stairs",
        "name": "Stairs",
        "tags": "['stairs']",
        "append": False,
        "start_idx": 1
    }
]

index_imports = []
index_exports = []

for sec in sections:
    src_dir = sec["src"]
    dest_sub = sec["dest"]
    dest_dir = os.path.join(base_dest, dest_sub)
    floor = sec["floor"]
    name = sec["name"]
    tags = sec["tags"]
    start_idx = sec["start_idx"]
    is_append = sec["append"]
    
    os.makedirs(dest_dir, exist_ok=True)
    os.makedirs(os.path.join(dest_dir, "thumbs"), exist_ok=True)
    
    files = [f for f in os.listdir(src_dir) if f.endswith(".jpg") and not f.endswith(".part") and os.path.isfile(os.path.join(src_dir, f))]
    files.sort()
    
    if not files:
        continue
        
    js_content = []
    if not is_append:
        js_content.append(f"// {name} Section for GT")
        js_content.append("export default [")
    else:
        # read existing
        with open(os.path.join(loc_dir, f"gt-{dest_sub}.js"), 'r', encoding='utf-8') as f:
            existing = f.read()
            # remove the last '];'
            existing = existing.rsplit('];', 1)[0]
            js_content.append(existing.strip())
            
            # also we need to fix the last scene's link to point to the new first scene
            # But let's just keep it simple, it's a linear chain.
            # Actually, doing string replacement for the last element's link might be tricky, so let's just append the new scenes.
            # For f1-main-area, scene 30 needs a link to scene 31.
            if is_append and dest_sub == 'f1-main-area':
                add_link = f"""      {{
        nodeId: 'gt-f1-main-area-31',
        position: {{ yaw: '358.45deg', pitch: '-8.15deg' }},
        name: 'Go to Area 31',
      }},
    ],"""
                js_content[0] = js_content[0].replace("    ],\n    markers: [],\n    data: {\n      floor: 'f1',\n      tags: ['main'],\n    },\n  },", f"{add_link}\n    markers: [],\n    data: {{\n      floor: 'f1',\n      tags: ['main'],\n    }},\n  }},")

    for i, f_name in enumerate(files):
        scene_num = start_idx + i
        new_name = f"gt-{dest_sub}-{scene_num}.jpg"
        src_path = os.path.join(src_dir, f_name)
        dest_path = os.path.join(dest_dir, new_name)
        shutil.move(src_path, dest_path)
        
        links_str = []
        if scene_num > 1:
            links_str.append(f"""      {{
        nodeId: 'gt-{dest_sub}-{scene_num - 1}',
        position: {{ yaw: '178.45deg', pitch: '-8.15deg' }},
        name: 'Go to {name} {scene_num - 1}',
      }}""")
        if i < len(files) - 1:
            links_str.append(f"""      {{
        nodeId: 'gt-{dest_sub}-{scene_num + 1}',
        position: {{ yaw: '358.45deg', pitch: '-8.15deg' }},
        name: 'Go to {name} {scene_num + 1}',
      }}""")
          
        links_join = ',\n'.join(links_str)
        
        scene_obj = f"""  {{
    id: 'gt-{dest_sub}-{scene_num}',
    name: '{name} {scene_num}',
    caption: 'GT – {name} {scene_num}',
    panorama: './images/gt/{dest_sub}/{new_name}',
    thumbnail: './images/gt/{dest_sub}/thumbs/{new_name}',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
{links_join}
    ],
    markers: [],
    data: {{
      floor: '{floor}',
      tags: {tags},
    }},
  }},"""
        js_content.append(scene_obj)

    if not is_append:
        js_content.append("];")
    else:
        js_content.append("];")
        
    with open(os.path.join(loc_dir, f"gt-{dest_sub}.js"), "w", encoding="utf-8") as f:
        f.write("\n".join(js_content))
        
    # Prepare index update
    camel_case_sub = ''.join(word.capitalize() for word in dest_sub.split('-'))
    import_name = f"gt{camel_case_sub}Section"
    if not is_append:
        index_imports.append(f"import {import_name} from './gt-{dest_sub}.js';")
        index_exports.append(f"  ...{import_name},")
        
# Now update gt-index.js
index_file = os.path.join(loc_dir, "gt-index.js")
with open(index_file, 'r', encoding='utf-8') as f:
    index_content = f.read()
    
# insert imports before export default
for imp in index_imports:
    index_content = index_content.replace("export default [", f"{imp}\nexport default [")

# insert exports inside array
for exp in index_exports:
    index_content = index_content.replace("];", f"{exp}\n];")

with open(index_file, 'w', encoding='utf-8') as f:
    f.write(index_content)
