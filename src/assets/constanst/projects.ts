export const FULL_STACK_PROJECTS = [
  {
    title: 'Full Stack Project',
    description:
      'The Full Stack Challenge project is a comprehensive application that demonstrates a full-stack development approach using modern technologies. The project includes both frontend and backend components, showcasing a complete and functional web application. In this project we upload a file and conver it to json format.',
    tecnologies: [
      {
        name: 'Frontend:',
        stack: 'React.js, TypeScript, ChakraUI, React Query, React hooks.',
      },
      {
        name: 'Backend:',
        stack: 'Node.js, Express',
      },
      {
        name: 'Database:',
        stack: 'MongoDB',
      },
    ],
    features: [
      'Operations: Upload a file and convert it to json format and front can read it.',
      'Efficient state management using React Query',
      'API Integration: Seamless integration with backend APIs developed using Express.js',
    ],
    link: 'https://github.com/bettyrjc/challenge-full-stack',
  },
];

export const BACKEND_PROJECTS = [
  {
    title: 'WebSockets Chat Application',
    description: 'The WebSockets Chat Application project demonstrates real-time communication using WebSockets.',
    tecnologies: [
      {
        name: 'Backend',
        stack: ' Node.js, Express, WebSocket',
      },
      {
        name: 'Database',
        stack: 'state managed in-memory',
      },
    ],
    features: [
      'Real-Time Data',
      'This project serves as an example of implementing real-time features using WebSockets and can be extended to create more complex real-time applications.',
    ],
    link: 'https://github.com/bettyrjc/websockets',
  },
  {
    title: 'NOC Node API',
    description:
      'The NOC Node API project is a backend service built with Node.js and Express that provides a robust API for network operations center (NOC) management. It includes endpoints for monitoring and managing network devices, alerts, and logs.',
    tecnologies: [
      {
        name: 'Backend',
        stack: ' Node.js, Express',
      },
      {
        name: 'Database',
        stack: 'MongoDB',
      },
    ],
    features: [
      'Logging: Comprehensive logging of network events and actions.',
      'Alerts: Sent a message to verify your status.',
      'This project is intended to be used as a backend service for NOC operations and can be integrated with frontend applications or other services for comprehensive network management.',
    ],
    link: 'https://github.com/bettyrjc/NOC-NODE',
  },
  {
    title: 'Psico App Backend',
    description:
      'The Psico App Backend project is a backend service designed to support the functionalities of an application for psychologists and their patients. The service includes endpoints for managing appointments, products, and user profiles.',
    tecnologies: [
      {
        name: 'Backend',
        stack: ' Node.js, Express, authentication: JWT (JSON Web Tokens)',
      },
      {
        name: 'Database',
        stack: 'MongoDB',
      },
    ],
    features: [
      'Secure Authentication: Secure login and registration system using JWT.',
      'show all products and appointments',
      'API Documentation: Comprehensive API documentation for easy integration.',
      'Endpoints to create, list, and delete services records.',
    ],
    link: 'https://github.com/bettyrjc/psico-app',
  },
];

export const FRONTEND_PROJECTS = [
  {
    title: 'Design system',
    description:
      ' A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.',
    tecnologies: [
      {
        name: 'Stack:',
        stack: 'React.js, TypeScript, Tailwind, storybook, React hooks.',
      },
      {
        name: 'Architecture:',
        stack: 'Screaming architecture and for organize css BEM, ATOM and ITCSS.',
      },
    ],
    features: [
      'Dropdown: A dropdown component that can be used to create a dropdown menu.',
      'Button: A button component that can be used to create a button with different styles.',
      'Dropdown search: A dropdown search component that can be used to create a dropdown search menu.',
    ],
    link: 'https://github.com/bettyrjc/design-system',
    web: 'https://design-system-3b2ljavt2-betty-jimenezs-projects.vercel.app/',
  },
];
