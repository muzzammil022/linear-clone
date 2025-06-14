# Linear Clone

A modern clone of Linear's interface built with Next.js, TypeScript, and Framer Motion. This project showcases Linear's sleek design and smooth animations with interactive features.

## ✨ Features

- **Interactive Sidebar**: Collapsible navigation with smooth animations
- **Dynamic Content Display**: Switch between different content types (Collaborative Documents, Inline Comments, Text-to-issue commands)
- **Video Integration**: Seamless video playback for demonstrations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Modern UI**: Clean, minimalist design inspired by Linear's interface

## 🚀 Project Structure

```text
/
├── public/
│   ├── CD.png
│   ├── IC.png
│   └── TC.webm
├── src/
│   ├── components/
│   │   └── Sidebar.tsx
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── lib/
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, Prettier

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `npm install`        | Installs dependencies                       |
| `npm run dev`        | Starts local dev server at `localhost:3000` |
| `npm run build`      | Build your production site to `./dist/`     |
| `npm run start`      | Preview your build locally                  |
| `npm run lint`       | Run ESLint to check code quality            |
| `npm run type-check` | Run TypeScript compiler check               |

## 🎯 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd linear-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## 📱 Usage

- **Sidebar Navigation**: Click on different options to see content changes
- **Collapse/Expand**: Use the toggle button to collapse or expand the sidebar
- **Video Playback**: Select "Text-to-issue commands" to see the video demonstration
- **Responsive**: Try it on different screen sizes

## 🎨 Customization

You can easily customize the content by:

1. **Adding new options**: Edit the `Option` components in `Sidebar.tsx`
2. **Changing images/videos**: Replace files in the `public/` directory
3. **Modifying animations**: Adjust Framer Motion configurations
4. **Updating styles**: Customize Tailwind classes

## 📦 Dependencies

- `next`: React framework
- `react`: UI library
- `typescript`: Type safety
- `tailwindcss`: Utility-first CSS
- `framer-motion`: Animation library
- `lucide-react`: Icon library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Linear](https://linear.app/) for their beautiful design
- Built as part of a coding challenge
