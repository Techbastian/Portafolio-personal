import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Code, 
  Smartphone, 
  Laptop, 
  ArrowUpRight, 
  ChevronRight, 
  Check, 
  Menu, 
  X, 
  Eye, 
  Send,
  Languages,
  Cpu,
  FileText,
  UserCheck,
  CheckCircle,
  HelpCircle,
  FolderGit2
} from 'lucide-react';

// Interfaces for translation
interface TranslationSet {
  nav: {
    work: string;
    services: string;
    experience: string;
    education: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    title_part1: string;
    title_part2: string;
    subtitle: string;
    toggle_filter_color: string;
    toggle_filter_mono: string;
    explore_cta: string;
  };
  metrics: {
    experience: string;
    projects_count: string;
    english: string;
    location: string;
  };
  services: {
    title: string;
    subtitle: string;
    dev_title: string;
    dev_desc: string;
    ux_title: string;
    ux_desc: string;
    eng_title: string;
    eng_desc: string;
  };
  projects: {
    title: string;
    subtitle: string;
    view_live: string;
    explore_in_portfolio: string;
    close_preview: string;
    preview_warning: string;
    open_new_tab: string;
    items: {
      id: string;
      title: string;
      category: string;
      desc: string;
      impact: string;
      tech: string[];
      url: string;
    }[];
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    items: {
      role: string;
      company: string;
      period: string;
      type: string;
      location: string;
      description: string;
      skills: string[];
    }[];
  };
  education: {
    title: string;
    subtitle: string;
    items: {
      degree: string;
      school: string;
      period: string;
      description: string;
    }[];
    certifications_title: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      state: string;
      design: string;
      methodology: string;
    };
  };
  qa: {
    title: string;
    subtitle: string;
    intro: string;
    questions: {
      q: string;
      a: string;
      tag: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form_title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    card_title: string;
    card_desc: string;
  };
}

