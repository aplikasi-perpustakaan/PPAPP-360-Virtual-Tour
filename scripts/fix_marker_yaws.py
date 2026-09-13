import re

file_path = 'locations/ppaj/ppaj-f1-main-area.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replace_yaw(match):
    prefix = match.group(1)
    yaw_val = float(match.group(2))
    suffix = match.group(3)
    
    # Rotate by 180
    new_yaw = (yaw_val + 180.0) % 360.0
    
    return f'{prefix}{new_yaw:.2f}{suffix}'

pattern = re.compile(r"(id:\s*'[^']*-img-\d+',\s*position:\s*\{\s*yaw:\s*')([\d\.]+)(deg')")
new_content = pattern.sub(replace_yaw, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Fixed marker yaws.')
