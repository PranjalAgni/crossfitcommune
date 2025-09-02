# CrossFit Commune 🏋️‍♂️

A modern, comprehensive CrossFit gym website built with Next.js 15, React 19, and cutting-edge web technologies. This is a full-featured business website for CrossFit Commune, located in Hyderabad, India.

![CrossFit Commune](./public/crossfit-gym.png)

## 🚀 Features

- **Complete Business Website**: Full-featured gym website with multiple sections
- **Responsive Design**: Optimized for all device sizes with modern CSS clipping paths and skew effects
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Next.js 15 with React 19 for maximum performance
- **Tailwind CSS v4**: Latest version with utility-first CSS framework
- **Interactive Elements**: Hover effects, transitions, and engaging animations
- **SEO Ready**: Proper metadata, semantic HTML, and Google Analytics integration
- **Contact Form**: Functional contact form with validation and email integration
- **WhatsApp Integration**: Direct WhatsApp contact button
- **Google Maps Integration**: Embedded location map with directions
- **Early Bird Dialog**: Special promotional offers modal
- **FAQ Section**: Collapsible FAQ with smooth animations
- **Pricing Plans**: Complete pricing structure with multiple membership options
- **Class Schedule**: Dynamic class timings with today highlighting
- **Mobile-First**: Optimized mobile experience with custom hooks

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.9
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) from Google Fonts
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) and Google Analytics
- **Email Service**: [Resend](https://resend.com/) for contact form
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

## 🏁 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd crossfitcommune
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables** (if needed)
   ```bash
   # Create .env.local file for email service configuration
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
crossfitcommune/
├── app/                    # Next.js 15 App Router
│   ├── api/               # API routes
│   │   └── contact/      # Contact form endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Main landing page
│   ├── playground/       # Development playground
│   └── v2/               # Alternative page version
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── early-bird-dialog.tsx # Promotional modal
│   ├── hero.tsx         # Hero section
│   ├── navbar.tsx       # Navigation bar
│   ├── navigation.tsx   # Navigation component
│   └── whatsapp.tsx     # WhatsApp contact button
├── hooks/               # Custom React hooks
│   ├── use-early-bird-dialog.ts
│   ├── use-mobile.ts
│   ├── use-scrolled.tsx
│   └── use-toast.ts
├── lib/                 # Utility functions
│   ├── constants.ts     # App constants
│   ├── currency.ts      # Currency formatting
│   ├── ga.ts           # Google Analytics
│   ├── time.ts         # Time utilities
│   └── utils.ts        # General utilities
├── public/             # Static assets
│   ├── cfcheer.png     # Community images
│   ├── cfcheer2.jpg
│   ├── cfcommune.png   # Logo assets
│   ├── cfcommunelg.png
│   ├── cfcommunetransparent.png
│   ├── crossfit-gym.png # Hero background
│   ├── crossfit-hero-bg.jpg
│   └── favicon.png
├── styles/             # Additional stylesheets
└── package.json        # Dependencies and scripts
```

## 🎨 Website Sections

### Hero Section
- Full-screen hero with background image
- Call-to-action buttons
- Modern clipping path design
- WhatsApp integration

### Benefits Section
- Three key pillars: Open Gym Access, Certified Coaching, Start at Any Level
- Icon-based feature cards
- Responsive grid layout

### Community & Location
- Community showcase with images
- Google Maps integration
- Address information with directions link
- Location accessibility information

### Getting Started
- Three-step process: Consultation, Trial, Membership
- Clear call-to-action links
- Step-by-step guidance

### Class Schedule
- Weekly class timings
- Today highlighting
- Open Gym hours
- Responsive grid layout

### Pricing Plans
- Multiple membership options (Drop-in, 1M, 3M, 6M, 12M)
- Early bird promotional offers
- INR pricing with GST included
- Feature comparisons

### About Section
- Gym vision and mission
- "move.connect.transform" tagline
- Professional coaching information

### FAQ Section
- Collapsible FAQ items
- Smooth animations
- Contact information integration
- Comprehensive Q&A

### Contact Section
- Functional contact form
- Indian phone number validation
- Email integration via Resend
- Form validation and error handling

## 🎨 UI Components

This project uses **shadcn/ui** components built on top of **Radix UI** primitives. Available components include:

- **Layout**: Card, Separator, Aspect Ratio
- **Navigation**: Breadcrumb, Navigation Menu, Menubar
- **Forms**: Button, Input, Select, Checkbox, Radio Group
- **Feedback**: Alert, Toast, Progress, Badge
- **Overlays**: Dialog, Popover, Tooltip, Sheet
- **Data Display**: Table, Accordion, Tabs, Avatar
- **And many more...**

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 🎨 Customization

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

### Styling

The project uses Tailwind CSS v4 with:
- **Custom Font**: Outfit from Google Fonts
- **CSS Variables**: Enabled for theming
- **Skew Effects**: Modern geometric design elements
- **Responsive Design**: Mobile-first approach

### Analytics

The project includes:
- **Google Analytics**: GA4 integration
- **Vercel Analytics**: Performance monitoring
- **Event Tracking**: Custom event tracking for user interactions

## 🌐 Business Features

### Contact Integration
- WhatsApp direct messaging
- Instagram social media link
- Phone number with click-to-call
- Email contact form

### Location Services
- Google Maps embed
- Address with directions link
- Accessibility information
- Location-based content

### Membership Management
- Multiple pricing tiers
- Early bird promotional offers
- Drop-in class options
- Membership benefits clearly outlined

### Content Management
- Dynamic class schedules
- FAQ management
- Pricing updates
- Contact information

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Special mobile optimizations:
- Touch-friendly navigation
- Optimized form inputs
- Mobile-specific layouts
- Performance optimizations

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables (RESEND_API_KEY)
4. Deploy with zero configuration

### Other Platforms

This Next.js application can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CrossFit](https://crossfit.com) - CrossFit® is a registered trademark of CrossFit, LLC
- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful component library
- [Vercel](https://vercel.com) - For the amazing development experience
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Resend](https://resend.com/) - For email service integration

## 📞 Business Information

**CrossFit Commune**
- 📧 Email: info@crossfitcommune.com
- 📱 Phone: +91 8121145533
- 📍 Address: 1st floor plot #108, TNGO colony, Gachibowli, Hyderabad 500032
- 🌐 Website: [crossfitcommune.com](https://crossfitcommune.com)
- 📱 WhatsApp: [Direct Message](https://wa.me/918121145533)
- 📸 Instagram: [@crossfitcommune](https://www.instagram.com/crossfitcommune)

---

**Built with ❤️ for the CrossFit community in Hyderabad, India**