const translations: { es: TranslationSet; en: TranslationSet } = {
  es: {
    nav: {
      work: "Proyectos",
      services: "Especialidades",
      experience: "Trayectoria",
      education: "Formación",
      about: "Sobre Mí",
      contact: "Contacto",
      cta: "Contratar"
    },
    hero: {
      badge: "DISPONIBLE PARA PROYECTOS / REMOTO",
      title_part1: "Desarrollador Frontend",
      title_part2: "& Estratega UX",
      subtitle: "Ingeniero Mecatrónico y Desarrollador de Software. Combino la rigurosidad matemática y el pensamiento estructurado de la ingeniería con una profunda sensibilidad por la estética visual y la experiencia de usuario.",
      toggle_filter_color: "Ver en Color",
      toggle_filter_mono: "Efecto Editorial (B&N)",
      explore_cta: "Ver Proyectos Seleccionados"
    },
    metrics: {
      experience: "Años de Experiencia",
      projects_count: "Proyectos en Producción",
      english: "Inglés Profesional",
      location: "Ubicación"
    },
    services: {
      title: "Mis Pilares Profesionales",
      subtitle: "Un puente perfecto entre el diseño de interfaz impecable, la robustez del código frontend y la arquitectura estructurada.",
      dev_title: "Desarrollo Frontend React",
      dev_desc: "Creación de arquitecturas web modulares y reactivas con ReactJS, TypeScript y JavaScript. Optimización de bundles, web performance y renderizado impecable.",
      ux_title: "Estrategia UX & Prototipado",
      ux_desc: "Especialista en estructurar flujos lógicos utilizando Figma. Diseño interactivo enfocado en la usabilidad, eliminando fricciones para el usuario final.",
      eng_title: "Pensamiento de Ingeniería",
      eng_desc: "Mi trasfondo como Ingeniero Mecatrónico me permite resolver problemas complejos, modelar flujos de datos abstractos y garantizar escalabilidad óptima."
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Haz clic en 'Interactuar en Portafolio' para navegar la aplicación en vivo directamente en la pantalla del emulador integrado.",
      view_live: "Visitar Sitio",
      explore_in_portfolio: "Interactuar en Portafolio",
      close_preview: "Cerrar Vista Previa",
      preview_warning: "Navegando aplicación real hospedada en Vercel",
      open_new_tab: "Abrir en Pestaña Nueva",
      items: [
        {
          id: "horizontes",
          title: "Horizontes Dashboard",
          category: "Panel de Analítica Avanzada",
          desc: "Un centro de control interactivo diseñado para el análisis de métricas complejas en tiempo real. Cuenta con visualizaciones de datos fluidas, widgets adaptables, optimización de renderizado de componentes y esquemas de color premium de alta fidelidad.",
          impact: "Optimización de carga bajo procesamiento masivo de datos mediante hooks personalizados y estados distribuidos ligeros.",
          tech: ["ReactJS", "TypeScript", "Tailwind CSS", "Recharts", "Lucide Icons", "Vite"],
          url: "https://horizontes-dashboard.vercel.app/"
        },
        {
          id: "mailer",
          title: "Disruptia Mailer",
          category: "Sistema de Campañas Masivas",
          desc: "Plataforma web de entrega masiva de correos electrónicos corporativos orientada a optimizar el flujo de reclutamiento y tracking para Listos BPO. Permite estructurar plantillas dinámicas, analizar métricas de apertura y gestionar bases de usuarios en tiempo real.",
          impact: "Seleccionado como el proyecto ganador del Hackathon Disruptia debido a su viabilidad de negocio, diseño intuitivo y arquitectura robusta.",
          tech: ["ReactJS", "TypeScript", "Formik", "MUI", "Axios API", "Zustand"],
          url: "https://disruptia-mailer.vercel.app/"
        },
        {
          id: "dashboard",
          title: "Executive Business Dashboard",
          category: "Consola de Gestión Corporativa",
          desc: "Aplicación premium de dashboard multipropósito que centraliza la administración operativa. Cuenta con tablas dinámicas de alta velocidad, filtros cruzados multidimensionales, administración de tareas, y una UI meticulosamente diseñada.",
          impact: "Reducción de latencia en la UI gracias al almacenamiento local inteligente, renderizado condicional inteligente y control de render repetitivos.",
          tech: ["ReactJS", "JavaScript", "Tailwind CSS", "Zustand State", "Formik Validation", "Vite"],
          url: "https://dashboard-fqsd.vercel.app/"
        }
      ]
    },
    experience: {
      title: "Trayectoria Profesional",
      subtitle: "Experiencia estructurada en bootcamps y el desarrollo de soluciones de software de alto impacto.",
      present: "Actualidad",
      items: [
        {
          role: "Trainee Bootcamp (Front-End)",
          company: "Agile Innova",
          period: "Mayo 2024 — Presente",
          type: "Remoto / Prácticas Profesionales",
          location: "Cali, Colombia",
          description: "Desarrollo práctico con enfoque en proyectos reales simulando desafíos de la industria. Liderazgo en el diseño e integración de interfaces dinámicas y modulares utilizando metodologías ágiles (Scrum, Sprints diarios, tableros Jira). Implementación exhaustiva de arquitecturas React avanzadas, flujos asíncronos y consumo optimizado de REST APIs.",
          skills: ["ReactJS", "TypeScript", "Zustand", "Redux (Thunk/Saga)", "Formik", "Axios", "MUI", "Git & GitHub"]
        },
        {
          role: "Desarrollador de Software",
          company: "Politécnico PIO",
          period: "Junio 2025 — Julio 2025",
          type: "Presencial / Temporal",
          location: "Cali, Colombia",
          description: "Encargado de analizar problemáticas operativas críticas, encontrando las causas raíz mediante pensamiento sistémico. Lideré tormentas de ideas junto al equipo técnico, elaboré wireframes en baja y alta fidelidad en Figma, y coordiné el desarrollo de la aplicación apoyándome con flujos avanzados de IA para agilizar los tiempos de entrega.",
          skills: ["Pensamiento de Diseño", "Análisis de Problemáticas", "Diseño de Software", "Desarrollo Asistido por IA"]
        },
        {
          role: "Front-End Developer & UX Strategist (Hackathon Winner)",
          company: "DISRUPTIA OFICIAL",
          period: "Junio 2025",
          type: "Presencial / Competitivo",
          location: "Cali, Colombia",
          description: "Participante clave en la hackathon presencial de dos días del equipo de IT Talent. Lideré el desarrollo front-end y optimicé la experiencia de usuario de un portal web que permite a los clientes corporativos de Listos BPO S.A.S. rastrear sus solicitudes de reclutamiento en tiempo real. Nuestro proyecto se coronó como el Ganador Absoluto del certamen.",
          skills: ["Diseño de Front-End", "Estrategia UX", "Figma", "Trabajo en Equipo", "Gestión de Proyectos Express"]
        }
      ]
    },
    education: {
      title: "Educación Académica",
      subtitle: "Mi sólida base académica unifica la lógica pura del hardware con la versatilidad creativa del software.",
      items: [
        {
          degree: "Técnico Laboral en Asistente de Desarrollo de Software",
          school: "Politécnico PIO",
          period: "Graduado en Junio 2025",
          description: "Programa académico práctico orientado al análisis de requisitos de software, diseño interactivo de sistemas y programación ágil de aplicaciones web funcionales."
        },
        {
          degree: "Entrenamiento Profesional Frontend",
          school: "Bootcamp Agile Innova",
          period: "Mayo 2024 — Diciembre 2024",
          description: "Inmersión de alta intensidad enfocada en patrones modernos de React, optimización de interfaces Web complejas, manejo eficiente de estados distribuidos y buenas prácticas de desarrollo colaborativo."
        },
        {
          degree: "Ingeniero Mecatrónico",
          school: "Universidad Autónoma de Occidente",
          period: "Clase de 2013 — 2020",
          description: "Formación integral en automatización, robótica, modelado matemático de procesos y programación de sistemas embebidos. Esta carrera me dotó de una capacidad analítica superlativa, invaluable para la arquitectura de algoritmos complejos de software."
        }
      ],
      certifications_title: "Certificaciones Clave"
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologías y metodologías en las que me especializo para materializar productos excepcionales.",
      categories: {
        frontend: "Frontend Core",
        state: "Gestión de Estado",
        design: "Diseño & UI/UX",
        methodology: "Metodologías & DevOps"
      }
    },
    qa: {
      title: "Preguntas Frecuentes Interactivas",
      subtitle: "Conoce más sobre mi enfoque profesional, mi transición de ingeniería a desarrollo y cómo puedo aportar valor a tu equipo.",
      intro: "Selecciona una de las siguientes preguntas para ver mi respuesta instantánea en primera persona:",
      questions: [
        {
          q: "¿Cómo complementa la Ingeniería Mecatrónica tu carrera como Desarrollador Frontend?",
          a: "La mecatrónica me enseñó a pensar en sistemas completos, optimización de recursos y depuración estructurada. En el frontend, esto se traduce en código modular sumamente limpio, un entendimiento innato del flujo de datos asíncrono y una excelente capacidad para aprender tecnologías complejas rápidamente. No veo el navegador solo como un lienzo de diseño, sino como una máquina interactiva de precisión que debe ejecutarse de forma impecable.",
          tag: "Origen"
        },
        {
          q: "¿Cuál es tu stack preferido para manejar estados globales complejos en React?",
          a: "Para la mayoría de las aplicaciones modernas, prefiero Zustand por su simplicidad, nula sobrecarga (boilerplate) y excelente rendimiento fuera de la caja. Sin embargo, tengo sólida experiencia estructurando flujos de trabajo tradicionales de Redux utilizando Thunk y Saga para coordinar efectos secundarios complejos y transacciones estructuradas que la gran escala empresarial requiere.",
          tag: "Tecnología"
        },
        {
          q: "¿Cómo abordas el balance entre un diseño visualmente atractivo y la funcionalidad?",
          a: "Para mí, el arte y la funcionalidad son dos caras de la misma moneda. Un diseño espectacular es inútil si el usuario se confunde con el flujo. Diseño pensando primero en UX (Experiencia de Usuario), asegurándome de que los objetivos clave del sitio estén libres de fricción. Luego, implemento micro-interacciones sutiles, consistencia tipográfica y contrastes visuales que deleiten la vista, respetando siempre estándares de accesibilidad (A11y).",
          tag: "Metodología"
        },
        {
          q: "Háblame del Hackathon de Disruptia. ¿Cuál fue el secreto para ganar?",
          a: "El secreto fue la sinergia absoluta del equipo combinada con un prototipado ultraveloz. Identificamos que Listos BPO necesitaba ver avances en tiempo real de su reclutamiento. Mientras otros equipos sobrecomplicaron el backend, nosotros diseñamos un dashboard frontend interactivo impecable en Figma, y lo desarrollamos en React en tiempo récord con una UI intuitiva y lista para producción. Ganamos porque nuestra propuesta resolvió el problema real de negocio con un software sumamente robusto y presentable.",
          tag: "Experiencia"
        }
      ]
    },
    contact: {
      title: "Creemos Algo Extraordinario",
      subtitle: "¿Tienes un proyecto en mente, buscas incorporar un talento frontend proactivo a tu equipo o deseas discutir una oportunidad?",
      form_title: "Envíame un mensaje",
      name: "Tu Nombre",
      email: "Tu Correo Electrónico",
      message: "Tu Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito! Sebastián se pondrá en contacto contigo muy pronto.",
      card_title: "Información de Contacto",
      card_desc: "Estoy activamente abierto a oportunidades de nivel Junior, prácticas profesionales o consultorías de diseño interactivo. ¡Hablemos!"
    }
  },
  en: {
    nav: {
      work: "Projects",
      services: "Expertise",
      experience: "Trajectory",
      education: "Education",
      about: "About Me",
      contact: "Contact",
      cta: "Hire Me"
    },
    hero: {
      badge: "AVAILABLE FOR PROJECTS / REMOTE READY",
      title_part1: "Frontend Developer",
      title_part2: "& UX Strategist",
      subtitle: "Mechatronic Engineer and Software Developer. I combine the mathematical precision and structured thinking of engineering with a deep sensitivity for visual aesthetics and exceptional user experiences.",
      toggle_filter_color: "View Color Photo",
      toggle_filter_mono: "Editorial Effect (B&W)",
      explore_cta: "Explore Selected Work"
    },
    metrics: {
      experience: "Years of Experience",
      projects_count: "Projects in Production",
      english: "Professional English",
      location: "Location"
    },
    services: {
      title: "Core Professional Pillars",
      subtitle: "The perfect bridge between clean user interfaces, robust frontend code, and structured systems architecture.",
      dev_title: "React Frontend Development",
      dev_desc: "Crafting modular and reactive web architectures with ReactJS, TypeScript, and JavaScript. Optimizing bundles, web performance, and delivering pixel-perfect rendering.",
      ux_title: "UX Strategy & Prototyping",
      ux_desc: "Specialist in structuring logical flows using Figma. Interactive design focused on supreme usability, eliminating layout frictions for the end-user.",
      eng_title: "Engineering Mindset",
      eng_desc: "My background as a Mechatronic Engineer allows me to tackle complex problems, model abstract data flows, and guarantee optimal structural scalability."
    },
    projects: {
      title: "Selected Projects",
      subtitle: "Click 'Interact in Portfolio' to navigate and test the actual live application inside our integrated emulator screen.",
      view_live: "Visit Live Site",
      explore_in_portfolio: "Interact in Portfolio",
      close_preview: "Close Live Preview",
      preview_warning: "Browsing real application hosted on Vercel",
      open_new_tab: "Open in New Tab",
      items: [
        {
          id: "horizontes",
          title: "Horizontes Dashboard",
          category: "Advanced Analytical Console",
          desc: "An interactive control hub designed for real-time complex metrics analysis. It features fluid data visualizations, customizable widgets, optimized component render cycles, and premium high-fidelity color palettes.",
          impact: "Optimized interface load under massive data calculations using custom hooks and lightweight distributed state models.",
          tech: ["ReactJS", "TypeScript", "Tailwind CSS", "Recharts", "Lucide Icons", "Vite"],
          url: "https://horizontes-dashboard.vercel.app/"
        },
        {
          id: "mailer",
          title: "Disruptia Mailer",
          category: "Corporate Email Campaign Tool",
          desc: "A massive email delivery and tracking platform tailored to optimize recruitment metrics and real-time candidate pipelines for Listos BPO. Supports dynamic templating and tracking logs.",
          impact: "Selected as the Winner of the Disruptia Hackathon due to business feasibility, beautiful design, and robust code architecture.",
          tech: ["ReactJS", "TypeScript", "Formik", "MUI", "Axios API", "Zustand"],
          url: "https://disruptia-mailer.vercel.app/"
        },
        {
          id: "dashboard",
          title: "Executive Business Dashboard",
          category: "Corporate Management Console",
          desc: "A premium multi-purpose dashboard that centralizes operational data. Features ultra-fast dynamic tables, multidimensional grid filters, interactive tasks, and a beautifully polished aesthetic.",
          impact: "Reduced UI lag utilizing local storage states, smart conditional renders, and deep component optimization.",
          tech: ["ReactJS", "JavaScript", "Tailwind CSS", "Zustand State", "Formik Validation", "Vite"],
          url: "https://dashboard-fqsd.vercel.app/"
        }
      ]
    },
    experience: {
      title: "Professional Trajectory",
      subtitle: "Structured experience in intensive bootcamps and high-impact digital solutions.",
      present: "Present",
      items: [
        {
          role: "Trainee Bootcamp (Front-End)",
          company: "Agile Innova",
          period: "May 2024 — Present",
          type: "Remote / Professional Apprenticeship",
          location: "Cali, Colombia",
          description: "Hands-on project-based learning simulating real-world engineering challenges. Led front-end design and integrated modular components inside agile environments (Scrum, daily standups, Jira tracking). Implemented modern state flows and handled highly performant API consumption.",
          skills: ["ReactJS", "TypeScript", "Zustand", "Redux (Thunk/Saga)", "Formik", "Axios", "MUI", "Git & GitHub"]
        },
        {
          role: "Software Developer",
          company: "Politécnico PIO",
          period: "June 2025 — July 2025",
          type: "On-site / Seasonal",
          location: "Cali, Colombia",
          description: "Analyzed critical bottlenecks in client workflows. Conducted root-cause analysis, facilitated brainstorming sessions, sketched low and high-fidelity mockups in Figma, and developed final interactive modules accelerated with custom AI workflows.",
          skills: ["Design Thinking", "Problem Analysis", "Software Architecture", "AI-assisted Coding"]
        },
        {
          role: "Front-End Developer & UX Strategist (Hackathon Winner)",
          company: "DISRUPTIA OFICIAL",
          period: "June 2025",
          type: "On-site / Competitive",
          location: "Cali, Colombia",
          description: "Key developer for the winning IT Talent team in an intensive 2-day in-person hackathon. Designed and coded a tracking platform for Listos BPO S.A.S. allowing corporate clients to monitor active recruitment requests in real time. Awarded 1st place.",
          skills: ["Front-End Design", "UX Strategy", "Figma", "Team Collaboration", "Project Management"]
        }
      ]
    },
    education: {
      title: "Academic Background",
      subtitle: "A robust educational core uniting hardware logical processing with creative software systems.",
      items: [
        {
          degree: "Certified Software Development Assistant Technician",
          school: "Politécnico PIO",
          period: "Graduated June 2025",
          description: "Practical curriculum covering software requirements elicitation, database flows, interactive interface styling, and agile system deployments."
        },
        {
          degree: "Professional Frontend Training",
          school: "Agile Innova Bootcamp",
          period: "May 2024 — December 2024",
          description: "Intense immersive program covering advanced React component architectures, high-performance rendering optimization, global state modularity, and clean code paradigms."
        },
        {
          degree: "Mechatronic Engineer",
          school: "Universidad Autónoma de Occidente",
          period: "Class of 2013 — 2020",
          description: "Comprehensive training in automation, robotics, mathematical systems modeling, and micro-controller programming. Provided me with superior analytical tools to design optimal clean code structures."
        }
      ],
      certifications_title: "Key Certifications"
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies and frameworks I master to turn design visions into production-grade systems.",
      categories: {
        frontend: "Frontend Core",
        state: "State Management",
        design: "Design & UI/UX",
        methodology: "Methodology & DevOps"
      }
    },
    qa: {
      title: "Interactive Q&A Session",
      subtitle: "Explore my professional philosophy, the engineering transition, and how I deliver business value.",
      intro: "Select one of the questions below to see my instantaneous response in first-person:",
      questions: [
        {
          q: "How does Mechatronic Engineering complement your career as a Frontend Developer?",
          a: "Mechatronics taught me to think in full-system architectures, resource constraints, and structured diagnostics. In the frontend landscape, this represents highly clean modular code, an innate grasp of asynchronous data flows, and a fast technology learning curve. I don't look at the browser window as a simple static design canvas; I treat it as a precision-calibrated interactive engine that must load seamlessly and perform efficiently.",
          tag: "Origin"
        },
        {
          q: "What is your preferred stack for complex global state management in React?",
          a: "For the vast majority of modern apps, I prefer Zustand because of its simplicity, lack of boilerplate, and incredible speed out-of-the-box. However, I have solid experience structuring traditional Redux architectures using Thunk and Saga to coordinate complex side effects and robust transactions required in larger enterprise settings.",
          tag: "Technology"
        },
        {
          q: "How do you navigate the balance between visually striking design and practical code?",
          a: "To me, art and function are two sides of the same coin. A gorgeous layout is useless if the visitor gets confused by the flow. I design with a UX-first mentality, making sure core user tasks are completely friction-free. Once the architecture is solid, I layer subtle micro-interactions, beautiful typographic rhythms, and eye-friendly contrast schemes to elevate the product, always keeping accessibility (A11y) in mind.",
          tag: "Methodology"
        },
        {
          q: "What was the secret behind winning the Disruptia Hackathon?",
          a: "The secret was absolute team chemistry combined with rapid prototyping. We identified that corporate clients of Listos BPO desperately needed real-time visual progress on recruitment requests. While other teams focused on building complex backend boilerplate, we designed an impeccable, clean UI in Figma and built it in React in record time. We won because our solution directly solved the core business challenge with highly usable, production-ready frontend code.",
          tag: "Experience"
        }
      ]
    },
    contact: {
      title: "Let's Build Something Exceptional",
      subtitle: "Have a product idea, looking to add a proactive frontend talent to your team, or want to discuss a role?",
      form_title: "Send me a message",
      name: "Your Name",
      email: "Your Email Address",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! Sebastián will get back to you shortly.",
      card_title: "Contact Info",
      card_desc: "I am actively open to Junior-level positions, apprenticeships, or interactive design consulting. Let's talk!"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [useMonochrome, setUseMonochrome] = useState<boolean>(true);
  const [activeProjectPreview, setActiveProjectPreview] = useState<string | null>(null);
  const [activeQaIdx, setActiveQaIdx] = useState<number>(0);
  
  // Custom contact form states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  // Projects list matching user requests
  const activePreviewUrl = t.projects.items.find(p => p.id === activeProjectPreview)?.url || null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) return;

    setIsSending(true);
    // Simulate real server delivery
    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      setFormName('');
      setFormEmail('');
      setFormMsg('');
      setTimeout(() => setShowSuccess(false), 8000);
    }, 1200);
  };

  // Skill definitions mapping to skills mentioned in the JSON LinkedIn info
  const skillSets = [
    { name: "ReactJS / TS", cat: "frontend", level: "95%" },
    { name: "JavaScript ES6+", cat: "frontend", level: "95%" },
    { name: "HTML5 / CSS3", cat: "frontend", level: "95%" },
    { name: "Tailwind CSS / SCSS", cat: "frontend", level: "90%" },
    { name: "Zustand", cat: "state", level: "90%" },
    { name: "Redux Thunk & Saga", cat: "state", level: "85%" },
    { name: "Formik & Yup", cat: "state", level: "85%" },
    { name: "Axios & REST APIs", cat: "state", level: "90%" },
    { name: "Figma Prototyping", cat: "design", level: "85%" },
    { name: "Material UI (MUI)", cat: "design", level: "85%" },
    { name: "User Experience (UX)", cat: "design", level: "80%" },
    { name: "Design Thinking", cat: "design", level: "85%" },
    { name: "Git / GitHub", cat: "methodology", level: "95%" },
    { name: "Metodologías Ágiles", cat: "methodology", level: "90%" },
    { name: "Problem Solving", cat: "methodology", level: "95%" },
    { name: "AI-Assisted Dev", cat: "methodology", level: "90%" }
  ];

  const certificationsList = [
    { title: "Git y GitHub: Repositorio y Versiones", provider: "Alura Latam", date: "Agosto 2025" },
    { title: "Hábitos Productivos", provider: "Alura Latam", date: "Agosto 2025" },
    { title: "Foco y Concentración Diaria", provider: "Alura Latam", date: "Agosto 2025" },
    { title: "Aprender a Aprender: Auto-desarrollo", provider: "Alura Latam", date: "Julio 2025" },
    { title: "LinkedIn para Profesionales", provider: "Alura Latam", date: "Julio 2025" },
    { title: "EF SET English Certificate B2 (Upper Intermediate)", provider: "EF English", date: "Julio 2025" }
  ];

  return (
    <div className="min-h-screen bg-[#070708] text-neutral-200 font-sans selection:bg-[#d4af37] selection:text-[#070708]">
      
      {/* Background radial highlight */}
      <div className="fixed inset-0 vignette-bg pointer-events-none z-0" id="vignette-layer" />

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#070708]/80 backdrop-blur-md border-b border-neutral-900" id="main-nav-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="font-serif text-2xl tracking-wider text-[#d4af37] font-semibold transition-all group-hover:text-white">
              sebastián.m
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#services" className="text-neutral-400 hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#work" className="text-neutral-400 hover:text-white transition-colors">{t.nav.work}</a>
            <a href="#experience" className="text-neutral-400 hover:text-white transition-colors">{t.nav.experience}</a>
            <a href="#education" className="text-neutral-400 hover:text-white transition-colors">{t.nav.education}</a>
            <a href="#qa" className="text-neutral-400 hover:text-white transition-colors">Q&A</a>
            <a href="#contact" className="text-neutral-400 hover:text-white transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Controls Header */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Lang Switcher */}
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:border-[#d4af37]/40 hover:text-[#d4af37] transition-all cursor-pointer"
              title="Cambiar idioma / Change language"
              id="lang-toggle-desktop"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>

            {/* CTA Button */}
            <a 
              href="#contact" 
              className="text-xs tracking-widest uppercase font-semibold bg-[#d4af37] text-black px-6 py-3 rounded-full hover:bg-white transition-all shadow-lg shadow-[#d4af37]/10"
              id="header-cta-desktop"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-300"
              id="lang-toggle-mobile"
            >
              <Languages className="w-3 h-3" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-400 hover:text-white focus:outline-none p-1.5"
              aria-label="Toggle mobile menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070708] border-b border-neutral-900 px-6 py-8 flex flex-col gap-6 animate-fade-in" id="mobile-menu-drawer">
            <nav className="flex flex-col gap-4 text-base font-medium">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {t.nav.services}
              </a>
              <a 
                href="#work" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {t.nav.work}
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {t.nav.experience}
              </a>
              <a 
                href="#education" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {t.nav.education}
              </a>
              <a 
                href="#qa" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Q&A
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="h-[1px] bg-neutral-900 w-full" />

            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-sm tracking-widest uppercase font-semibold bg-[#d4af37] text-black py-3 rounded-full"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col gap-28 md:gap-40" id="main-content">
        
        {/* HERO SECTION - Replicating ARIK Editorial Layout */}
        <section className="flex flex-col items-center text-center pt-4 md:pt-10" id="hero">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 border border-[#d4af37]/30 bg-neutral-900/60 px-4 py-1.5 rounded-full mb-8 text-[11px] font-semibold tracking-widest text-[#d4af37] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
            </span>
            {t.hero.badge}
          </div>

          {/* PROFILE IMAGE - with visual toggles */}
          <div className="relative mb-8 group" id="hero-profile-container">
            {/* Ambient gold glow behind photo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#d4af37]/20 to-neutral-950/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative rounded-full p-1 bg-gradient-to-b from-[#d4af37]/30 via-neutral-900 to-neutral-950 shadow-2xl">
              <img 
                src="https://upkvrgncduvxzjvtxbpv.supabase.co/storage/v1/object/public/imagenes_chatbot/profile.png" 
                alt="Sebastián Mojica Fraga" 
                className={`w-40 h-40 md:w-48 md:h-48 rounded-full object-cover transition-all duration-700 ${
                  useMonochrome ? 'grayscale contrast-125 brightness-95 filter sepia-[0.1]' : 'grayscale-0'
                }`}
                id="profile-headshot"
              />
            </div>

            {/* Floating color filter toggle */}
            <button 
              onClick={() => setUseMonochrome(!useMonochrome)}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#070708] border border-neutral-800 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full text-neutral-400 hover:text-white hover:border-[#d4af37] transition-all cursor-pointer shadow-lg shadow-black"
              title="Toggle editorial black & white / original color filter"
              id="filter-toggle"
            >
              {useMonochrome ? t.hero.toggle_filter_color : t.hero.toggle_filter_mono}
            </button>
          </div>

          {/* Premium Headline */}
          <h1 className="max-w-4xl text-5xl md:text-8xl tracking-tight text-white font-serif leading-[1.05] mb-6">
            <span className="block text-neutral-300 font-light">{t.hero.title_part1}</span>
            <span className="block text-white italic font-normal text-[#d4af37] mt-1">{t.hero.title_part2}</span>
          </h1>

          {/* Headline sub description */}
          <p className="max-w-2xl text-base md:text-lg text-neutral-400 font-sans font-light leading-relaxed mb-10">
            {t.hero.subtitle}
          </p>

          {/* Explore actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#work" 
              className="px-8 py-4 rounded-full bg-[#d4af37] text-black font-semibold text-sm uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-lg shadow-[#d4af37]/10"
            >
              {t.hero.explore_cta}
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full border border-neutral-800 hover:border-neutral-500 bg-neutral-900/40 text-white font-semibold text-sm uppercase tracking-wider transition-all"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Visual Divider / Tech Metrics Row */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6 border-y border-neutral-900 py-10 mt-20 text-left" id="hero-metrics-grid">
            <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#d4af37]/30">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">{t.metrics.experience}</span>
              <span className="font-serif text-3xl md:text-4xl text-white font-semibold">2+ {lang === 'es' ? 'Años' : 'Years'}</span>
            </div>
            <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#d4af37]/30">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">{t.metrics.projects_count}</span>
              <span className="font-serif text-3xl md:text-4xl text-white font-semibold">3 (Vercel)</span>
            </div>
            <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#d4af37]/30">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">{t.metrics.english}</span>
              <span className="font-serif text-3xl md:text-4xl text-white font-semibold">B2 Upper-Int</span>
            </div>
            <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#d4af37]/30">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">{t.metrics.location}</span>
              <span className="font-serif text-xl md:text-2xl text-white font-light mt-1 flex items-center gap-1.5">
                <MapPin className="w-4.5 h-4.5 text-[#d4af37] shrink-0" />
                Palmira, Colombia
              </span>
            </div>
          </div>
        </section>


        {/* CORE SPECIALTIES - 3 card layout like ARIK */}
        <section className="flex flex-col gap-12 scroll-mt-28" id="services">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase block mb-3">01 / {lang === 'es' ? 'ESPECIALIDAD' : 'EXPERTISE'}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">{t.services.title}</h2>
            </div>
            <p className="max-w-md text-neutral-400 font-light text-sm md:text-base">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-900 glow-card flex flex-col gap-8 justify-between relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex flex-col gap-6">
                <div className="h-12 w-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] border border-[#d4af37]/20">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-neutral-600 block mb-1">01.01</span>
                  <h3 className="text-xl font-serif text-white font-semibold">{t.services.dev_title}</h3>
                </div>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {t.services.dev_desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-wider pt-4 border-t border-neutral-900">
                <span>ReactJS &bull; TS &bull; Tailwind</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-900 glow-card flex flex-col gap-8 justify-between relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex flex-col gap-6">
                <div className="h-12 w-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] border border-[#d4af37]/20">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-neutral-600 block mb-1">01.02</span>
                  <h3 className="text-xl font-serif text-white font-semibold">{t.services.ux_title}</h3>
                </div>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {t.services.ux_desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-wider pt-4 border-t border-neutral-900">
                <span>Figma &bull; Prototyping &bull; UX</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-900 glow-card flex flex-col gap-8 justify-between relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4af37]/5 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex flex-col gap-6">
                <div className="h-12 w-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] border border-[#d4af37]/20">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-neutral-600 block mb-1">01.03</span>
                  <h3 className="text-xl font-serif text-white font-semibold">{t.services.eng_title}</h3>
                </div>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {t.services.eng_desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d4af37] uppercase tracking-wider pt-4 border-t border-neutral-900">
                <span>Problem Solving &bull; Algorithms</span>
              </div>
            </div>

          </div>
        </section>


        {/* PROJECTS SECTION - With beautiful emulated drawer for live testing */}
        <section className="flex flex-col gap-12 scroll-mt-28" id="work">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase block mb-3">02 / {lang === 'es' ? 'PORTAFOLIO EN VIVO' : 'LIVE PORTFOLIO'}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">{t.projects.title}</h2>
            </div>
            <p className="max-w-md text-neutral-400 font-light text-sm md:text-base">
              {t.projects.subtitle}
            </p>
          </div>

          {/* PROJECT PREVIEW EMULATOR INTEGRATION */}
          {activeProjectPreview && (
            <div className="w-full bg-neutral-950 rounded-2xl border-2 border-[#d4af37] overflow-hidden shadow-2xl p-4 md:p-6 flex flex-col gap-4 animate-fade-in-up" id="live-project-emulator">
              
              {/* Emulator Top Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-900 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <span className="h-4 w-[1px] bg-neutral-800" />
                  <div className="text-xs font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-md max-w-xs md:max-w-md truncate">
                    {activePreviewUrl}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <a 
                    href={activePreviewUrl || '#'} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold border border-[#d4af37]/20 bg-[#d4af37]/5 px-3 py-1.5 rounded-full hover:bg-[#d4af37]/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.projects.open_new_tab}</span>
                  </a>
                  <button 
                    onClick={() => setActiveProjectPreview(null)}
                    className="flex items-center gap-1 text-xs text-red-400 border border-red-950 bg-red-950/20 px-3 py-1.5 rounded-full hover:bg-red-950/40 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>{t.projects.close_preview}</span>
                  </button>
                </div>
              </div>

              {/* Real iFrame Preview Area */}
              <div className="relative w-full h-[550px] md:h-[650px] bg-neutral-900 rounded-xl overflow-hidden border border-neutral-900">
                <iframe 
                  src={activePreviewUrl || ''} 
                  title="Sebastián Mojica Live Project Preview" 
                  className="w-full h-full border-0 bg-neutral-950"
                  sandbox="allow-scripts allow-same-origin"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-neutral-800 px-3 py-1.5 rounded-md text-[10px] text-neutral-400 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span>{t.projects.preview_warning}</span>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT CARDS LISTING */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="projects-grid">
            {t.projects.items.map((project, index) => {
              const isCurrentlyPreviewed = activeProjectPreview === project.id;
              
              return (
                <div 
                  key={project.id} 
                  className={`flex flex-col justify-between bg-neutral-900/20 border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                    isCurrentlyPreviewed ? 'border-[#d4af37] bg-neutral-900/40 scale-[1.02]' : 'border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/10'
                  }`}
                  id={`project-card-${project.id}`}
                >
                  
                  {/* Card Header & Emulated Device Visual */}
                  <div className="flex flex-col gap-6">
                    
                    {/* Device browser simulation header */}
                    <div className="w-full bg-neutral-950 rounded-lg p-2.5 border border-neutral-900 flex items-center justify-between mb-2">
                      <div className="flex gap-1.5 items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500/60 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/60 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-green-500/60 inline-block" />
                      </div>
                      <div className="h-3 w-32 bg-neutral-900 rounded-sm" />
                      <div className="w-3.5 h-3.5 rounded bg-neutral-900 flex items-center justify-center text-[8px] text-neutral-600">
                        <FolderGit2 className="w-2 h-2" />
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-[#d4af37] tracking-widest uppercase block mb-1">{project.category}</span>
                      <h3 className="text-2xl font-serif text-white font-medium">{project.title}</h3>
                    </div>

                    <p className="text-neutral-400 text-sm font-light leading-relaxed min-h-[80px]">
                      {project.desc}
                    </p>

                    <div className="bg-neutral-950/60 rounded-xl p-4 border border-neutral-900 text-xs text-neutral-400">
                      <span className="font-semibold text-white block mb-1">{lang === 'es' ? 'Valor Técnico / Impacto:' : 'Technical Value / Impact:'}</span>
                      {project.impact}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-1 rounded-md border border-neutral-800/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-neutral-900">
                    
                    {/* Integrated Emulator Trigger */}
                    <button 
                      onClick={() => {
                        setActiveProjectPreview(project.id);
                        // Smooth scroll up to project preview emulator
                        const el = document.getElementById('work');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 py-2.5 rounded-full hover:bg-[#d4af37] hover:text-black transition-all cursor-pointer"
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>{t.projects.explore_in_portfolio}</span>
                    </button>

                    {/* Open direct tab */}
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-medium border border-neutral-800 text-neutral-300 hover:text-white px-4 py-2.5 rounded-full hover:border-neutral-600 transition-colors"
                    >
                      <span>{t.projects.view_live}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        </section>


        {/* TRAJECTORY SECTION */}
        <section className="flex flex-col gap-12 scroll-mt-28" id="experience">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase block mb-3">03 / {lang === 'es' ? 'EXPERIENCIA' : 'WORK HISTORY'}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">{t.experience.title}</h2>
            </div>
            <p className="max-w-md text-neutral-400 font-light text-sm md:text-base">
              {t.experience.subtitle}
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-10 max-w-4xl mx-auto pl-2 sm:pl-6 relative border-l border-neutral-900" id="timeline-container">
            {t.experience.items.map((exp, index) => (
              <div key={index} className="relative pl-8 group" id={`timeline-item-${index}`}>
                
                {/* Bullet point indicator */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#070708] border-2 border-[#d4af37] flex items-center justify-center transition-transform group-hover:scale-125 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-neutral-950/40 border border-neutral-900/60 hover:border-neutral-800 transition-all flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-serif text-white font-semibold flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-400 mt-1">
                        <span className="text-[#d4af37] font-medium">{exp.company}</span>
                        <span>&bull;</span>
                        <span>{exp.type}</span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-neutral-500" />{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800 text-neutral-300 select-none">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm font-light leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-900">
                    <span className="text-[11px] font-mono text-neutral-500 block mb-2 uppercase tracking-wider">{lang === 'es' ? 'Habilidades aplicadas:' : 'Skills applied:'}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/5 px-2 py-0.5 rounded border border-[#d4af37]/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>


        {/* TECHNICAL SKILLS PILLS GRID */}
        <section className="flex flex-col gap-12 scroll-mt-28" id="skills">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase block mb-3">04 / {lang === 'es' ? 'HABILIDADES' : 'TECH STACK'}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">{t.skills.title}</h2>
            </div>
            <p className="max-w-md text-neutral-400 font-light text-sm md:text-base">
              {t.skills.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Frontend Category */}
            <div className="flex flex-col gap-4">
              <div className="font-serif text-lg text-white font-semibold border-b border-neutral-900 pb-2 flex items-center gap-2">
                <Code className="w-4 h-4 text-[#d4af37]" />
                {t.skills.categories.frontend}
              </div>
              <div className="flex flex-col gap-2">
                {skillSets.filter(s => s.cat === "frontend").map((skill, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-neutral-900/20 border border-neutral-900 hover:border-neutral-800 transition-colors text-sm">
                    <span className="font-medium text-neutral-300">{skill.name}</span>
                    <span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/5 px-1.5 py-0.5 rounded">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* State Category */}
            <div className="flex flex-col gap-4">
              <div className="font-serif text-lg text-white font-semibold border-b border-neutral-900 pb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#d4af37]" />
                {t.skills.categories.state}
              </div>
              <div className="flex flex-col gap-2">
                {skillSets.filter(s => s.cat === "state").map((skill, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-neutral-900/20 border border-neutral-900 hover:border-neutral-800 transition-colors text-sm">
                    <span className="font-medium text-neutral-300">{skill.name}</span>
                    <span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/5 px-1.5 py-0.5 rounded">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Category */}
            <div className="flex flex-col gap-4">
              <div className="font-serif text-lg text-white font-semibold border-b border-neutral-900 pb-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#d4af37]" />
                {t.skills.categories.design}
              </div>
              <div className="flex flex-col gap-2">
                {skillSets.filter(s => s.cat === "design").map((skill, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-neutral-900/20 border border-neutral-900 hover:border-neutral-800 transition-colors text-sm">
                    <span className="font-medium text-neutral-300">{skill.name}</span>
                    <span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/5 px-1.5 py-0.5 rounded">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology Category */}
            <div className="flex flex-col gap-4">
              <div className="font-serif text-lg text-white font-semibold border-b border-neutral-900 pb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                {t.skills.categories.methodology}
              </div>
              <div className="flex flex-col gap-2">
                {skillSets.filter(s => s.cat === "methodology").map((skill, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-neutral-900/20 border border-neutral-900 hover:border-neutral-800 transition-colors text-sm">
                    <span className="font-medium text-neutral-300">{skill.name}</span>
                    <span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/5 px-1.5 py-0.5 rounded">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* EDUCATION & CERTIFICATIONS */}
        <section className="flex flex-col gap-12 scroll-mt-28" id="education">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase block mb-3">05 / {lang === 'es' ? 'FORMACIÓN ACADÉMICA' : 'ACADEMIC STUDY'}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">{t.education.title}</h2>
            </div>
            <p className="max-w-md text-neutral-400 font-light text-sm md:text-base">
              {t.education.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Degree Cards (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6" id="degrees-list">
              {t.education.items.map((edu, index) => (
                <div key={index} className="p-6 md:p-8 rounded-2xl bg-neutral-900/10 border border-neutral-900/80 hover:border-[#d4af37]/20 hover:bg-neutral-900/20 transition-all flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                    <div>
                      <h3 className="text-lg md:text-xl font-serif text-white font-semibold">{edu.degree}</h3>
                      <span className="text-sm text-[#d4af37] block mt-1">{edu.school}</span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 shrink-0 mt-1 sm:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Box (5 cols) */}
            <div className="lg:col-span-5 bg-neutral-900/10 border border-neutral-900/80 rounded-2xl p-6 md:p-8" id="certifications-box">
              <h3 className="text-xl font-serif text-white font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#d4af37]" />
                {t.education.certifications_title}
              </h3>
              
              <div className="flex flex-col gap-4">
                {certificationsList.map((cert, index) => (
                  <div key={index} className="flex gap-4 items-start p-3 rounded-xl bg-[#070708]/40 border border-neutral-950 hover:border-neutral-900 transition-colors">
                    <div className="h-8 w-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37] shrink-0">
                      <CheckCircle className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-neutral-200">{cert.title}</span>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                        <span>{cert.provider}</span>
                        <span>&bull;</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* FAQ / INTERACTIVE INTERVIEW SIMULATOR */}
        <section className="flex flex-col gap-12 scroll-mt-28" id="qa">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase block mb-3">06 / {lang === 'es' ? 'ENTREVISTA INTERACTIVA' : 'INTERACTIVE INTERVIEW'}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">{t.qa.title}</h2>
            </div>
            <p className="max-w-md text-neutral-400 font-light text-sm md:text-base">
              {t.qa.subtitle}
            </p>
          </div>

          <div className="bg-neutral-950/40 rounded-3xl border border-neutral-900/80 p-6 md:p-10 flex flex-col lg:grid lg:grid-cols-12 gap-8" id="qa-simulator-container">
            
            {/* Questions selectors (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-mono text-neutral-500 tracking-wider mb-2 block">{t.qa.intro}</span>
              <div className="flex flex-col gap-2">
                {t.qa.questions.map((item, idx) => {
                  const isSelected = activeQaIdx === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveQaIdx(idx)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex gap-3 items-start justify-between text-sm ${
                        isSelected 
                          ? 'border-[#d4af37] bg-[#d4af37]/5 text-[#d4af37] scale-[1.01] shadow-md shadow-[#d4af37]/5' 
                          : 'border-neutral-900/80 bg-neutral-900/10 text-neutral-400 hover:text-white hover:border-neutral-800'
                      }`}
                      id={`qa-trigger-btn-${idx}`}
                    >
                      <span className="font-medium pr-2 leading-relaxed">{item.q}</span>
                      <span className="text-[10px] font-mono uppercase bg-neutral-950 border border-neutral-900 text-neutral-500 px-2 py-0.5 rounded shrink-0">
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Answer Board simulation (7 cols) */}
            <div className="lg:col-span-7 bg-neutral-900/15 border border-neutral-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between" id="qa-answer-board">
              <div className="flex flex-col gap-6">
                
                {/* Simulated message sender header */}
                <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://upkvrgncduvxzjvtxbpv.supabase.co/storage/v1/object/public/imagenes_chatbot/profile.png" 
                      alt="Sebastián" 
                      className="w-10 h-10 rounded-full object-cover border border-neutral-800"
                    />
                    <div>
                      <span className="font-serif text-sm text-white font-medium block">Sebastián Mojica Fraga</span>
                      <span className="text-[10px] font-mono text-[#d4af37] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {lang === 'es' ? 'Respuesta Interactiva' : 'Interactive Answer'}
                      </span>
                    </div>
                  </div>
                  
                  <HelpCircle className="w-5 h-5 text-neutral-700" />
                </div>

                {/* Simulated Chat bubble */}
                <div className="flex flex-col gap-4">
                  {/* The Question */}
                  <div className="bg-neutral-950/80 border border-neutral-900/60 p-4 rounded-xl text-xs text-neutral-400 italic">
                    <span className="text-[#d4af37] font-semibold not-italic block mb-1">Q:</span>
                    "{t.qa.questions[activeQaIdx].q}"
                  </div>

                  {/* The Answer */}
                  <div className="text-neutral-300 text-sm md:text-base font-light leading-relaxed pl-1">
                    <span className="text-[#d4af37] font-serif text-xl font-bold block mb-2 font-mono">A:</span>
                    {t.qa.questions[activeQaIdx].a}
                  </div>
                </div>

              </div>

              {/* Interaction note */}
              <div className="flex items-center gap-2 pt-6 mt-6 border-t border-neutral-900 text-xs text-neutral-500">
                <UserCheck className="w-4 h-4 text-[#d4af37]" />
                <span>{lang === 'es' ? 'Redactado originalmente por Sebastián Mojica' : 'Originally written by Sebastián Mojica'}</span>
              </div>

            </div>

          </div>
        </section>


        {/* CONTACT SECTION */}
        <section className="flex flex-col gap-12 scroll-mt-28" id="contact">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase block mb-3">07 / {lang === 'es' ? 'CONTACTO' : 'GET IN TOUCH'}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">{t.contact.title}</h2>
            </div>
            <p className="max-w-md text-neutral-400 font-light text-sm md:text-base">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto w-full">
            
            {/* Contact details card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6" id="contact-info-cards">
              
              <div className="bg-neutral-900/20 border border-neutral-900 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-serif text-white font-semibold mb-2">{t.contact.card_title}</h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {t.contact.card_desc}
                  </p>
                </div>

                <div className="flex flex-col gap-4 border-t border-neutral-900 pt-6">
                  
                  {/* Email contact option */}
                  <a 
                    href="mailto:sebastian.mojica@disruptia.co" 
                    className="flex gap-4 items-center p-3 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-[#d4af37]/30 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">{lang === 'es' ? 'Enviar correo' : 'Email address'}</span>
                      <span className="text-sm text-neutral-200 font-mono font-medium block mt-0.5 truncate max-w-[200px] sm:max-w-xs">
                        sebastian.mojica@disruptia.co
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn profile link */}
                  <a 
                    href="https://www.linkedin.com/in/sebastian-mojica-fraga" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex gap-4 items-center p-3 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-[#d4af37]/30 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-all">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">LinkedIn</span>
                      <span className="text-sm text-neutral-200 font-mono font-medium block mt-0.5">
                        sebastian-mojica-fraga
                      </span>
                    </div>
                  </a>

                  {/* GitHub Profile */}
                  <div 
                    className="flex gap-4 items-center p-3 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-[#d4af37]/30 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-neutral-800/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block">GitHub Portal</span>
                      <span className="text-sm text-neutral-200 font-mono font-medium block mt-0.5">
                        {lang === 'es' ? 'Ver proyectos en vivo' : 'Explore production repos'}
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Email send simulation (7 cols) */}
            <div className="lg:col-span-7 bg-neutral-900/10 border border-neutral-900 rounded-2xl p-6 md:p-8" id="contact-form-container">
              <h3 className="text-xl font-serif text-white font-semibold mb-6">{t.contact.form_title}</h3>

              {showSuccess ? (
                <div className="bg-green-950/20 border border-green-800/40 p-6 rounded-2xl text-center flex flex-col items-center gap-3 py-12 animate-fade-in-up" id="form-success-alert">
                  <div className="h-12 w-12 rounded-full bg-green-900/20 text-green-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="text-green-300 font-medium text-sm leading-relaxed max-w-sm">
                    {t.contact.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{t.contact.name}</label>
                    <input 
                      type="text" 
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Escribre tu nombre"
                      className="w-full bg-neutral-950 border border-neutral-900 focus:border-[#d4af37] focus:outline-none p-3.5 rounded-xl text-sm transition-colors text-white"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{t.contact.email}</label>
                    <input 
                      type="email" 
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="nombre@ejemplo.com"
                      className="w-full bg-neutral-950 border border-neutral-900 focus:border-[#d4af37] focus:outline-none p-3.5 rounded-xl text-sm transition-colors text-white"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{t.contact.message}</label>
                    <textarea 
                      required
                      rows={4}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="¿En qué puedo ayudarte?"
                      className="w-full bg-neutral-950 border border-neutral-900 focus:border-[#d4af37] focus:outline-none p-3.5 rounded-xl text-sm transition-colors text-white resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-[#d4af37] hover:bg-white text-black font-semibold text-sm uppercase tracking-wider py-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 shadow-lg shadow-[#d4af37]/10 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? t.contact.sending : t.contact.send}</span>
                  </button>
                </form>
              )}

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12 relative z-10" id="main-footer">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="font-serif text-xl tracking-wider text-[#d4af37] font-semibold">sebastián.m</span>
            <p className="text-xs text-neutral-500 font-light">
              &copy; {new Date().getFullYear()} Sebastián Mojica Fraga. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-neutral-400">
            <a href="#services" className="hover:text-[#d4af37] transition-colors">{t.nav.services}</a>
            <a href="#work" className="hover:text-[#d4af37] transition-colors">{t.nav.work}</a>
            <a href="#experience" className="hover:text-[#d4af37] transition-colors">{t.nav.experience}</a>
            <a href="#education" className="hover:text-[#d4af37] transition-colors">{t.nav.education}</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">{t.nav.contact}</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
