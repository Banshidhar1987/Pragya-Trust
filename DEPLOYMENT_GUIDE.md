# Project Structure & Deployment Guide

## 📁 Complete Folder Structure

```
Pragya-Trust/
├── static/                          # Main website folder (UPLOAD THIS TO GODADDY)
│   ├── index.html                  # 🏠 Homepage with slideshow
│   ├── gallery.html                # 🖼️ Gallery page
│   ├── register.html               # 📝 Member registration form
│   ├── contact.html                # 💬 Contact/feedback form
│   ├── admin.html                  # ⚙️ Admin dashboard
│   ├── styles.css                  # 🎨 All styling
│   ├── script.js                   # 📜 Shared JavaScript utilities
│   ├── README.md                   # 📖 Main documentation
│   │
│   ├── 📁 data/                    # 📊 Data storage folder
│   │   ├── gallery.json            # Reference: Gallery images
│   │   ├── feedback.json           # Reference: Feedback submissions
│   │   ├── members.json            # Reference: Member registrations
│   │   └── README.md               # 📖 Data documentation
│   │
│   ├── 📁 images/                  # 🖼️ Image assets
│   │   ├── logo.jpeg               # Website logo
│   │   ├── README.md               # 📖 Images documentation
│   │   └── 📁 uploads/             # For uploaded images
│   │
│   └── .gitignore
│
├── Next.js Project Files (optional, can be deleted)
│   ├── pages/
│   ├── components/
│   ├── package.json
│   └── ...
│
└── README.md
```

## 🚀 Deployment Steps (GoDaddy)

### Step 1: Prepare Files
1. Navigate to: `C:\Users\bsaho\OneDrive\Desktop\Smruti bhai NGO\Project\Pragya-Trust\static\`
2. Select ALL files and folders:
   - index.html
   - gallery.html
   - register.html
   - contact.html
   - admin.html
   - styles.css
   - script.js
   - data/ (folder with gallery.json, feedback.json, members.json)
   - images/ (folder with logo.jpeg and uploads/)
   - README.md
   - .gitignore

### Step 2: Upload to GoDaddy

**Option A: File Manager (Recommended)**
1. Log in to GoDaddy Account
2. Go to **Hosting** → **File Manager**
3. Open the `public_html` folder
4. Delete any existing files/folders
5. Right-click → **Upload Files** → Select all files from Step 1
6. Wait for upload to complete
7. Visit your domain - DONE! ✅

**Option B: FTP Upload (Advanced)**
1. Download FileZilla or WinSCP (free)
2. Get FTP credentials from GoDaddy
3. Connect to your server
4. Drag & drop files to `public_html` folder
5. Visit your domain

---

## 📊 Data Storage Explained

### Browser Storage (localStorage)
- **Where:** Each visitor's browser
- **What:** Forms (feedback, registrations), uploaded images as base64
- **Persists:** Until browser cache is cleared
- **Per-Device:** Each device/browser has separate storage

### JSON Files in `data/` Folder
- **Purpose:** Reference templates for import/export
- **Use:** Bulk import data via Admin Dashboard
- **Format:** 
  ```json
  {
    "gallery": [...],
    "feedback": [...],
    "members": [...]
  }
  ```

### How to Backup Data
1. Click "📥 Export Data as JSON" in Admin Dashboard
2. File downloads automatically
3. Save to cloud storage (Google Drive, Dropbox, etc.)
4. Can re-import later if needed

---

## 🔐 Admin Access

**Login Credentials:**
- Username: `admin`
- Password: `pragnya123`

⚠️ **IMPORTANT:** Change these credentials!

**To change:**
1. Edit `admin.html` (line ~155)
2. Find:
   ```javascript
   const ADMIN_USER = 'admin';
   const ADMIN_PASS = 'pragnya123';
   ```
3. Update with new credentials
4. Re-upload to GoDaddy

---

## ✅ Testing Checklist

Before going live:

- [ ] Homepage loads with logo
- [ ] Slideshow displays images (if any uploaded)
- [ ] Navigation links work
- [ ] Registration form submits
- [ ] Feedback form submits
- [ ] Gallery page displays images
- [ ] Admin login works
- [ ] Image upload works
- [ ] Data export works
- [ ] Mobile responsive (test on phone)

---

## 🆘 Troubleshooting

### Images not showing in slideshow
- Admin needs to upload images first
- Check Admin Dashboard → Gallery Management
- Verify `localStorage` is enabled in browser

### Forms not saving data
- Clear browser cache and reload
- Check browser console for errors (F12)
- Verify JavaScript is enabled

### Admin login not working
- Default: `admin` / `pragnya123`
- Check if credentials were changed
- Clear browser cache

### Files not uploading to GoDaddy
- Ensure all files are selected (including folders)
- Check GoDaddy account has enough storage
- Try FTP method instead of File Manager

---

## 📱 Features Summary

| Feature | Status | How It Works |
|---------|--------|-------------|
| Homepage with Slideshow | ✅ | Images auto-rotate every 4 seconds |
| Gallery Page | ✅ | Shows all uploaded images |
| Member Registration | ✅ | Form saves to localStorage |
| Contact/Feedback Form | ✅ | Form saves to localStorage |
| Admin Dashboard | ✅ | Login-protected upload & view |
| Image Upload | ✅ | Stored as base64 in localStorage |
| Data Export | ✅ | Download as JSON file |
| Data Import | ✅ | Upload JSON to restore |
| Responsive Design | ✅ | Mobile, tablet, desktop |
| Logo Integration | ✅ | On all pages |

---

## 💡 Future Enhancements

If you later want to add:
- **Database:** Upgrade to Node.js/PHP backend
- **Server-side storage:** Save files to server instead of localStorage
- **Email notifications:** Send form submissions to email
- **Payment:** Accept donations online
- **Multiple admins:** User management system

---

## 📞 Support Resources

- **GoDaddy Help:** support.godaddy.com
- **File Manager Tutorial:** YouTube - "GoDaddy file manager tutorial"
- **FTP Guide:** YouTube - "How to upload files via FTP to GoDaddy"

---

**Your website is ready to deploy! 🎉**
