# Adding 360 Photos Workflow

This rule defines the workflow for when the user provides a Google Photos link or an image file to be added to the 360 Virtual Tour.

## Process
1. **Receive Information**: The user will provide a link/photo along with the target **branch** (e.g., `pusat`), **floor** (e.g., `f1`), and **description** (e.g., `entrance`).
2. **Download Image**: Download the provided image using appropriate tools (e.g., `run_command` with `Invoke-WebRequest` for direct links, or `browser_subagent` if it's a dynamic Google Photos page).
3. **Save Image**: Save the downloaded image into the directory `images/{branch}/` following the naming convention: `{branch}-{floor}-{description}.jpg` (e.g., `images/pusat/pusat-f1-entrance.jpg`). Ensure it is a `.jpg` file.
4. **Update Scene Data**: Open the relevant location configuration file `locations/{branch}.js`.
5. **Add Configuration**: Append a new scene configuration object to the default export array with the following template:

```javascript
  {
    id: '{branch}-{floor}-{description}',
    name: '{Floor} – {Area Name}', // e.g., 'F1 – Entrance'
    caption: '{BRANCH} – {Floor} – {Area Name}', // e.g., 'PUSAT – F1 – Entrance'
    panorama: './images/{branch}/{branch}-{floor}-{description}.jpg',
    thumbnail: './images/{branch}/{branch}-{floor}-{description}.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [],
    markers: [],
    data: {
      floor: '{floor}',
      tags: ['{description}'],
    },
  },
```
6. **Notify User**: Confirm to the user that the photo has been added and ask for the next one.
