# How to Add Hero Images

Your website now uses **local image files** instead of URLs. This is much faster and doesn't depend on external websites.

## Where to Put Your Images

All hero images go in this folder:
```
frontend/public/hero/
```

## Adding Your Images

### Step 1: Prepare Your Images
Get 3 images ready (can be JPG, PNG, or WebP):
- `eddyfx1.jpeg` (or .jpg or .png)
- `eddyfx2.jpeg`
- `eddyfx3.jpeg`

**Recommended specs:**
- Size: 1200x600 pixels (or any 2:1 ratio)
- File size: 300KB or less (for fast loading)
- Format: JPEG for best compatibility

### Step 2: Add Images to the Folder

Copy/paste your images into:
```
frontend/public/hero/
```

**On Windows:**
1. Open File Explorer
2. Go to: `Eddyfx\frontend\public\hero\`
3. Paste your 3 images there
4. Name them: `eddyfx1.jpeg`, `eddyfx2.jpeg`, `eddyfx3.jpeg`

### Step 3: Refresh Your Website
- Save any changes
- Refresh your browser (F5)
- Your images will now appear in the carousel!

## File Structure

After adding images, your folder should look like:
```
frontend/
└── public/
    ├── hero/
    │   ├── eddyfx1.jpeg      ← Your first image
    │   ├── eddyfx2.jpeg      ← Your second image
    │   └── eddyfx3.jpeg      ← Your third image
    ├── music.json
    ├── videos.json
    └── ...other files
```

## Changing Image Names

If you want to use different filenames (like `hero1.jpg` instead of `eddyfx1.jpeg`):

1. Open: `frontend/src/pages/Home.jsx`
2. Find this section:
```javascript
const heroImages = [
    '/hero/eddyfx1.jpeg',
    '/hero/eddyfx2.jpeg',
    '/hero/eddyfx3.jpeg',
]
```

3. Change to your filenames:
```javascript
const heroImages = [
    '/hero/my-image-1.jpg',
    '/hero/my-image-2.jpg',
    '/hero/my-image-3.jpg',
]
```

## How to Convert Images

### Compress Images (Make them smaller)
- Use: https://tinypng.com (JPG & PNG)
- Or: https://www.freeconvert.com/compress-jpg

### Convert to Different Format
- Use: https://convertio.co (convert to JPG, PNG, WEBP)
- Or: https://www.freeconvert.com

### Resize Images
- Use: https://www.freeconvert.com/image-resizer
- Target: 1200x600 pixels

## Common Issues & Solutions

### ❌ Images not showing?
**Solution:**
- Make sure filenames match exactly (case-sensitive on Mac/Linux)
- Check file is in `frontend/public/hero/` folder
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check browser console for errors: F12 > Console

### ❌ Image is blurry or distorted?
**Solution:**
- Use images with 2:1 aspect ratio (twice as wide as tall)
- Original resolution should be at least 1200x600px
- Avoid stretching small images

### ❌ Website is slow?
**Solution:**
- Compress images: https://tinypng.com
- Use JPG format instead of PNG
- Keep files under 300KB each

### ❌ Can't find the folder?
**Solution:**

Navigate using File Explorer:
1. Go to: `C:\Users\YOUR_USERNAME\OneDrive\Desktop\Eddyfx\frontend\public\hero\`
2. Or search for folder named: `hero`
3. Copy your images there

## Quick Steps Summary

1. ✅ Get 3 images (JPG, PNG, or WEBP)
2. ✅ Compress them to ~300KB each
3. ✅ Rename to: `eddyfx1.jpeg`, `eddyfx2.jpeg`, `eddyfx3.jpeg`
4. ✅ Copy to: `frontend/public/hero/`
5. ✅ Refresh website
6. ✅ Done! Images will rotate every 10 seconds

## Picture Ideas for Music Artist

Great image suggestions:
- Studio setup/recording booth
- Live performance/concert
- DJ equipment
- Microphone close-up
- Music production gear
- Band/artist portrait
- Album artwork
- Music festival photos

---

**That's it! Your carousel is now using local images instead of URLs.** 🎉
