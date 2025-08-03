# 🎬 GIF-App

> **⚠️ This project is currently in development - Beta Version**

A modern and interactive GIF search application built with React, Vite, and Tailwind CSS. Features a stunning animated gradient background and smooth GIF loading animations.

## ✨ Features

- 🔍 **Real-time GIF Search** - Search for GIFs using the Giphy API
- 🌈 **Animated Background** - Beautiful gradient animations with interactive mouse tracking
- 📱 **Responsive Design** - Works seamlessly on all device sizes
- ⚡ **Fast Loading** - Built with Vite for optimal performance
- 🎭 **Smooth Animations** - Staggered loading animations for GIFs
- 🎨 **Modern UI** - Clean and intuitive user interface

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Giphy API Key (free at [developers.giphy.com](https://developers.giphy.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gif-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your Giphy API key
   VITE_GIPHY_API_KEY=your_giphy_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
gif-app/
├── public/
│   └── vite.svg                 # Vite logo favicon
├── src/
│   ├── App.jsx                  # Main application component with state management
│   ├── Background.jsx           # Animated gradient background component
│   ├── Search.jsx               # Search input form component
│   ├── GridGifs.jsx            # Grid layout for displaying GIFs
│   ├── Gif.jsx                 # Individual GIF component with animations
│   ├── main.jsx                # React application entry point
│   └── index.css               # Global styles and custom animations
├── utils.js                    # Utility functions (clsx + tailwind-merge)
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions for consistent installs
└── vite.config.js              # Vite configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Technologies Used

- **[React 19](https://react.dev/)** - UI library with modern hooks
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Motion](https://motion.dev/)** - Animation library
- **[Giphy API](https://developers.giphy.com/)** - GIF search and retrieval

### Dependencies

```json
{
  "@midudev/tailwind-animations": "^0.2.0",    // Additional Tailwind animations
  "@tailwindcss/vite": "^4.1.11",             // Tailwind CSS Vite integration
  "clsx": "^2.1.1",                           // Conditional className utility
  "motion": "^12.23.12",                      // Animation library
  "react": "^19.1.0",                         // React library
  "react-dom": "^19.1.0",                     // React DOM rendering
  "tailwind-merge": "^3.3.1",                 // Merge Tailwind classes
  "tailwindcss": "^4.1.11"                    // Tailwind CSS framework
}
```

## 🎨 Key Components

### App.jsx
The main component that manages:
- Application state (search input and GIFs array)
- API calls to Giphy
- Form submission handling

### Background.jsx
Creates an interactive animated gradient background with:
- Multiple animated gradient orbs
- Mouse tracking for interactive effects
- Customizable colors and animation properties

### Search.jsx
Simple search form component featuring:
- Controlled input with custom styling
- Form submission handling
- Responsive design

### GridGifs.jsx & Gif.jsx
Display components that handle:
- Grid layout for GIF results
- Individual GIF rendering with staggered animations
- Responsive image sizing

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
# Giphy API Configuration
VITE_GIPHY_API_KEY=your_giphy_api_key_here
```

**Note:** The `VITE_` prefix is required for Vite to expose the variable to the client-side code.

## 🎯 Usage

1. **Search for GIFs**: Type any keyword in the search box
2. **Submit**: Press Enter or click submit
3. **View Results**: GIFs will appear in a responsive grid with smooth animations
4. **Interactive Background**: Move your mouse around to see the background respond

## 🔄 API Integration

The app uses the Giphy Search API:

```javascript
// API endpoint used in App.jsx
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`;
```

## 🎭 Animation Details

- **Background**: Continuous gradient animations with interactive mouse tracking
- **GIF Loading**: Staggered entrance animations (200ms delay between each GIF)
- **Custom Keyframes**: Defined in `index.css` for background movements

## 🔐 Security Practices
This project follows best practices for handling sensitive data:

✅ API keys are stored securely using .env files

🛑 No API keys are exposed in the repository

📁 .env is excluded via .gitignore and only .env.example is committed for guidance

🧽 Git history was cleaned using git filter-repo to remove sensitive commits from the past

💡 This ensures the Giphy API key is safe in both development and production environments (via Netlify environment variables)

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The `dist` folder will contain the optimized build ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Giphy](https://giphy.com) for providing the GIF API
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Vite](https://vitejs.dev) for the blazing fast build tool
- [@midudev](https://github.com/midudev) for the additional Tailwind animations

---
