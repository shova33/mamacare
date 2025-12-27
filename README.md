# MamaCare 🤰💕

**Your caring pregnancy companion for Nepal**

MamaCare is a Progressive Web App (PWA) designed specifically for pregnant women in Nepal, providing trimester-based care reminders, pregnancy tracking, and supportive guidance throughout the pregnancy journey.

## ✨ Features

### Phase 1 (Current)
- **Onboarding Flow**: Simple EDD (Expected Due Date) input with automatic trimester detection
- **Pregnancy Tracking**: Real-time week and trimester calculation
- **Trimester-Based Reminders**: Personalized care reminders for each trimester
  - 1st Trimester: Folic acid, rest, nausea care, first checkup
  - 2nd Trimester: Iron supplements, nutrition, gentle exercise, regular checkups
  - 3rd Trimester: Hospital prep, danger signs awareness, weekly checkups
- **Beautiful Dashboard**: Calming pastel design with progress visualization
- **Bilingual Support**: Full English and Nepali language support
- **Offline-First**: Works completely offline with local data storage
- **Installable**: Can be installed on Android devices as a native-like app

### Phase 2 (Planned)
- Hospital tracking with Nepal-specific maternity hospitals
- Emergency button for quick access to help
- Map integration for nearby hospitals
- AI-powered pregnancy insights

## 🎨 Design Philosophy

- **Calming & Supportive**: Pastel pink and lavender color scheme
- **Female-Friendly**: Designed with empathy and care
- **Simple & Clear**: Suitable for low-medium digital literacy
- **Nepal Context**: Culturally appropriate and locally relevant

## 🚀 Getting Started

### Running Locally

1. **Simple HTTP Server** (No installation required):
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using PHP (if installed)
   php -S localhost:8000
   ```

2. **Open in browser**:
   - Navigate to `http://localhost:8000`
   - The app will work on any modern browser

3. **Install on Android**:
   - Open the app in Chrome on Android
   - Tap the menu (⋮) and select "Add to Home Screen"
   - The app will install like a native app

### Deployment

Deploy to any static hosting service:
- **GitHub Pages**: Free and easy
- **Netlify**: Automatic deployments
- **Vercel**: Fast global CDN
- **Firebase Hosting**: Google's hosting platform

## 📱 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom design system with CSS variables
- **Vanilla JavaScript**: No frameworks, lightweight and fast
- **PWA**: Progressive Web App with manifest and offline support
- **LocalStorage**: Client-side data persistence

## 📂 Project Structure

```
mamacare/
├── index.html          # Main HTML entry point
├── app.js              # Core application logic
├── styles.css          # Complete styling and design system
├── manifest.json       # PWA manifest for installability
├── icon-192.png        # App icon (192x192)
├── icon-512.png        # App icon (512x512)
└── README.md           # This file
```

## 🌟 Key Features Explained

### Pregnancy Calculations
- Automatically calculates current week from EDD
- Determines trimester (1st: weeks 1-13, 2nd: 14-27, 3rd: 28-40)
- Shows days remaining until due date
- Updates in real-time on each app load

### Reminder System
Each trimester has specific reminders:
- **Icons**: Visual representation for easy recognition
- **Timing**: Suggested times throughout the day
- **Bilingual**: All reminders available in English and Nepali
- **Contextual**: Relevant to trimester stage

### Data Persistence
- All data stored locally in browser's LocalStorage
- No server required, complete privacy
- Data persists across sessions
- Can be reset from settings

## 🇳🇵 Nepal-Specific Considerations

- **Language**: Full Nepali translation support
- **Cultural Sensitivity**: Appropriate messaging and tone
- **Accessibility**: Works on low-end Android devices
- **Offline**: No internet required after initial load
- **Future**: Hospital data will include Nepal health posts and maternity centers

## 🔒 Privacy & Security

- **100% Local**: All data stays on your device
- **No Tracking**: No analytics or third-party services
- **No Account**: No registration or login required
- **Your Data**: You control everything, can reset anytime

## 🛠️ Development

### Making Changes

1. Edit the files directly
2. Refresh browser to see changes
3. No build process required

### Adding Features

- **New Reminders**: Edit `reminderTemplates` in `app.js`
- **Translations**: Update `translations` object in `app.js`
- **Styling**: Modify CSS variables in `styles.css`
- **New Screens**: Add render functions in `app.js`

## 📄 License

Made with ❤️ for the women of Nepal

## 🤝 Contributing

This is a community project. Contributions welcome!

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Version**: 1.0.0  
**Last Updated**: December 2025  
**Made for**: Pregnant women in Nepal 🇳🇵
