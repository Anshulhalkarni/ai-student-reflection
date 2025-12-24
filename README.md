# AI-Guided Student Reflection Platform

An AI-powered web platform designed to help college students gain clarity on how they spend their time and whether it aligns with their current learning or career direction.

---

## 🧩 Problem Statement

Many students are busy with classes, online content, and learning resources, yet lack clear feedback on whether their efforts are aligned with their goals. Existing productivity tools focus on doing more, but do not help students reflect on what actually matters.

---

## 💡 Solution Overview

This platform encourages **periodic reflection instead of daily productivity tracking**.  
Students provide a simple weekly time breakdown and select their current direction.  
Using **Google Gemini AI**, the system analyzes this input and provides:

- What activities to reduce
- What habits to unlearn (for now)
- What to focus on next
- A realistic weekly direction (not a schedule)

An optional AI mentor chat supports students emotionally and guides them toward reflection when they feel confused.

---

## ✨ Key Features

- Weekly time reflection (non-intrusive)
- Goal-based AI analysis
- AI-generated suggestions to reduce, unlearn, and focus
- Calm, non-judgmental guidance
- Privacy-friendly design (no continuous tracking)

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS

### Backend
- Firebase Authentication (Google Sign-In)
- Firebase Cloud Functions (Node.js)
- Firebase Firestore
- Google Gemini API

### Hosting
- Firebase Hosting

---

## 🔄 System Architecture

Frontend (React)  
→ Firebase Authentication  
→ Firebase Cloud Functions  
→ Google Gemini API  
→ Response displayed to user

---

## 🚀 Deployment

- Backend deployed using Firebase Cloud Functions
- Frontend hosted using Firebase Hosting
- Live MVP available via Firebase web URL

---

## 📂 Repository Structure

/
├── frontend/ # React + Tailwind UI
├── backend/
│ └── functions/ # Firebase Cloud Functions (Gemini integration)
├── README.md


---

## 🎥 Demo & Links

- Live MVP Link: (added after deployment)
- 3-Minute Demo Video: (added after recording)
- PPT (PDF): (submission material)

---

## 📌 Note

This project was built as part of a **GDG Hackathon**, with a focus on:
- learning AI integration
- rapid prototyping
- clean system design

The current implementation represents an MVP and can be extended further.

---

## 👥 Team

Built collaboratively with clear separation of frontend and backend responsibilities.
Anshul Halkarni
Rutuja Chopade
Rania Jamadar
Ayush T

---

## 🔮 Future Scope

- Enhanced AI mentor chat using past reflections
- Long-term progress visualization
- Personalized learning resource recommendations
- Mobile-friendly or native app support
- Anonymous campus-level insights

---

