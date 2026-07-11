# Data Folder - Storage Documentation

This folder contains JSON files for storing application data.

## Files

### `gallery.json`
Stores all gallery images with metadata.

**Structure:**
```json
{
  "gallery": [
    {
      "id": 1,
      "caption": "Image description",
      "path": "/uploads/image-name.jpeg",
      "uploadedAt": "ISO-8601 timestamp"
    }
  ]
}
```

**Note:** When images are uploaded via the Admin Dashboard, they are stored as **base64** data in the browser's localStorage, not in this file.

---

### `feedback.json`
Stores all feedback/contact form submissions.

**Structure:**
```json
{
  "feedback": [
    {
      "name": "Visitor name",
      "email": "visitor@email.com",
      "phone": "+91 XXXXXXXXXX",
      "message": "User message",
      "createdAt": "ISO-8601 timestamp"
    }
  ]
}
```

**Note:** Feedback submissions are stored in browser's localStorage. Use the Admin Dashboard to export data as JSON.

---

### `members.json`
Stores all member registrations.

**Structure:**
```json
{
  "members": [
    {
      "name": "Member name",
      "email": "member@email.com",
      "phone": "+91 XXXXXXXXXX",
      "interest": "Free Education | Tree Plantation | Both | Volunteering | Donation",
      "createdAt": "ISO-8601 timestamp"
    }
  ]
}
```

**Note:** Member registrations are stored in browser's localStorage.

---

## How Data is Managed

### ✅ Browser Storage (localStorage)
- All form submissions (feedback, members, images) are saved in **browser's localStorage**
- Data is **persistent** - survives page refreshes
- Data is **per-device** - each visitor's browser has separate storage
- Export available in Admin Dashboard

### JSON Files
- These are **reference templates** for importing bulk data
- Used when first loading the application
- Can be populated via Admin Dashboard's "Import Data" feature

### During Deployment
1. Upload all files including `data/` folder to GoDaddy
2. Each visitor's browser will store their own data
3. Use Admin Dashboard to export and backup data
4. Download JSON files from Admin Dashboard to save permanently

---

## Data Export/Import

### Export (from Admin Dashboard)
1. Click "📥 Export Data as JSON"
2. File downloads containing all gallery, feedback, and members
3. Store this file safely

### Import (to Admin Dashboard)
1. Prepare JSON file with data structure above
2. Click "📤 Import Data from JSON"
3. Select the JSON file
4. Data loads into browser storage

---

## Backup Strategy

**Recommended:**
1. Regular exports from Admin Dashboard
2. Save JSON files to cloud storage
3. Import back if needed in new browser/device

**For Production:**
- Export data weekly
- Keep backup copies
- Share access to admin for team members
