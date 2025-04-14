# 📝 Blogify – A Modern Blog Website (React + Appwrite)

Blogify is a full-stack blog application where users can create, update, and delete blog posts with featured images. Built with ReactJS for the frontend and Appwrite for backend services like authentication, database, and file storage.

---

## 🚀 Live Demo

Coming Soon (deploy on Netlify / Vercel and add the link here)

---

## 📸 Preview

![Blogify Screenshot](./screenshot.png) <!-- Replace with your own screenshot -->

---

## 📦 Tech Stack

### 🌐 Frontend
- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [TinyMCE](https://www.tiny.cloud/) (Rich text editor)
- [React Router DOM](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

### ☁️ Backend (BaaS)
- [Appwrite](https://appwrite.io/)
  - Authentication (Login/Register)
  - Database (for blog posts)
  - Storage (for featured images)

---

## ✨ Features

- ✅ User Authentication (Login, Register, Logout)
- 📝 Create, Edit & Delete Blog Posts
- 📤 Upload and Preview Featured Images
- 🌐 Public Blog Listing
- 🔐 Private Dashboard for Blog Management
- 🎨 Rich Text Editor with HTML Parsing
- 📁 File Handling using Appwrite Storage

---

## ⚙️ Getting Started

### 1. Clone the Repository

- git clone https://github.com/MrAhmed0702/BlogProject
- cd BlogProject

### 2. Install Dependencies
npm install

### 3. Set Up Appwrite

- Go to https://cloud.appwrite.io

- Create a new Appwrite Project.

- Enable Email & Password Authentication.

- Create:
    - A Database and a Collection for Blog Posts.
    - A Bucket for file storage.

- Add required attributes to your post collection:
    - title (text), slug (text, unique), content (text),
    - status (text), userId (text), featuredImage (text)

### 4. Configure Environment Variables

Create a .env file in the root folder:
  - VITE_APPWRITE_URL= https://cloud.appwrite.io/v1
  - VITE_APPWRITE_PROJECT_ID = your_project_id
  - VITE_APPWRITE_DATABASE_ID = your_db_id
  - VITE_APPWRITE_COLLECTION_ID = your_collection_id
  - VITE_APPWRITE_BUCKET_ID = your_bucket_id

### 5. Run the App
- npm run dev
- Open http://localhost:5173 in your browser.

## 🧠 Learning Concepts

- How to use Appwrite as a Backend
- React with Rich Forms and File Uploads
- Using Redux Toolkit for state management
- Building reusable components
- CRUD operations using Appwrite SDK

## 🧑‍💻 Author

- Ahmed Mohammed Jayanti Mochi
- https://github.com/MrAhmed0702

## 🙌 Acknowledgements

- Appwrite Docs
- Tailwind CSS Docs
- React Hook Form
