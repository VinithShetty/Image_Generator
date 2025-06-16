# 🧠 AI Image Generator

**Turn Words into Stunning Visuals Using Stable Diffusion 2.1**

[![Hugging Face](https://img.shields.io/badge/API-Hugging%20Face-blue)](https://huggingface.co/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

> A modern web application that uses Hugging Face’s Stable Diffusion 2.1 to generate images from natural language prompts.

---

## ✨ Features

- 🖼️ **Multiple Image Generation** – Generate several images per prompt
- ⚡ **Real-Time Loading State** – Shows progress while images are being generated
- ✅ **Error Handling** – Clear messages on API failures or invalid inputs
- 💾 **Image Download** – Click to download any generated image
- 📱 **Responsive Design** – Clean and modern UI that works across all devices

---

## 🚀 Getting Started

### 🔧 Prerequisites

To use this project, you’ll need:

- A **Hugging Face API Key**
- A **modern web browser**
- A stable **internet connection**

### 📥 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/ai-image-generator.git
cd ai-image-generator
```

2. **Set up your API Key**

Open js/main.js

Replace the placeholder API key with your Hugging Face token

js
Copy
Edit
const HUGGINGFACE_API_KEY = "your_api_key_here";

3. **Run the app**

Open index.html in your web browser

### Usage

1. Enter a creative text prompt in the input box

2. Click the “Generate” button

3. Wait for the generated images to appear

4. Click any image to download it

### Project Structure

ai-image-generator/
├── assets/
│   └── logo.png
├── js/
│   └── main.js
├── styles/
│   └── style.css
├── index.html
└── README.md

### Technologies Used

- HTML5 – Page structure

- CSS3 – Styling and layout

- JavaScript (Vanilla) – Core logic and API calls

- Hugging Face API – Text-to-image generation

- Stable Diffusion 2.1 – Model used for generating images

### Getting a Hugging Face API Key

1. Go to huggingface.co

2. Sign up or log in

3. Navigate to your Account Settings → Access Tokens

4. Click “New Token”, then copy your key

5. Paste it into js/main.js as described above

### Acknowledgments

- Hugging Face for the API and model access

- The open-source community for inspiration, libraries, and support

### Return to Top


---

### ✅ Suggested Improvements (Optional for You to Add):

- Add a live preview (e.g., via GitHub Pages or Netlify)
- Include sample screenshots of generated images
- Add a `.env.example` if you want to externalize the API key setup
- Add dark mode toggle via CSS for enhanced UX

### Screenshots
![Screenshot 2024-04-25 143335](https://github.com/user-attachments/assets/5957b3d4-8317-4686-b36d-bfb449af8d4a)

![Screenshot 2024-04-25 143534](https://github.com/user-attachments/assets/7e1b57a1-a762-44af-8da4-8bdd5885b6a0)