// ===========================================
// Site Content Data
// Edit this file to update site content
// ===========================================

export const personalInfo = {
  name: "Aslı Çolakoğlu",
  title: "Software Engineering Student",
  tagline: "Building user-centered, accessible, and performant digital experiences.",
  email: "asli@example.com",
};

export const socialLinks = {
  github: "https://github.com/aslcolakogluu",
  linkedin: "https://www.linkedin.com/in/aslıçolakoğlu/",
  instagram: "https://www.instagram.com/aslcolakogluu/",
};

export const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
];

export const aboutParagraphs = [
  "I am a final-year Software Engineering student at OSTİM Technical University in Ankara. I have a strong passion for problem-solving, building practical software solutions, and exploring innovative ideas.",
  "My key interests include Machine Learning, Front-End Development, and general software development. I enjoy creating modern, user-centered interfaces and writing clean, maintainable code.",
];

export const experiences = [
  {
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    title: "Software Development Intern",
    company: "WNCC Yazılım Teknoloji",
    companyUrl: "#",
    description:
      "Learned C# and SQL, enhancing my backend development skills. Designed websites using HTML and CSS, gaining frontend experience. Completed the development of fully functional applications by integrating both backend and frontend technologies.",
    technologies: ["C#", "SQL", "HTML", "CSS"],
  },
  {
    startDate: "Jan 2025",
    endDate: "Jan 2025",
    title: "Image Processing Intern",
    company: "Bistek Software",
    companyUrl: "#",
    description:
      "Processed live video streams from IP cameras and performed edge detection using the Canny algorithm, improving image processing accuracy. Developed a classification model with the MNIST dataset, gaining hands-on experience in machine learning. Contributed to system integration and image processing workflows in a Linux environment.",
    technologies: ["Python", "Image Processing", "Linux", "Project Management"],
  },
  {
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    title: "Cybersecurity Intern",
    company: "Ministry of Interior",
    companyUrl: "#",
    description:
      "Monitored network traffic using firewall and IDS/IPS systems to identify security vulnerabilities, contributing to enhanced network security. Conducted penetration tests to detect and report critical weaknesses. Improved my cybersecurity knowledge by practicing with up-to-date cyber threats.",
    technologies: ["Cyber Security", "Network Security", "Security Reporting"],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application featuring product management, shopping cart functionality, Stripe payment integration, and an admin dashboard for inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    githubUrl: "https://github.com/aslicolakoglu/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    image: null,
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, real-time updates, and notification system.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Socket.io", "Tailwind"],
    githubUrl: "https://github.com/aslicolakoglu/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    image: null,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard displaying real-time weather data using OpenWeather API. Features location-based forecasts, interactive maps, and 7-day predictions.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox"],
    githubUrl: "https://github.com/aslicolakoglu/weather-app",
    liveUrl: "https://weather-demo.vercel.app",
    image: null,
  },
  {
    title: "ML Image Classifier",
    description:
      "A machine learning project for image classification using TensorFlow. Trained on custom dataset with 95% accuracy. Includes web interface for real-time predictions.",
    technologies: ["Python", "TensorFlow", "Flask", "OpenCV"],
    githubUrl: "https://github.com/aslicolakoglu/ml-classifier",
    liveUrl: "https://ml-demo.vercel.app",
    image: null,
  },
];

export const footerBuiltWith = "Built with Next.js & Tailwind CSS";
export const footerCopyright = "Aslı Çolakoğlu © 2025";
