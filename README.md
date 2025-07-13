# Elias Portfolio 🚀

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎮 **Interactive Terminal Interface** - Typewriter effect with terminal commands
- ⏰ **Live Clock** - Real-time animated clock display
- 🔐 **Access Gate** - Secret code entry with lockout mechanism
- 🎨 **Dark/Light Mode** - Game controller themed toggle
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **Smooth Animations** - Framer Motion powered interactions
- 🎮 **Easter Egg** - Konami code secret feature
- 📧 **Contact Form** - Functional contact form with validation
- 🎨 **Modern UI** - Clean, professional design

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typewriter**: Typewriter-effect
- **Confetti**: Canvas Confetti

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_GATE_CODE=your_secret_code_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── icon.tsx
├── components/
│   ├── ContentSection.tsx
│   ├── ContactForm.tsx
│   ├── EasterEggModal.tsx
│   ├── FadeIn.tsx
│   ├── GateSection.tsx
│   ├── LandingSection.tsx
│   └── ThemeToggle.tsx
└── hooks/
    └── usePortfolio.ts
```

## 🎨 Customization

### Adding Your Photo
Place your profile photo in the `public/` directory as `profile.jpg`

### Changing Colors
Modify the color scheme in `src/app/globals.css` and component files

### Updating Content
Edit the content in `src/components/ContentSection.tsx` to match your information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` directory
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Deploy directly from GitHub

## 🎮 Easter Egg

Try entering the Konami Code: ↑↑↓↓←→←→BA

## 📧 Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Elias
