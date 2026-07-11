# Images Folder - Asset Storage

This folder contains all image assets for the website.

## Structure

```
images/
├── logo.jpeg              # Main website logo
├── README.md              # This file
└── uploads/               # Folder for uploaded images
    └── (uploaded images stored here when deployed)
```

## Folders

### `uploads/`
- Contains images uploaded by admin via the Admin Dashboard
- **Note:** In the current static version, uploaded images are stored as **base64 in browser's localStorage**, not as physical files
- This folder is included for when upgrading to server-based storage

---

## Logo File

**File:** `logo.jpeg`
- **Size:** ~50KB
- **Dimensions:** Square format
- **Used on:** All pages in header and homepage hero section

---

## Uploading Images

When deploying to GoDaddy:
1. Upload the entire `images/` folder including `uploads/` subfolder
2. Ensure folder permissions allow write access
3. Uploaded images will be stored as base64 in localStorage (current implementation)

---

## Future Enhancement

To store uploaded images as physical files instead of base64:
1. Upgrade to a server-side backend (Node.js, PHP, etc.)
2. Configure file upload handler
3. Images will save to `images/uploads/` folder
4. Update gallery.json with file paths

---

## Image Guidelines

### Recommended Settings
- **Format:** JPEG or PNG
- **Max Size:** 5MB per image
- **Dimensions:** 1200px × 800px (landscape) or 800px × 1200px (portrait)
- **Quality:** 80-90% compression

### File Naming
Use descriptive names:
- ✅ `tree-plantation-event-2026.jpeg`
- ✅ `free-education-class.jpeg`
- ❌ `img1.jpeg`
- ❌ `photo.jpg`
