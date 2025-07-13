# Lambda Upsilon Lambda (LUL) Rho Chapter Website

A modern, responsive website for the Lambda Upsilon Lambda (LUL) Rho Chapter, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **UI Components**: Comprehensive set of reusable UI components using shadcn/ui

## 📋 Pages

- **Home**: Landing page with chapter overview
- **About**: Information about the chapter and its mission
- **Events**: Upcoming and past chapter events
- **Gallery**: Photo gallery of chapter activities
- **Recruitment**: Information for potential new members
- **Contact**: Contact information and form
- **Admin Dashboard**: Administrative tools for chapter management

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Themes**: next-themes for dark/light mode

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd lul-rho-chapter-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

```
lul-rho-chapter-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── admin/             # Admin dashboard
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── gallery/           # Gallery page
│   ├── recruitment/       # Recruitment page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Customization

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Export a default React component

### Styling

- Use Tailwind CSS classes for styling
- Custom styles can be added to `app/globals.css`
- Component-specific styles can be added using CSS modules

### Theme

The website supports both light and dark themes. The theme provider is configured in `components/theme-provider.tsx`.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support, email [your-email@example.com] or create an issue in this repository.

---

**Built with ❤️ for the Lambda Upsilon Lambda Rho Chapter** 