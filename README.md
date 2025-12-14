# FlashChat ⚡

A lightning-fast, modern real-time chat application built with cutting-edge web technologies. FlashChat delivers seamless instant messaging with a beautiful, responsive interface that works across all devices.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dndmein-rgb/FlashChat)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://flash-chat-wheat.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org/)

## ✨ Features

- **Real-Time Messaging** - Instant message delivery with live updates
- **Modern UI/UX** - Clean, intuitive interface built with shadcn/ui components
- **Fully Responsive** - Seamless experience across desktop, tablet, and mobile
- **Type-Safe** - Built with TypeScript for robust code quality
- **Fast & Optimized** - Leverages Next.js 14+ App Router for optimal performance
- **Beautiful Design** - Styled with Tailwind CSS for a polished look
- **Easy Deployment** - One-click deployment to Vercel

## 🚀 Demo

Check out the live demo: [flash-chat-wheat.vercel.app](https://flash-chat-wheat.vercel.app)

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Font:** [Geist](https://vercel.com/font) by Vercel
- **Deployment:** [Vercel](https://vercel.com)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

## 🏃 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dndmein-rgb/FlashChat.git
cd FlashChat
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Development

You can start editing the application by modifying files in the `src` directory. The page auto-updates as you edit the file thanks to Next.js Fast Refresh.

## 📁 Project Structure
```
FlashChat/
├── .vscode/          # VS Code configuration
├── public/           # Static assets
├── src/              # Source code
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components
│   ├── lib/          # Utility functions
│   └── styles/       # Global styles
├── .gitignore
├── components.json   # shadcn/ui configuration
├── next.config.ts    # Next.js configuration
├── package.json
├── tsconfig.json     # TypeScript configuration
└── README.md
```

## 🎨 Customization

### Styling

FlashChat uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.js` file. The project also uses shadcn/ui components which can be customized through `components.json`.

### Adding Components

To add new shadcn/ui components:
```bash
npx shadcn-ui@latest add [component-name]
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy FlashChat is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your app will be live in seconds!

### Other Deployment Options

FlashChat can be deployed to any platform that supports Next.js:
- **Netlify:** Connect your Git repository
- **AWS Amplify:** Use the Amplify Console
- **Docker:** Use the provided Dockerfile (if available)
- **Self-hosted:** Use `npm run build` and `npm run start`

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [shadcn/ui Documentation](https://ui.shadcn.com) - Re-usable components built with Radix UI
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - JavaScript with syntax for types



## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) by Vercel
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vercel](https://vercel.com) for hosting

## 📧 Contact

Project Link: [https://github.com/dndmein-rgb/FlashChat](https://github.com/dndmein-rgb/FlashChat)

---

<p align="center">Made with ❤️ using Next.js</p>
