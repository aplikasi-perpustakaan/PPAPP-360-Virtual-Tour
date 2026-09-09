# Adding 360 Photos Workflow

This rule defines the workflow for when the user provides a Google Photos link or an image file to be added to the 360 Virtual Tour.

## Process

1. **Receive Information**: The user will provide a link/photo along with the target **branch** (e.g., `pusat`), **floor** (e.g., `f1`), **section** (e.g., `lobby`), and **scene number** (e.g., `1`).

2. **Download Image**: Download the provided image using appropriate tools (e.g., `run_command` with `Invoke-WebRequest` for direct links, or `browser_subagent` if it's a dynamic Google Photos page).

3. **Validate Image**: Ensure the image meets these requirements:
   - Format: `.jpg` (JPEG)
   - Aspect ratio: 2:1 (equirectangular)
   - Resolution: Minimum 4096×2048, recommended 8192×4096
   - File size: Target < 10 MB

4. **Save Image**: Save the downloaded image into the correct path following the naming convention:
   - **Multi-scene section**: `images/{branch}/{section}/{branch}-{section}-{N}.jpg`
     (e.g., `images/bt/f2-reading/bt-f2-reading-1.jpg`)
   - **Single-scene section**: `images/{branch}/{branch}-{floor}-{section}.jpg`
     (e.g., `images/pusat/pusat-f1-entrance.jpg`)
   - Create the target directory if it does not exist.

5. **Update Scene Data**: Open the relevant section file at `locations/{branch}/{section}.js`.

6. **Add/Update Configuration**: Add or update the scene configuration object in the section's export array:

   ```javascript
   {
     id: '{branch}-{section}-{N}',
     name: '{Floor Title} – {Section Title} {N}',
     caption: '{BRANCH} – {Floor Title} – {Section Title} {N}',
     panorama: './images/{branch}/{section}/{branch}-{section}-{N}.jpg',
     thumbnail: './images/{branch}/{section}/{branch}-{section}-{N}.jpg',
     defaultYaw: '0deg',
     defaultPitch: '0deg',
     links: [],
     markers: [],
     data: {
       floor: '{floor}',
       tags: ['{section}'],
     },
   },
   ```

7. **Update index.js**: If this is a new section file, import it and spread it into the branch's `locations/{branch}/index.js`:

   ```javascript
   import newSection from './{section}.js';
   // ... in the export default array:
   ...newSection,
   ```

8. **Bi-directional Links**: If the scene connects to existing scenes, add links in BOTH directions:
   - Add a link from the new scene to its neighbor
   - Add a reverse link from the neighbor back to the new scene

9. **Notify User**: Confirm to the user that the photo has been added, report the scene ID created, and ask for the next one.
