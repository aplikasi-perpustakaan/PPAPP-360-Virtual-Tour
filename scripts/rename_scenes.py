import os
import re
import glob

# Mapping for floor codes
floor_map = {
    'f1': 'Floor 1',
    'f2': 'Floor 2',
    'ext': 'Exterior',
    'gf': 'Ground Floor',
    'lounge': 'Lounge',
    'outside': 'Exterior' # some are just pusat-outside-1
}

# Mapping for section codes to pretty names (based on tour-config)
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
    'reference': 'Reference Area'
}

def get_pretty_name(scene_id):
    # Example: pusat-f1-castle-1
    parts = scene_id.split('-')
    branch = parts[0].upper()
    
    # Check if there is a floor part
    floor_code = parts[1]
    if floor_code in floor_map:
        floor = floor_map[floor_code]
        # Find section
        # The number is always the last part, the section is everything in between
        number = parts[-1]
        section_code = '-'.join(parts[2:-1])
    else:
        # e.g. pusat-outside-1 or ppk-lounge-1
        # if parts[1] is 'outside'
        if floor_code == 'outside':
            floor = 'Exterior'
            section_code = 'outside'
            number = parts[-1]
        elif floor_code == 'lounge':
            floor = 'Lounge'
            section_code = 'Lounge'
            number = parts[-1]
        else:
            floor = floor_code.capitalize()
            section_code = '-'.join(parts[2:-1])
            number = parts[-1]
            
    section = section_map.get(section_code, section_code.replace('-', ' ').title())
    
    if not section: 
        name = f"{floor} - {number}"
        caption = f"{branch} - {floor} - {number}"
    else:
        name = f"{floor} - {section} {number}"
        caption = f"{branch} - {floor} - {section} {number}"
        
    return name, caption

for filepath in glob.glob('locations/**/*.js', recursive=True):
    if '-index.js' in filepath: continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # We will find blocks like:
    # id: 'pusat-f1-castle-1',
    # name: 'Floor 1 - Castle 1',
    # caption: 'PUSAT - Floor 1 - Castle 1',
    
    def replacer(match):
        full_match = match.group(0)
        scene_id = match.group(1)
        
        name, caption = get_pretty_name(scene_id)
        
        # Replace the name and caption in this block
        new_block = re.sub(r"name:\s*'.*?',", f"name: '{name}',", full_match)
        new_block = re.sub(r"caption:\s*'.*?',", f"caption: '{caption}',", new_block)
        return new_block
        
    new_content = re.sub(r"id:\s*'([^']+)',\s*name:\s*'.*?',\s*caption:\s*'.*?',", replacer, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

