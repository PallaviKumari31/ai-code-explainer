
# 🚀 AI Code Explainer

AI Code Explainer is a powerful web application that leverages Google’s Generative AI (Gemini API) to provide step-by-step natural language explanations of code snippets across multiple programming languages. Whether you're a beginner trying to understand a piece of code or a teacher explaining logic to students, this tool makes it easy to visualize and comprehend code.

---

## 🧠 Project Description

### ✨ Features
- 🎯 Select your preferred programming language.
- ✍️ Paste or write any code snippet.
- 🔍 Get clear, structured explanations of your code.

### 🔧 Tech Stack
- **Frontend**: React (Vite), Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **AI Integration**: Google Generative AI (Gemini API)

### 🌐 Live Demo
- **Frontend**: [https://6820886ee296b8730de2a6c6--cute-panda-edc3ca.netlify.app/](https://6820886ee296b8730de2a6c6--cute-panda-edc3ca.netlify.app/)  


---

## 🛠️ Setup Instructions

### 🔑 Prerequisites
- Node.js v18+
- npm v9+
- Google Generative AI API Key

---

### ⚙️ Local Development

#### 📦 Backend
cd server
npm install


Create a .env file inside /server with:

GEMINI_API_KEY=your-google-api-key


Run the server:

npm start


> Server runs at `http://localhost:5000`

#### 💻 Frontend

cd client
npm install


Update API endpoint in `App.jsx`:

const res = await axios.post('http://localhost:5000/api/explain', {
  code,
  language,
});


Run the app:

npm run dev


> Frontend runs at http://localhost:5173


### 🚀 Deployment

#### 🔧 Backend (Render/Railway)

1. Deploy backend repo.
2. Add GEMINI_API_KEY in environment settings.
3. Use npm start as the start script.

#### 🌍 Frontend (Netlify/Vercel)

1. Build production-ready code:

   npm run build
   
2. Deploy the /dist folder.
3. Update API URL in App.jsx:

   const res = await axios.post('https://your-backend-url.onrender.com/api/explain', {
     code,
     language,
   });


---

## 🖼️ Screenshots

### 🏠 Home Page

![Home Page]
![WhatsApp Image 2025-05-11 at 17 08 53_ecc0777a](https://github.com/user-attachments/assets/d4ca5945-8f23-4730-9bcd-eed13be4472c)

### 📄 Code Explanation

![Code Explanation]
![WhatsApp Image 2025-05-11 at 17 10 47_22d10fb7](https://github.com/user-attachments/assets/30312939-0fc6-417e-a04b-70e498b49778)


---

## 🎥 Demo Video

[📺 Watch Demo (3–4 mins)]


https://github.com/user-attachments/assets/e18c48b4-1a25-48ff-a65f-fe77caa32a87





---

## 👥 Contributors

* [Ashish Kumar](https://github.com/Ashishkr2504)


---

