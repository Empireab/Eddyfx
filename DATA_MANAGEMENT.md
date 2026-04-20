# Data Management Guide

Your Eddyfx website now uses file-based storage instead of MongoDB. Here's how to manage your data:

## Files Location

Data files are stored in `frontend/public/`:
- `music.json` - Your music/songs data
- `videos.json` - Your videos data

## Adding Music

1. Open `frontend/public/music.json`
2. Add a new entry to the array. Example:

```json
{
  "id": "music-3",
  "title": "Your Song Title",
  "artist": "Your Artist Name",
  "coverImage": "https://link-to-image.jpg",
  "link": "https://audiomack-or-other-link.com/song",
  "ratings": []
}
```

3. Save the file
4. Refresh your website to see the new music

## Adding Videos

1. Open `frontend/public/videos.json`
2. Add a new entry to the array. Example:

```json
{
  "id": "video-3",
  "title": "Your Video Title",
  "thumbnail": "https://link-to-thumbnail.jpg",
  "youtubeLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "description": "Your video description",
  "ratings": []
}
```

3. Save the file
4. Refresh your website to see the new video

## Removing Music or Videos

1. Open the respective JSON file (`music.json` or `videos.json`)
2. Find the entry you want to remove (search by `id` or `title`)
3. Delete the entire object from the array
4. Save the file
5. Refresh your website

## Editing Existing Content

1. Open the JSON file
2. Find the entry by `id` or `title`
3. Edit the fields you want to change
4. Save the file
5. Refresh your website

## Important Notes

- **ID Format**: Keep IDs unique and consistent (e.g., `music-1`, `music-2`, etc.)
- **Image URLs**: Use direct image URLs or local paths. Examples:
  - External: `https://example.com/image.jpg`
  - Placeholder: `https://via.placeholder.com/200?text=Music+Cover`
- **YouTube Links**: For videos, use the full YouTube URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)
- **Ratings**: Ratings are stored in your browser's localStorage. They're automatically saved when users rate content and will persist across visits
- **Contact Submissions**: Contact form submissions are also saved in localStorage under `contact_submissions`
- **Clear Data**: To clear all ratings, open browser DevTools (F12) > Application > Local Storage and delete the entries

## JSON File Format

Make sure your JSON files follow proper format:
- Use double quotes for strings
- Separate array items with commas
- Ensure no trailing commas before closing brackets

## Testing Your Changes

After editing JSON files:
1. Save the file
2. Refresh the website (press F5 or Ctrl+R)
3. Check if your changes appear

## Troubleshooting

**Changes not appearing:**
- Make sure you saved the file
- Check the JSON syntax is valid (no missing commas or quotes)
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12 > Console)

**JSON Syntax Issues:**
- Use a JSON validator tool to check your syntax
- Common issues: missing commas between objects, trailing commas, unescaped quotes

## Running the Website

Frontend only (no backend needed):
```bash
cd frontend
npm install  # Only needed once
npm run dev
```

The website will run on `http://localhost:5173` (or similar)
