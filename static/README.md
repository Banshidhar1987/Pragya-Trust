# Pragnya Trust - HTML/CSS/JS Version (Static Website)

This is a **static HTML version** of the Pragnya Educational & Social Trust website. No server-side processing is required - it works on any basic web hosting.

## Features

✅ **Home Page** - Hero section, about information, donation QR placeholder  
✅ **Automatic Slideshow** - Gallery images auto-display with navigation controls  
✅ **Photo Gallery** - Full image gallery with captions  
✅ **Member Registration** - Save registrations to browser storage  
✅ **Contact/Feedback Form** - Collect inquiries and feedback  
✅ **Admin Dashboard** - Upload images, view data, export/import JSON  
✅ **Professional Logo** - Integrated on all pages  
✅ **Fully Responsive** - Works on mobile, tablet, desktop  

## How It Works

- All data is stored in **browser localStorage** (not on a server)
- Images uploaded in admin are stored as **base64** in the browser
- Data persists as long as the browser cache is not cleared
- Perfect for basic websites on static hosting

## Files Structure

```
static/
├── index.html              # Home page with slideshow
├── gallery.html            # Photo gallery
├── register.html           # Member registration
├── contact.html            # Contact/feedback form
├── admin.html              # Admin dashboard
├── styles.css              # All styling
├── script.js               # Shared JavaScript utilities
├── data/                   # 📁 Data storage folder
│   ├── gallery.json        # Gallery images (reference template)
│   ├── feedback.json       # Feedback submissions
│   ├── members.json        # Member registrations
│   └── README.md           # Data documentation
├── images/                 # 📁 Image assets
│   ├── logo.jpeg           # Website logo
│   ├── uploads/            # 📁 Folder for uploaded images
│   └── README.md           # Images documentation
└── README.md               # This file
```

## Local Testing

1. Open `index.html` in your browser
2. Click "Admin" button to access admin dashboard
3. Use credentials: `admin` / `pragnya123`
4. Upload images and test all features

## Deploying to GoDaddy

### Option 1: GoDaddy File Manager (Recommended for Beginners)

1. Log in to **GoDaddy Account** → **Hosting**
2. Click **File Manager**
3. Navigate to `public_html` folder
4. Delete existing files (if any)
5. Upload all files from the `static` folder
6. Access your website at `yourdomainname.com`

### Option 2: FTP Upload

1. Get FTP credentials from GoDaddy hosting account
2. Use an FTP client (like FileZilla, WinSCP)
3. Connect to your GoDaddy server
4. Upload all files from `static` folder to `public_html`
5. Set file permissions: `644` for files, `755` for folders

### Option 3: GitHub + Deploy with GoDaddy App Hosting

1. Push this folder to GitHub
2. In GoDaddy Account → Hosting → Applications
3. Create a new static site application
4. Connect your GitHub repository
5. GoDaddy will auto-deploy

## Important Notes

⚠️ **Data Backup**: Since data is stored in browser localStorage:
- Each visitor's browser stores data separately
- Use Admin Dashboard → "Export Data as JSON" to backup
- Clearing browser cache will erase all data on that device

📱 **Mobile Friendly**: Website is fully responsive on all devices

🔐 **Admin Credentials**: Change default password in `admin.html` (line 155):
```javascript
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'pragnya123';
```

## Customization

### Change Colors
Edit `:root` variables in `styles.css`:
```css
:root {
  --brand-green: #38a169;
  --brand-blue: #2563eb;
}
```

### Add UPI QR Code
Replace the QR code placeholder in `index.html` with an actual image:
```html
<img src="qr-code.png" alt="UPI QR Code" style="width: 150px; height: 150px;">
```

### Add Your Logo
Replace "Logo" text in `index.html` with an image:
```html
<img src="logo.png" alt="Pragnya Logo" style="width: 150px;">
```

## Support

For GoDaddy hosting issues:
- Chat: GoDaddy Account → Help
- Phone: GoDaddy Support
- Video Tutorial: Search "GoDaddy file manager tutorial"

---

**Ready to deploy? Choose Option 1 (File Manager) for quickest setup!**
