# Portfolio Website

A modern, animated portfolio website built with React, Vite, and Tailwind CSS. This project showcases a professional portfolio with smooth animations, dark mode support, and responsive design.

## 🚀 Features

- **Modern Design**: Clean and professional UI with gradient backgrounds
- **Smooth Animations**: Framer Motion animations throughout the site
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Interactive Components**: Cursor follower, scroll progress indicator, and tilt cards
- **Typing Animation**: Dynamic text animations for engaging content
- **Loading Screen**: Custom loading animation
- **Contact Section**: Easy-to-use contact information and social links

## 📁 Project Structure

```
portfolio-website/
├── frontend/                    # Main frontend application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── CursorFollower.jsx
│   │   │   ├── DarkModeToggle.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── TiltCard.jsx
│   │   │   ├── Timeline.jsx
│   │   │   └── TypingAnimation.jsx
│   │   ├── contexts/           # React context for state management
│   │   │   └── DarkModeContext.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Privacy.jsx
│   │   │   └── Terms.jsx
│   │   ├── images/             # Image assets
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── public/                     # Static files
├── src/                        # Root source files
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React** - JavaScript library for building UI
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Hook Form** - Flexible form validation
- **React Icons** - Icon library
- **EmailJS** - Email service for contact forms
- **PostCSS** - Tool for transforming CSS

## ⚙️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Navigate to the frontend folder:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env.local` file in the frontend folder:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Build for Production

To build the project for production:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 📝 Configuration

### EmailJS Setup

To enable the contact form:

1. Visit [emailjs.com](https://www.emailjs.com/)
2. Create an account and set up an email service
3. Create an email template
4. Add your credentials to `.env.local`:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Tailwind CSS

Customize Tailwind configuration in `tailwind.config.js` to match your design preferences.

## 📄 Pages

- **Home** - Landing page with hero section and introduction
- **Projects** - Showcase of your projects with descriptions
- **Contact** - Contact information and social media links
- **Privacy** - Privacy policy page
- **Terms** - Terms and conditions page

## 🎨 Customization

### Colors and Styling
- Update colors in `tailwind.config.js`
- Modify component styles in `src/index.css`

### Content
- Update contact information in `src/pages/Contact.jsx`
- Update social links in component files
- Add your projects and skills to respective sections

### Animations
- Modify animation timings in individual components
- Adjust Framer Motion variants for custom animations

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Breakpoints for tablets and desktops
- Optimized touch interactions on mobile devices

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements.

## 📝 License

This project is open source and available under the MIT License.

## 💬 Support

For questions or issues, please create an issue in the repository.

---

**Happy coding!** 🎉
