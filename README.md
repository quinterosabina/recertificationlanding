# Landing Page para Recertificación

A modern, responsive landing page for USDC CONSULTING - Building Recertification services in Florida. Built with React, TypeScript, and Vite.

## 🏢 About

USDC CONSULTING provides expert building recertification services throughout Florida, specializing in:
- Structural Recertification
- Electrical Recertification  
- Threshold Inspections
- Thermographic Inspection
- Structural Evaluation & Repair Design
- Ongoing Compliance Management
- Reports & Permitting

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Bilingual Support**: Full English/Spanish language switching
- **Interactive Elements**: Project carousel, animated counters, smooth scroll
- **Modern UI**: Built with Tailwind CSS and Lucide icons
- **TypeScript**: Type-safe development
- **Component Architecture**: Modular, reusable React components

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Context API

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── AuthoritySection.tsx
│   │   ├── CTASection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProjectCarousel.tsx
│   │   └── ...
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom React hooks
│   └── locales/            # Translation files
├── assets/                 # Static assets
├── styles/                 # Global styles
└── types/                  # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Landing Page para Recertificación"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Language Support

The application supports English and Spanish. Language switching is handled through the `LanguageContext` and all text is managed in `src/app/locales/translations.ts`.

## 📸 Assets

- **Portfolio Images**: Located in `src/assets/portfolio*.jpg`
- **Local Images**: Any additional images should be placed in `src/assets/`

## 🎨 Customization

### Colors
The primary color scheme uses blue (#2563eb) with orange accents for CTAs and highlights.

### Components
- **HeroSection**: Main landing section with CTA
- **AuthoritySection**: Trust indicators and project carousel
- **ProcessSection**: Service process timeline
- **ServicesSection**: Service cards grid
- **UrgencySection**: Legal compliance information
- **CTASection**: Contact form and information

## 🔧 Configuration

### Tailwind CSS
Configuration is in `tailwind.config.js` with custom colors and animations.

### TypeScript
Type definitions are in `src/types/` and component props are fully typed.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Environment Variables

Create a `.env.local` file for environment-specific variables:
```
VITE_API_URL=your-api-url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for USDC CONSULTING.

## 📞 Contact

- **Company**: USDC CONSULTING
- **Phone**: (305) 570-7589
- **Email**: info@usdcconsulting.com
- **Address**: 3901 NW 79th Ave SUITE 251, Doral, FL 33166

## 🎯 Business Services

### Building Recertification
- 30-Year Structural Recertification
- 40-Year Electrical Recertification
- Milestone Inspections
- Threshold Building Inspections

### Engineering Services
- Structural Assessment & Repair Design
- Thermographic Inspection
- Compliance Management
- Professional Engineering Reports

### Service Areas
- Miami-Dade County
- Broward County
- Palm Beach County
- All Florida

---

*Built with ❤️ for USDC CONSULTING*