# 🎵 EDDYFX - Music Artist Website

A modern, fully responsive full-stack music artist website built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Landing Page** - Hero section with navigation and call-to-action
- **Music Section** - Stream songs with rating system
- **Videos Section** - Watch exclusive video content
- **About Page** - Artist biography and achievements
- **Contact/Booking Form** - Direct messaging with email notifications
- **Dark Theme UI** - Modern, sleek professional design
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Toast Notifications** - User feedback for all actions
- **Smooth Animations** - Framer Motion for elegant transitions

## 📋 Tech Stack

### Frontend
- **React 19** - JavaScript library for UI
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Framer Motion** - Animation library
- **React Hot Toast** - Toast notifications
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Eddyfx/
├── frontend/                 # React application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── MusicCard.jsx
│   │   │   ├── VideoCard.jsx
│   │   │   └── RatingStars.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Music.jsx
│   │   │   ├── Videos.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx           # Main app component
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Global styles
│   ├── index.html            # HTML template
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── postcss.config.js     # PostCSS configuration
│   ├── .env.example          # Environment variables template
│   └── package.json          # Dependencies
├── backend/                  # Express API
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── models/
│   │   ├── Music.js          # Music schema
│   │   ├── Video.js          # Video schema
│   │   └── Contact.js        # Contact schema
│   ├── routes/
│   │   ├── music.js          # Music routes
│   │   ├── video.js          # Video routes
│   │   ├── rating.js         # Rating routes
│   │   └── contact.js        # Contact/Email routes
│   ├── server.js             # Main server file
│   ├── .env.example          # Environment variables template
│   └── package.json          # Dependencies
└── README.md                 # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Install locally](https://docs.mongodb.com/manual/installation/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Gmail Account** (for email notifications) - or other SMTP service

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```bash
   copy .env.example .env
   ```

4. **Configure environment variables** in `.env`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/music-artist
   EMAIL_SERVICE=gmail
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ADMIN_EMAIL=your_email@gmail.com
   ARTIST_NAME=EDDYFX
   FRONTEND_URL=http://localhost:5173
   ```

   **Email Setup (Gmail):**
   - Enable 2-Factor Authentication on your Gmail account
   - Generate an [App Password](https://myaccount.google.com/apppasswords)
   - Use the generated password in `EMAIL_PASSWORD`

5. **Start the backend**
   ```bash
   npm run dev
   ```
   Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory** (in a new terminal)
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```bash
   copy .env.example .env
   ```

4. **Configure environment variables** in `.env`:
   ```
   VITE_API_URL=http://localhost:5000
   VITE_ARTIST_NAME=EDDYFX
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 📝 API Endpoints

### Music
- `GET /api/music` - Get all music
- `GET /api/music/:id` - Get single music
- `POST /api/music` - Create music
- `PATCH /api/music/:id` - Update music
- `DELETE /api/music/:id` - Delete music

### Videos
- `GET /api/videos` - Get all videos
- `GET /api/videos/:id` - Get single video
- `POST /api/videos` - Create video
- `PATCH /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video

### Ratings
- `POST /api/rate/music/:id` - Rate music
- `POST /api/rate/video/:id` - Rate video

### Contact
- `POST /api/contact` - Send contact message/booking request

## 💾 Database Schemas

### Music Schema
```javascript
{
  title: String,           // Song title
  artist: String,          // Artist name
  coverImage: String,      // Image URL
  link: String,            // Audiomack/external link
  ratings: [{
    rating: Number,        // 1-5 stars
    createdAt: Date
  }],
  createdAt: Date
}
```

### Video Schema
```javascript
{
  title: String,           // Video title
  thumbnail: String,       // Image URL
  youtubeLink: String,     // YouTube URL
  description: String,     // Video description
  ratings: [{
    rating: Number,        // 1-5 stars
    createdAt: Date
  }],
  createdAt: Date
}
```

### Contact Schema
```javascript
{
  name: String,            // Visitor name
  email: String,           // Visitor email
  subject: String,         // Message subject
  message: String,         // Message content
  isBooking: Boolean,      // Booking flag
  createdAt: Date
}
```

## 🔧 Adding Content

### Add Music via MongoDB

```bash
# Connect to MongoDB shell
mongosh

# Use database
use music-artist

# Insert music
db.musics.insertOne({
  title: "Song Title",
  artist: "EDDYFX",
  coverImage: "https://image-url.jpg",
  link: "https://audiomack.com/...",
  ratings: [],
  createdAt: new Date()
})
```

### Add Videos via MongoDB

```bash
db.videos.insertOne({
  title: "Video Title",
  thumbnail: "https://image-url.jpg",
  youtubeLink: "https://youtube.com/watch?v=...",
  description: "Video description",
  ratings: [],
  createdAt: new Date()
})
```

Or use a MongoDB GUI like [MongoDB Compass](https://www.mongodb.com/products/compass)

## 🚀 Building for Production

### Backend

1. Update `.env` with production values
2. Deploy to a hosting service (Heroku, Railway, Render, Vercel, etc.)
3. Update `FRONTEND_URL` in backend environment

### Frontend

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy `dist/` folder to hosting service (Vercel, Netlify, etc.)

3. Update `VITE_API_URL` to production backend URL

## 📊 Performance Optimizations

- ✅ Image optimization with lazy loading
- ✅ Code splitting with React Router
- ✅ Tailwind CSS purging
- ✅ Smooth animations (non-blocking)
- ✅ Responsive design (mobile-first)
- ✅ API request debouncing
- ✅ Error handling & loading states

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js` to modify the color scheme

### Change Artist Name
Update `VITE_ARTIST_NAME` in frontend `.env` and `ARTIST_NAME` in backend `.env`

### Change Social Links
Edit the social links array in `frontend/src/components/Footer.jsx`

### Customize Email Template
Edit the email template in `backend/routes/contact.js`

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check MongoDB is running locally or verify your MongoDB Atlas connection string
- Verify `MONGODB_URI` in backend `.env`

### Email Not Sending
- Verify Gmail App Password is correct
- Check SMTP settings in backend `.env`
- Ensure 2FA is enabled on Gmail account

### CORS Errors
- Verify backend is running on port 5000
- Check `FRONTEND_URL` in backend `.env`
- Ensure frontend is making requests to correct API URL

### Port Already in Use
- Backend: `PORT=5001 npm run dev`
- Frontend: `npm run dev -- --port 5174`

## 📦 Deployment Recommendations

### Backend Hosting
- [Railway](https://railway.app) - Easy, free tier available
- [Render](https://render.com) - Good free tier
- [Heroku](https://heroku.com) - Paid option
- [AWS](https://aws.amazon.com) - Scalable option

### Frontend Hosting
- [Vercel](https://vercel.com) - Optimized for Next.js/React
- [Netlify](https://netlify.com) - Great for static sites
- [GitHub Pages](https://pages.github.com) - Free hosting

### Database Hosting
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Free tier available
- [Cloud MongoDB](https://www.cloudmongo.com)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues, questions, or contributions, feel free to open an issue or contact support.

## 🎵 Ready to Rock?

All set! Visit `http://localhost:5173` in your browser and start exploring your music website.

Happy creating! 🚀
