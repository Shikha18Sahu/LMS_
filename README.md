# 🎓 Full-Stack LMS Platform

> A robust education platform where educators publish courses and students enroll, pay, and learn — all in one place.

🔗 **Live Demo:** [lms-frontend-wheat-one.vercel.app](https://lms-frontend-wheat-one.vercel.app) &nbsp;|&nbsp; ⭐ Star this repo if you find it useful!

![React](https://img.shields.io/badge/React.js-61DAFB?style=flat&logo=react&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat&logo=stripe&logoColor=white) ![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat&logo=clerk&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🔐 | **Authentication** | Sign-up, sign-in & profile management via Clerk |
| 🧑‍🏫 | **Educator dashboard** | Create & manage courses, chapters, lectures, and enrollments |
| 🎬 | **Course player** | Dedicated video player for enrolled students |
| 💳 | **Payments** | Secure Stripe checkout for course purchases |
| 📊 | **Progress tracking** | Visual progress bars showing course completion |
| ☁️ | **Media storage** | Course images and assets stored via Cloudinary |

---

## 👤 User Flows

**Educator** → Log in → Become Educator → Add Course → Publish

**Student** → Browse Courses → Enroll → Pay via Stripe → Watch Lessons

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, Tailwind CSS, React Router DOM |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth | Clerk |
| Payments | Stripe |
| Media | Cloudinary |
| Deployment | Vercel (frontend + backend) |

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/Shikha18Sahu/LMS_.git

# 2. Start backend
cd server && npm install && npm start

# 3. Start frontend (in a new terminal)
cd client && npm install && npm run dev
```

> ⚠️ Make sure MongoDB is running and all environment variables are set before starting.

---

## 🔑 Environment Variables

**`server/.env`**
```env
MONGODB_URI=your_mongodb_connection
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
CLOUDINARY_URL=your_cloudinary_url
```

**`client/.env`**
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=your_backend_url
```

---

## 🌍 Deployment

Both frontend and backend are deployed on **Vercel**.

- Deploy `client/` and `server/` as separate Vercel projects
- Add all environment variables in each project's Vercel dashboard
- Connect GitHub for auto-deploy on every push

---

## 🔮 Future Improvements

- Live Q&A and discussion threads per course
- Certificate generation on course completion
- Mobile app (React Native)
- Advanced analytics for educators

---

## 📬 Contact

**Shikha Sahu** · [LinkedIn](https://www.linkedin.com/in/shikha-sahu-3b003b285/) · sahushikhauptu@gmail.com · [GitHub](https://github.com/Shikha18Sahu)
