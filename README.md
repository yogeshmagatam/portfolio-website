# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features include dark mode, smooth animations, and a beautiful responsive design.

## Features

- ⚡ Built with Vite for lightning-fast development
- ⚛️ React 18 with modern hooks
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Modern UI/UX
- 📝 Blog section
- 💼 Projects showcase
- 📧 Contact form

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Routing:** React Router
- **Form Handling:** React Hook Form

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yogeshmagatam/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # React contexts (Dark mode, etc.)
│   ├── pages/           # Page components
│   ├── images/          # Image assets
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Update Personal Information

Edit the content in the following files:
- `src/pages/Home.jsx` - Update name, bio, and social links
- `src/pages/Projects.jsx` - Add your projects to the `staticProjects` array
- `src/pages/Blog.jsx` - Add your blog posts to the `staticPosts` array
- `src/pages/Contact.jsx` - Update contact information

### Change Theme Colors

Edit `tailwind.config.js` to customize the color scheme.

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Magatam Yogesh Vishwanath

- GitHub: [@yogeshmagatam](https://github.com/yogeshmagatam)
- LinkedIn: [yogeshmagatam](https://linkedin.com/in/yogeshmagatam)
