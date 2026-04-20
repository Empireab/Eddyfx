# Quick Reference Guide

## TL;DR - What You Need to Know

### Your Website Now Uses Files Instead of Database ✅

**Two files contain all your content:**
- `frontend/public/music.json` - All your music
- `frontend/public/videos.json` - All your videos

### How to Add/Remove Content

1. **Add Music**: Open `frontend/public/music.json`, copy an existing entry and modify it
2. **Add Video**: Open `frontend/public/videos.json`, copy an existing entry and modify it
3. **Delete**: Remove the entire entry from the JSON file
4. **Save**: Save the file and refresh your website

### Run Your Website

```bash
cd frontend
npm run dev
```

Visit: `http://localhost:5173`

---

## Sample Music Entry

Copy this template and fill in your details:

```json
{
  "id": "music-3",
  "title": "Your Song Title",
  "artist": "Artist Name",
  "coverImage": "https://example.com/image.jpg",
  "link": "https://audiomack.com/link",
  "ratings": []
}
```

**ID**: Use `music-1`, `music-2`, `music-3`, etc. (must be unique)
**coverImage**: Direct URL to image file
**link**: Direct link to listen (Audiomack, YouTube, etc.)

---

## Sample Video Entry

```json
{
  "id": "video-3",
  "title": "Your Video Title",
  "thumbnail": "https://example.com/image.jpg",
  "youtubeLink": "https://www.youtube.com/watch?v=VIDEO_ID",
  "description": "Your video description",
  "ratings": []
}
```

**ID**: Use `video-1`, `video-2`, `video-3`, etc. (must be unique)
**youtubeLink**: Full YouTube URL with video ID
**thumbnail**: Direct URL to image file

---

## Ratings & Contact Data

**Ratings**: Saved in your browser (localStorage)
- Ratings persist until you clear browser cache
- Stored locally on each device

**Contact Form**: Submissions saved locally in browser
- Access via DevTools (F12) > Application > Local Storage
- Look for `contact_submissions`

---

## Common Tasks

### ❌ Problem: Changes not showing
**Solution**: 
1. Save your JSON file
2. Refresh website (F5 or Ctrl+R)
3. Do a hard refresh (Ctrl+Shift+R)

### ❌ Problem: JSON file won't open
**Solution**: 
- Check syntax: no trailing commas, all quotes are double quotes ""
- Use JSON validator: jsonlint.com

### ❌ Problem: Can't see new content
**Solution**:
- Make sure ID is unique
- Check JSON syntax
- Clear browser cache (Ctrl+Shift+Delete)

---

## File Locations

```
Eddyfx/
├── frontend/
│   ├── public/
│   │   ├── music.json     ← Edit this
│   │   ├── videos.json    ← Edit this
│   │   └── ...
│   ├── src/
│   └── package.json
├── backend/               ← No longer needed
├── DATA_MANAGEMENT.md     ← Full instructions
└── MIGRATION_COMPLETE.md  ← Detailed guide
```

---

## Links & Resources

**Valid Image URLs**:
- `https://via.placeholder.com/200?text=Music+Cover` (placeholder)
- `https://images.unsplash.com/...` (from Unsplash)
- Any direct image URL ending in `.jpg`, `.png`, `.webp`

**Getting YouTube Video ID**:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ` (after `v=`)

---

## One More Thing

**You don't need the backend anymore!**
- Frontend runs completely independently
- No database to set up
- No server to start
- Just edit JSON files directly

---

**Need help?** See `DATA_MANAGEMENT.md` or `MIGRATION_COMPLETE.md`
