# PPAPP 360° Virtual Tour

![PPAPP Virtual Tour](https://img.shields.io/badge/Status-Active-success)
![Vanilla JS](https://img.shields.io/badge/Tech-Vanilla_JS-f7df1e)

A 360° Virtual Tour web application built for the **Perbadanan Perpustakaan Awam Pulau Pinang (PPAPP)**. This interactive experience allows users to explore various PPAPP library branches virtually through high-resolution panoramic images, interactive markers, and audio narration.

🌐 **[Live Demo / GitHub Pages](https://aplikasi-perpustakaan.github.io/PPAPP-360-Virtual-Tour/)**

---

## 📖 Table of Contents

- [Features](#-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Library Branches](#-library-branches)
- [Project Structure](#-project-structure)
- [Development Setup](#-development-setup)
- [Adding New Locations](#-adding-new-locations)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## ✨ Features

- **Immersive 360° Panoramas**: High-quality 2:1 equirectangular projections (minimum 4096×2048).
- **Interactive Navigation**: Hotspots/links allowing users to "walk" between different areas and floors.
- **Rich Media Markers**: Info panels, audio narration, and ambient sounds embedded directly into scenes.
- **Multiple Branches**: Switch seamlessly between different library locations.
- **No Build Step**: Native ES Modules (`importmap`) allow for rapid development without Node.js, Webpack, or Vite.
- **Glassmorphism UI**: A modern, responsive "Dark Moody Blue/Grey" interface.

---

## 🛠 Architecture & Tech Stack

This project is built using a lightweight, dependency-free approach to maximize performance and simplify maintenance:

- **Frontend**: Vanilla HTML5, CSS3 (using custom properties), and JavaScript (ES6+).
- **Module System**: Native ES Modules loaded via `<script type="importmap">`. No build tools required.
- **Viewer**: [Photo Sphere Viewer (PSV)](https://photo-sphere-viewer.js.org/) for rendering the 360° environment.
- **Hosting**: Compatible with any static file server, IIS (`web.config` included), or Apache (`.htaccess` included).

---

## 🏛 Library Branches

The tour currently covers the following PPAPP branches:

| Code | Full Name |
| :--- | :--- |
| `pusat` | PUSAT – Seberang Jaya (HQ) |
| `bt` | Cawangan Daerah Seberang Perai Utara |
| `jw` | Cawangan Daerah Seberang Perai Selatan |
| `bm` | Cawangan Daerah Seberang Perai Tengah |
| `ppaj` | PP AEON Jusco Alma |
| `gt` | Cawangan Daerah Timur Laut |
| `ppk` | PP Lounge@Komtar |

---

## 📁 Project Structure

```text
PPAPP-360-Virtual-Tour/
├── index.html              # Main application entry point
├── main.js                 # App bootstrap & viewer initialization
├── style.css               # Global CSS with custom properties/themes
├── js/                     # Core JavaScript modules
│   ├── marker-templates.js # HTML templates for info/audio markers
│   ├── coordinate-logger.js# Utility for finding yaw/pitch coordinates
│   └── location-selector.js# UI logic for branch switching
├── locations/              # Scene data divided by branch
│   ├── pusat/
│   ├── bt/
│   └── ... (one folder per branch, containing modular section files)
├── images/                 # Panoramic images
│   ├── shared/             # UI assets, logos, placeholder images
│   └── {branch}/           # Per-branch panoramas (e.g., images/bt/)
├── audio/                  # Audio assets
│   ├── narration/          # Voiceovers for specific scenes
│   └── ambient/            # Background ambiance
└── assets/floor-plans/     # Minimaps and floor plan graphics
```

---

## 🚀 Development Setup

Because this project uses native ES Modules, you cannot simply open `index.html` from the file system (due to CORS restrictions). You must serve it over HTTP.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aplikasi-perpustakaan/PPAPP-360-Virtual-Tour.git
   cd PPAPP-360-Virtual-Tour
   ```

2. **Start a local static server**:
   You can use any lightweight static server. Some common options:
   
   - **Python 3**:
     ```bash
     python -m http.server 8000
     ```
   - **Node.js (http-server)**:
     ```bash
     npx http-server -p 8000
     ```
   - **VS Code**: Use the "Live Server" extension.

3. **Open in Browser**:
   Navigate to `http://localhost:8000`

---

## 🗺 Adding New Locations

Location data is structured modularly. To add a new panorama or scene:

1. **Add the image**: Place the equirectangular `.jpg` in the appropriate `images/{branch}/` folder.
2. **Define the scene**: In `locations/{branch}/`, create or update a javascript module (e.g., `f1-reading.js`). Use the standard template:

   ```javascript
   export default [
     {
       id: 'branch-floor-description',
       name: 'Floor – Area Name',
       caption: 'BRANCH – Floor – Area Name',
       panorama: './images/branch/branch-floor-description.jpg',
       thumbnail: './images/branch/branch-floor-description.jpg',
       defaultYaw: '0deg',
       defaultPitch: '0deg',
       links: [
         {
           nodeId: 'target-scene-id',
           position: { yaw: '90deg', pitch: '0deg' },
           name: 'Go to Target Scene'
         }
       ],
       markers: [],
       data: {
         floor: 'f1',
         tags: ['keyword']
       }
     }
   ];
   ```
3. **Link it**: Ensure the new file is imported and exported in the branch's `index.js` file.

---

## ☁️ Deployment

This is a completely static application. It can be deployed to any static web host (GitHub Pages, Netlify, Vercel, AWS S3) or traditional web servers.

- **IIS**: A `web.config` file is provided at the root to handle MIME types and caching.
- **Apache**: An `.htaccess` file is provided for the same purpose.
- **GitHub Pages**: Pushing to the `main` or `gh-pages` branch will automatically deploy the site depending on the repository settings.

---

## 🤝 Contributing

When contributing to this repository, please adhere to the following standards:
- **Module Format**: Use ES Modules (`import`/`export`) exclusively.
- **Styling**: Utilize the existing CSS custom properties (`var(--color-accent-blue)`, etc.) located in `style.css`.
- **Images**: Ensure all panoramas are `.jpg`, optimized to 80-85% quality, and kept under 10 MB where possible.
