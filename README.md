# 🚀 Elias Portfolio - Interactive Developer Portfolio

A modern, interactive portfolio website showcasing my skills as a Full-Stack Developer. Built with cutting-edge technologies and featuring a unique terminal-inspired interface.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)

## ✨ Live Demo

🌐 **[View Live Portfolio](https://your-portfolio-url.com)**

---

## 🎯 Key Features

### 🎮 **Interactive Terminal Experience**
- **Typewriter Effect** - Animated text typing with realistic terminal feel
- **Live Clock** - Real-time animated clock in German format
- **Access Gate** - Secret code entry system with lockout protection
- **Easter Egg** - Hidden Konami code feature for surprises

### 🎨 **Modern Design System**
- **Dark/Light Mode** - Game controller themed toggle with LED animations
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Framer Motion powered micro-interactions
- **Professional UI** - Clean, modern interface with attention to detail

### 📱 **Full-Stack Features**
- **Contact Form** - Functional form with validation and error handling
- **Social Media Integration** - LinkedIn, Instagram, Telegram, GitHub links
- **Modular Architecture** - Clean, maintainable component structure
- **Performance Optimized** - Fast loading and smooth interactions

---

## 🛠️ Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 15.3.5 |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 3.x |
| **Animations** | Framer Motion | 11.x |
| **Icons** | Lucide React | Latest |
| **Typewriter** | Typewriter-effect | Latest |
| **Confetti** | Canvas Confetti | Latest |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/e13as/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   cp .env.example .env.local
   
   # Add your secret gate code
   NEXT_PUBLIC_GATE_CODE=your_secret_code_here
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── profile.jpg        # Profile photo
│   ├── type.mp3          # Typewriter sound
│   └── favicon.ico       # Site icon
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Main page
│   │   └── icon.tsx      # App icon
│   ├── components/       # React components
│   │   ├── ContentSection.tsx    # Main content
│   │   ├── ContactForm.tsx       # Contact form
│   │   ├── EasterEggModal.tsx    # Easter egg modal
│   │   ├── FadeIn.tsx            # Animation wrapper
│   │   ├── GateSection.tsx       # Access gate
│   │   ├── LandingSection.tsx    # Landing page
│   │   └── ThemeToggle.tsx       # Theme switcher
│   └── hooks/            # Custom hooks
│       └── usePortfolio.ts       # Main logic
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind config
├── tsconfig.json         # TypeScript config
└── README.md            # This file
```

---

## 🎨 Customization Guide

### 🖼️ **Adding Your Profile Photo**
```bash
# Replace the profile image
cp your-photo.jpg public/profile.jpg
```

### 🎨 **Customizing Colors**
Edit `src/app/globals.css` to match your brand colors:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  /* Add your custom colors here */
}
```

### 📝 **Updating Content**
Modify `src/components/ContentSection.tsx` to update:
- Personal information
- Project descriptions
- Skills and languages
- Social media links

### 🔐 **Changing Gate Code**
Update the environment variable:
```bash
NEXT_PUBLIC_GATE_CODE=your_new_secret_code
```

---

## 🚀 Deployment Options

### **Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Automatic deployment on every push

## 📊 Google Analytics Integration

### **Setup Google Analytics 4**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your portfolio
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to environment variables: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

### **Vercel Environment Variables**
In your Vercel dashboard, add these environment variables:
```
NEXT_PUBLIC_GATE_CODE=your_secret_code
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### **Analytics Dashboard**
- Click the 📊 button in the bottom-right corner
- View real-time visitor statistics
- Track page views, unique visitors, and top pages
- All data is automatically sent to Google Analytics

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `out` directory
3. Configure redirects for Next.js routing

### **Railway**
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

### **DigitalOcean App Platform**
1. Connect GitHub repository
2. Configure build settings
3. Deploy with one click

---

## 🎮 Easter Eggs & Secrets

### **Konami Code**
Try entering: `↑↑↓↓←→←→BA` for a surprise!

### **Hidden Features**
- Terminal commands in the landing section
- Animated game controller theme toggle
- Sound effects on interactions

---

## 📊 Performance & SEO

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO Optimized**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant
- **Mobile First**: Responsive design approach

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact & Social

- **🌐 Portfolio**: [Your Portfolio URL]
- **📧 Email**: [your.email@example.com]
- **💼 LinkedIn**: [linkedin.com/in/your-profile]
- **📸 Instagram**: [instagram.com/your-profile]
- **📱 Telegram**: [t.me/your-username]
- **🐙 GitHub**: [github.com/e13as]

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide React** - For beautiful icons

---

<div align="center">

**Built with ❤️ by Elias**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/e13as)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

</div>
