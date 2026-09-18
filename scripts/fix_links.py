import os
import re
import glob

# Load mapping of scene_id -> new_name
id_to_name = {}

# Re-use the same mapping logic to generate names for any scene id
floor_map = {
    'f1': 'Level 1',
    'f2': 'Level 2',
    'ext': 'Exterior',
    'gf': 'Ground Floor',
    'lounge': 'Lounge',
    'outside': 'Exterior'
}

section_map = {
    'castle': 'Castle Area',
    'kids': 'Kids Area',
    'sensory': 'Sensory Room',
    'i-play-toys': 'i-Play Toys Room',
    'e-sports': 'E-Sports',
    'reading': 'Reading Area',
    'lobby': 'Lobby',
    'auditorium': 'Auditorium',
    'meeting-room': 'Meeting Room',
    'training-room': 'Training Room',
    'intersect-room': 'Intersect Room',
    'stairs': 'Stairs',
    'elevator': 'Elevator',
    'outside': 'Outside',
    'reference': 'Reference Area',
    'main-area': 'Main Area',
    'bilik-koleksi-khas': 'Bilik Koleksi Khas'
}

def get_pretty_name(scene_id):
    parts = scene_id.split('-')
    branch = parts[0].upper()
    floor_code = parts[1]
    
    if floor_code in floor_map:
        floor = floor_map[floor_code]
        number = parts[-1]
        section_code = '-'.join(parts[2:-1])
    else:
        if floor_code == 'outside':
            floor = 'Exterior'
            section_code = 'outside'
            number = parts[-1]
        elif floor_code == 'lounge':
            floor = 'Lounge'
            section_code = 'Lounge'
            number = parts[-1]
        elif floor_code == 'ramp':
            floor = 'Ramp'
            section_code = 'Ramp'
            number = parts[-1]
        else:
            floor = floor_code.capitalize()
            section_code = '-'.join(parts[2:-1])
            number = parts[-1]
            
    section = section_map.get(section_code, section_code.replace('-', ' ').title())
    
    if not section: 
        name = f"{floor} - {number}"
    else:
        name = f"{floor} - {section} {number}"
        
    return name

for filepath in glob.glob('locations/**/*.js', recursive=True):
    if '-index.js' in filepath: continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    def link_replacer(match):
        node_id = match.group(1)
        name = get_pretty_name(node_id)
        # return the same but with updated name
        return f"nodeId: '{node_id}',\n        position: {match.group(2)},\n        name: 'Go to {name}'"

    # Match:
    # nodeId: 'pusat-f1-castle-2',
    # position: { yaw: '265.68deg', pitch: '-10deg' },
    # name: 'Go to Floor 1 - Castle 2'
    # Use regex with re.DOTALL or just match parts
    new_content = re.sub(
        r"nodeId:\s*'([^']+)',\s*\n\s*position:\s*(\{.*?\}),\s*\n\s*name:\s*'[^\n]+'",
        link_replacer,
        content
    )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated links in {filepath}")

