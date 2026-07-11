# Pragnya Educational & Social Trust - Website

A clean, lightweight website for Pragnya Trust built with **pure HTML, CSS, and JavaScript** - **no backend required**.

## 🚀 Quick Start

### To Deploy (GoDaddy or Any Static Host)

1. **Upload Files**: 
   - Open: `static/` folder
   - Select ALL files and folders inside it
   - Upload to your hosting's `public_html` folder via File Manager or FTP

2. **Visit Your Domain**: 
   - Go to your domain URL
   - Done! ✅

### Features

✅ **Automatic Slideshow** on homepage  
✅ **Gallery** with image captions  
✅ **Member Registration Form** - saves to browser  
✅ **Contact/Feedback Form** - saves to browser  
✅ **Admin Dashboard** - upload images, view data  
✅ **Export/Import Data** - backup as JSON  
✅ **Responsive Design** - mobile, tablet, desktop  
✅ **Professional Logo** - on all pages  
✅ **No Database Required** - no backend server needed  

---

## 📁 What to Upload

**Upload everything inside the `static/` folder:**

```
static/
├── index.html              # 🏠 Homepage
├── gallery.html            # 🖼️ Gallery
├── register.html           # 📝 Registration
├── contact.html            # 💬 Feedback
├── admin.html              # ⚙️ Admin (login: admin/pragnya123)
├── styles.css              # 🎨 All styling
├── script.js               # 📜 JavaScript utilities
├── data/                   # 📊 Data templates
│   ├── gallery.json
│   ├── feedback.json
│   └── members.json
├── images/                 # 🖼️ Images
│   ├── logo.jpeg
│   └── uploads/            # (for uploaded images)
└── README.md
```

---

## 🔐 Admin Login

**Default Credentials:**
- Username: `admin`
- Password: `pragnya123`

⚠️ **Change these after first login!**

---

## 💾 How Data Works

- **Forms** → Saved to browser's localStorage
- **Images** → Stored as base64 in localStorage  
- **Backup** → Export from Admin Dashboard (saves as JSON)
- **Restore** → Import JSON from Admin Dashboard

---

## 📖 Full Deployment Guide

See **DEPLOYMENT_GUIDE.md** for detailed step-by-step instructions.

---

## ✨ No Dependencies

- ✅ No Node.js
- ✅ No npm packages
- ✅ No backend server
- ✅ No database
- ✅ Pure HTML/CSS/JavaScript

Works on **any static hosting** (GoDaddy, Netlify, Vercel, GitHub Pages, etc.)

---

**Ready to deploy? Upload the `static/` folder contents now! 🚀**
