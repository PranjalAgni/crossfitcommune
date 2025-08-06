# CrossFit Commune 🏋️‍♂️

A modern, responsive "Coming Soon" landing page for a CrossFit gym built with Next.js 15, React 19, and cutting-edge web technologies.

![CrossFit Commune](./public/crossfit-gym.png)

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes with modern CSS clipping paths
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Next.js 15 with React 19 for maximum performance
- **Tailwind CSS**: Utility-first CSS framework with custom styling
- **Interactive Elements**: Hover effects, transitions, and engaging animations
- **SEO Ready**: Proper metadata and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1.9
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) Sans & Mono
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

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
crossfitcommune/
├── app/                    # Next.js 15 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page (Coming Soon)
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme configuration
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── crossfit-gym.png  # Hero background image
│   └── placeholder-*     # Placeholder assets
├── styles/              # Additional stylesheets
└── package.json         # Dependencies and scripts
```

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

The project uses Tailwind CSS with a custom configuration:
- **Base Color**: Neutral
- **CSS Variables**: Enabled for theming
- **Style**: New York variant of shadcn/ui

### Fonts

The project uses Geist fonts:
- **Geist Sans**: Primary font family
- **Geist Mono**: Monospace font for code

## 🌐 Features Overview

### Hero Section
- Full-screen hero with background image
- Animated countdown timer
- Call-to-action buttons
- Modern clipping path design

### What We Offer
- Feature cards with icons
- Responsive grid layout
- Hover effects and transitions

### Contact Information
- Business hours and location
- Social media links
- Contact details
- CrossFit trademark compliance

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

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

## 📞 Support

If you have any questions or need help with the project:

- 📧 Email: info@crossfitcommune.com
- 📱 Phone: (555) 123-4567
- 📍 Address: 123 Fitness Street, Downtown District

---

**Built with ❤️ for the CrossFit community**