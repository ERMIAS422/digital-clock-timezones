# ⏰ Digital Clock - Multiple Time Zones

A beautiful, responsive digital clock that displays the current time in 12 major cities around the world. Perfect for anyone who needs to track multiple time zones at once!

## 🌍 Features

✅ **12 Global Time Zones**
- New York (EST/EDT)
- London (GMT/BST)
- Tokyo (JST)
- Dubai (GST)
- Sydney (AEDT/AEST)
- Singapore (SGT)
- São Paulo (BRT)
- Los Angeles (PST/PDT)
- Moscow (MSK)
- Hong Kong (HKT)
- Berlin (CET/CEST)
- Toronto (EST/EDT)

✅ **Real-time Updates** - Updates every second
✅ **Beautiful Design** - Modern gradient background with smooth animations
✅ **Responsive Layout** - Works perfectly on desktop, tablet, and mobile
✅ **Date Display** - Shows the current date for each timezone
✅ **Smooth Animations** - Pulse effect on time displays
✅ **No Dependencies** - Pure HTML, CSS, and JavaScript

## 🚀 Getting Started

### Option 1: Clone the Repository

```bash
git clone https://github.com/ERMIAS422/digital-clock-timezones.git
cd digital-clock-timezones
```

### Option 2: Manual Setup

1. Create a new folder: `digital-clock-timezones`
2. Create three files inside:
   - `index.html`
   - `style.css`
   - `script.js`
3. Copy the respective code from this repository into each file

## 💻 Usage

Simply open `index.html` in your web browser:

```bash
open index.html
```

Or double-click the `index.html` file in your file explorer.

## 📁 Project Structure

```
digital-clock-timezones/
├── index.html       # HTML structure with 12 clock cards
├── style.css        # Styling and responsive design
├── script.js        # JavaScript for timezone logic
└── README.md        # This file
```

## 🎨 Customization

### Add More Time Zones

Edit `script.js` and add new entries to the `timeZones` array:

```javascript
const timeZones = [
    // ... existing zones ...
    { id: 'your-time', city: 'Your City', tz: 'Continent/City', dateId: 'your-date' }
];
```

Then add corresponding HTML in `index.html`:

```html
<div class="clock-card">
    <div class="timezone-label">
        <span class="city">Your City</span>
        <span class="tz-code">TZ Code</span>
    </div>
    <div class="digital-time" id="your-time">00:00:00</div>
    <div class="date" id="your-date">---</div>
</div>
```

### Change Colors

Edit the gradient in `style.css` under `body`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change these hex colors to your preference */
}
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/root` folder
5. Your site will be live at `https://ERMIAS422.github.io/digital-clock-timezones`

### Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select this repository
5. Deploy!

### Deploy to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Click "New Project"
3. Import from Git
4. Select this repository
5. Deploy!

## 🔧 Technical Details

- **JavaScript TimeZone Handling**: Uses `toLocaleString()` with the `timeZone` parameter
- **Update Frequency**: Clocks update every 1000ms (1 second)
- **Responsive Grid**: CSS Grid with auto-fit columns
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## 📝 Supported Timezones

The script uses IANA timezone identifiers. For a complete list, visit: [IANA Timezone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by [ERMIAS422](https://github.com/ERMIAS422)

## 💡 Ideas for Enhancement

- [ ] Add a settings panel to select custom timezones
- [ ] Add 12-hour time format option
- [ ] Add alarm functionality
- [ ] Add timezone search feature
- [ ] Add weather information for each city
- [ ] Add sound notifications

---

**Enjoy your global time zone tracker!** ⏰🌍