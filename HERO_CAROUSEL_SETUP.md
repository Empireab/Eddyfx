# Hero Image Carousel Setup

Your landing page now has a rotating image carousel that changes every 10 seconds!

## Current Features ✅
- 3 images rotate automatically
- Each image displays for 10 seconds
- Smooth fade transition between images
- Dark overlay ensures text is readable
- Images are behind the text (background layer)

## How to Change the Images

### Step 1: Find or Create Your Images
You need 3 images for the carousel. You can:
- Use your own images (upload them to a server or hosting service)
- Find free images from:
  - Unsplash: https://unsplash.com
  - Pexels: https://pexels.com
  - Your own hosted image URLs

### Step 2: Get Direct Image URLs
Make sure you have the direct URL to each image. Examples:
- `https://example.com/image1.jpg`
- `https://example.com/image2.jpg`
- `https://example.com/image3.jpg`

### Step 3: Edit Home.jsx

Open: `frontend/src/pages/Home.jsx`

Find this section (around line 7-11):
```javascript
const heroImages = [
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop',
]
```

Replace the URLs with your own image URLs:
```javascript
const heroImages = [
    'https://your-image-url-1.jpg',
    'https://your-image-url-2.jpg',
    'https://your-image-url-3.jpg',
]
```

### Step 4: Save and Refresh
1. Save the file
2. Refresh your website
3. The carousel will now display your images!

## Ways to Host Images

### Option 1: Use Unsplash (Free, Easy)
1. Go to https://unsplash.com
2. Search for relevant images
3. Download the image
4. Right-click > Copy image link
5. Use that URL in `heroImages`

### Option 2: Upload to Imgur (Free, No Account)
1. Go to https://imgur.com
2. Upload your image
3. Copy the image URL
4. Use in `heroImages`

### Option 3: Use a Free Image Hosting Service
- Postimg: https://postimg.cc
- Imgbb: https://imgbb.com
- Cloudinary: https://cloudinary.com (free tier)

### Option 4: Host on Your Own Server
If you have web hosting, upload images there and use direct URLs.

## Recommended Image Specifications

For best results, use images with these specs:
- **Resolution**: At least 1200x600px
- **Format**: JPG, PNG, or WebP
- **Size**: 300KB or less (for faster loading)
- **Aspect Ratio**: 2:1 (2 wide, 1 tall)
- **Content**: Music/Creative related (for best branding)

## Customizing the Rotation Speed

Want to change from 10 seconds to something else?

Open: `frontend/src/pages/Home.jsx`

Find this line (around line 18):
```javascript
}, 10000)  // 10000 milliseconds = 10 seconds
```

Change `10000` to:
- `5000` = 5 seconds
- `8000` = 8 seconds
- `15000` = 15 seconds
- `20000` = 20 seconds

## Customizing the Dark Overlay

Want to make the overlay lighter or darker so text shows better?

Find this line (around line 49):
```javascript
<div className="absolute inset-0 bg-black opacity-50" />
```

Change `opacity-50` to:
- `opacity-30` = lighter (more image visible)
- `opacity-70` = darker (text easier to read)
- `opacity-80` = very dark (best for reading white text)

## Customizing the Transition Speed

Want to change how fast the images fade in/out?

Find this line (around line 39):
```javascript
className={`absolute inset-0 transition-opacity duration-1000 ${
```

Change `duration-1000` to:
- `duration-500` = faster fade (0.5 seconds)
- `duration-1000` = normal fade (1 second)
- `duration-2000` = slower fade (2 seconds)

## Example: Music Photos

Here are some good Unsplash searches for music images:
- "music production" - studio photos
- "concert" - live performance photos
- "DJ" - DJ/electronic music
- "recording studio" - professional studio
- "musical instrument" - instrument close-ups
- "microphone" - recording equipment

## Troubleshooting

### Images not showing?
- Check the URL is correct (copy from browser address bar)
- Make sure it's a direct image URL (ends in .jpg, .png, or .webp)
- Check browser console for errors (F12 > Console)

### Text not readable?
- Increase the `opacity` value (e.g., `opacity-70` instead of `opacity-50`)
- Use darker images
- Adjust `duration-1000` if transition is too fast

### Images taking too long to load?
- Use smaller image files
- Compress images before uploading
- Use image URLs that include size parameters (like Unsplash URLs do)

## That's it! 🎉

Your carousel is now set up and ready to showcase your music/creative brand!
