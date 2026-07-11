// Utility functions for localStorage-based data management

const Storage = {
  KEY_MEMBERS: 'pragnya_members',
  KEY_FEEDBACK: 'pragnya_feedback',
  KEY_GALLERY: 'pragnya_gallery',
  KEY_ADMIN_LOGIN: 'pragnya_admin_logged',

  getMembers() {
    const data = localStorage.getItem(this.KEY_MEMBERS);
    return data ? JSON.parse(data) : [];
  },

  addMember(member) {
    const members = this.getMembers();
    members.push({
      ...member,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem(this.KEY_MEMBERS, JSON.stringify(members));
  },

  getFeedback() {
    const data = localStorage.getItem(this.KEY_FEEDBACK);
    return data ? JSON.parse(data) : [];
  },

  addFeedback(feedback) {
    const items = this.getFeedback();
    items.push({
      ...feedback,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem(this.KEY_FEEDBACK, JSON.stringify(items));
  },

  getGallery() {
    const data = localStorage.getItem(this.KEY_GALLERY);
    return data ? JSON.parse(data) : [];
  },

  addGalleryItem(caption, imageBase64) {
    const gallery = this.getGallery();
    gallery.push({
      caption: caption,
      path: imageBase64,
      uploadedAt: new Date().toISOString()
    });
    localStorage.setItem(this.KEY_GALLERY, JSON.stringify(gallery));
  },

  isAdminLoggedIn() {
    return localStorage.getItem(this.KEY_ADMIN_LOGIN) === 'true';
  },

  setAdminLogin(isLoggedIn) {
    if (isLoggedIn) {
      localStorage.setItem(this.KEY_ADMIN_LOGIN, 'true');
    } else {
      localStorage.removeItem(this.KEY_ADMIN_LOGIN);
    }
  }
};

// Common functions
function showStatus(elementId, message, type) {
  const el = document.getElementById(elementId);
  if (el) {
    el.innerHTML = `<div class="status ${type}">${message}</div>`;
    setTimeout(() => {
      el.innerHTML = '';
    }, 5000);
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^\d{10}$|^\+\d{1,3}\d{9,}$/.test(phone.replace(/\D/g, ''));
}

// Navigation setup
function setupNavigation() {
  const header = document.querySelector('header');
  if (!header) return;

  const adminBtn = header.querySelector('.admin-btn');
  if (adminBtn) {
    adminBtn.addEventListener('click', () => {
      window.location.href = 'admin.html';
    });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', setupNavigation);
