# Dashboard Application

A modern, responsive dashboard built with Next.js, TypeScript, and Tailwind CSS. Featuring built-in dark mode and comprehensive internationalization support.

## ✨ Key Features

- 🌓 **Dark Mode** - Beautiful dark theme with automatic system preference detection
- 🌍 **Multi-language Support** - Powered by next-intl for seamless internationalization
- 🚀 Built with Next.js 15 App Router
- 🎨 Styled with Tailwind CSS
- 🔍 TypeScript for type safety
- 🌐 Internationalization (i18n) support
- 🎯 Responsive design

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/dashboard.git
   cd dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `dev` - Start the development server
- `build` - Build the application for production
- `start` - Start the production server
- `lint` - Run ESLint
- `type-check` - Check TypeScript types

## 🌓 Dark Mode

The application features a beautiful dark/light mode with the following capabilities:
- Automatic system preference detection
- Smooth transitions between themes
- Persists user preference in local storage
- Easily toggleable via a theme switcher in the UI

## 🌍 Internationalization (i18n)

Built with `next-intl`, the application supports multiple languages with:
- Dynamic language switching
- RTL language support
- Automatic locale detection
- Namespaced translations for better organization
- Formatting for dates, numbers, and plurals

## Project Structure

- `src/app` - Application pages and routing
- `src/components` - Reusable UI components
- `src/lib` - Utility functions and configurations
- `public` - Static assets

## Development Workflow

1. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. **Stage your changes**:
   ```bash
   git add .
   # or add specific files
   git add path/to/your/files
   ```

3. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve issue with dark mode"
   ```

4. **Push your changes** to the remote repository:
   ```bash
   git push -u origin your-branch-name
   ```

5. **Create a Pull Request** from your branch to the main branch.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
