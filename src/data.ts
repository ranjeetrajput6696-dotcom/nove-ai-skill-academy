import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 'data-analyst-pro',
    title: 'Data Analyst Pro',
    description: 'Master SQL, Python, and PowerBI to transform raw data into powerful business insights.',
    category: 'Analytics',
    rating: 4.9,
    reviewsCount: 1240,
    price: 499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2ArM87rqE0J7C3YfJno92ibuhs5O7avGPqSPs59gFjzIBUBK-5vuvaaR-xqlJyy4nV87SqmROm44UvClk0G4_RUf4KeB9PUaaH14M5dkDlgZnX_OD--df0gCEXEcACcmy5JwDcKKKKQvSZVbZQd6Vcnikcw4oNVQOxuuHxvKqesXeYhAb46YZI65Mayy5ZR1OZIxlwRbn1iyqmOMcktRVWIGYfWKbFltT9VJBzs7CVi06oqkTKG0H8Te_oOgLgE_jwl6atoFy4621',
    isTrending: true,
    duration: '8 Weeks',
    lectures: 42,
    level: 'Intermediate',
    instructor: {
      name: 'Sarah Jenkins',
      role: 'Lead Data Scientist at Netflix',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
      bio: 'Sarah has over a decade of experience analyzing user behavior and streaming optimization datasets. She loves demystifying complex statistics for absolute beginners.'
    },
    syllabus: [
      {
        week: 'Week 1',
        title: 'Foundations of Modern Data Analysis',
        topics: ['Introduction to data lifecycles', 'Understanding tabular datasets', 'Installing and setting up PostgreSQL', 'Basic SELECT queries, filtering, and sorting']
      },
      {
        week: 'Week 2',
        title: 'Advanced SQL & Data Aggregations',
        topics: ['Group By, Having, and SQL Aggregate functions', 'Subqueries and Common Table Expressions (CTEs)', 'JOIN operations across multiple tables', 'Database normalizations and index optimization']
      },
      {
        week: 'Week 3',
        title: 'Python for Data Analysis (Pandas & NumPy)',
        topics: ['Jupyter Notebook configuration', 'Pandas Series and DataFrames', 'Data cleaning, handling missing values, and type casting', 'Exploratory Data Analysis (EDA) techniques']
      },
      {
        week: 'Week 4',
        title: 'Data Visualization & Reporting in PowerBI',
        topics: ['Connecting multiple data sources', 'Designing interactive dashboards', 'DAX expressions and calculations', 'Best practices for reporting actionable insights']
      }
    ]
  },
  {
    id: 'full-stack-web-dev',
    title: 'Full-Stack Web Dev',
    description: 'From HTML/CSS basics to advanced React and Node.js. Build real-world portfolio projects.',
    category: 'Development',
    rating: 5.0,
    reviewsCount: 2450,
    price: 599,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI2VLqXDCINou757j-TrAPhXmCRpWWRD7vtZSVk1MIHEhMeXMkEKSnyO1kVDdoOFhGjfyH7afNkbGFTlVjUUUcGd0OqrvgldqInDot-NEw-ksoOZiO2rTRpuU8g7dhdrEBbfNRigq6MLGxFolN4xA5_ibES0-opQq36LpwmUt9JcLDjaPIBr_4Tw9GULbPeOf9OgqZoOy4FJE-w4q8OTwWiYbB3wXXQhBfe0vVZZPmMkAsMF3cDMdz2Px97sS_bEP8P0z8IRlR01DM',
    isBestseller: true,
    duration: '12 Weeks',
    lectures: 68,
    level: 'Beginner',
    instructor: {
      name: 'Alex Rivera',
      role: 'Former Senior Engineer at Google',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
      bio: 'Alex is passionate about clean code architectures and building highly scalable web client layers. He has mentored over 10,000 students worldwide.'
    },
    syllabus: [
      {
        week: 'Week 1',
        title: 'HTML5, CSS3, and Modern Typography',
        topics: ['Semantic markup standards', 'Tailwind CSS utility-first layout classes', 'Responsive web design patterns', 'Flexbox and Grid systems']
      },
      {
        week: 'Week 2',
        title: 'JavaScript ES6+ Core Foundations',
        topics: ['Variables, scopes, and closure', 'Asynchronous JS, Promises, and Async/Await', 'Document Object Model (DOM) event manipulation', 'Array methods and functional programming basics']
      },
      {
        week: 'Week 3',
        title: 'React.js Component Engine',
        topics: ['React 19 features & component lifecycles', 'Hooks (useState, useEffect, useMemo, useRef)', 'State management and Props drilling remedies', 'Routing with React Router and Tailwind animations']
      },
      {
        week: 'Week 4',
        title: 'Backend with Node.js, Express & Databases',
        topics: ['Setting up Express.js server architectures', 'REST API design and request validation', 'Connecting to SQL & MongoDB databases', 'User authentication and JWT token security']
      }
    ]
  },
  {
    id: 'ios-android-mastery',
    title: 'iOS & Android Mastery',
    description: 'Learn Flutter and Swift to build high-performance mobile applications for global audiences.',
    category: 'Mobile',
    rating: 4.8,
    reviewsCount: 850,
    price: 549,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYOsfbItPqq6Sh4yyn6ih5YblPv-swP4FJabL3IXP-ivmmyvU4izqdKJvMQ91e8huBdSn0qIsRrGHxu_Hq9E-ncyFc4c5qRCQW-EXn8I0BA0RHQ8pyt5VC2uNPY8XLQerFkuIUMPCLdOeFlyrOZ28eiaqOe0vDTk-GFtBclQtPX1gJYnL-Lcj_tQgug9ntJi9YX4HHl76xVu7xrx8rRYDVTa_PPvLplAFxprf51dePyXJZsdd5_4Z7hwpWmPknjSEN2m_VNCpcX4eE',
    duration: '10 Weeks',
    lectures: 54,
    level: 'Intermediate',
    instructor: {
      name: 'Marcus Chen',
      role: 'Staff Mobile Architect at Uber',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120',
      bio: 'Marcus has designed major features for apps with millions of active users. He specializes in cross-platform UI engineering and high-performance native bridges.'
    },
    syllabus: [
      {
        week: 'Week 1',
        title: 'Dart & Swift Language Syntaxes',
        topics: ['Strict typing and null-safety principles', 'Object-Oriented Programming (OOP) in Dart/Swift', 'Functions, closures, and async primitives', 'Protocol-oriented and declarative designs']
      },
      {
        week: 'Week 2',
        title: 'UI Layout Engine and Animations',
        topics: ['Flutter Widget Tree & stateful lifecycle models', 'SwiftUI state managers and declarative list layouts', 'Creating custom transitions and physics-based animations', 'Localizations and Accessibility setups']
      },
      {
        week: 'Week 3',
        title: 'State Management and Local Storage',
        topics: ['Provider and Bloc architectures in Flutter', 'SwiftUI environment variables and CoreData foundations', 'Local caching of offline media assets', 'Secure storage for credentials']
      },
      {
        week: 'Week 4',
        title: 'App Store Guidelines & Publishing',
        topics: ['Configuring Google Play Console & Apple Developer logs', 'App Store review guidelines compliance checklist', 'Automated testing and CI/CD pipelines', 'Crashlytics and performance telemetry integration']
      }
    ]
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning Masterclass',
    description: 'Dive deep into deep learning, LLMs, neural networks, and computer vision with PyTorch and TensorFlow.',
    category: 'AI',
    rating: 5.0,
    reviewsCount: 1840,
    price: 699,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=480',
    isTrending: true,
    duration: '14 Weeks',
    lectures: 78,
    level: 'Advanced',
    instructor: {
      name: 'Dr. Elena Rostova',
      role: 'AI Researcher & Former MIT Lecturer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120',
      bio: 'Dr. Rostova is an acclaimed expert in deep neural networks. She focus on bringing complex mathematical theory into real-world, engineering-first AI solutions.'
    },
    syllabus: [
      {
        week: 'Week 1',
        title: 'Mathematical Foundations for AI',
        topics: ['Linear algebra for multi-dimensional tensors', 'Multivariate calculus and gradient descent models', 'Probability distributions & Bayesian statistics', 'NumPy vectorization optimization']
      },
      {
        week: 'Week 2',
        title: 'Supervised & Unsupervised Machine Learning',
        topics: ['Linear & logistic regression pipelines', 'Support Vector Machines (SVM) and Decision Trees', 'K-Means clustering and dimensionality reduction (PCA)', 'Evaluating classifiers: ROC-AUC, precision-recall']
      },
      {
        week: 'Week 3',
        title: 'Deep Neural Networks with PyTorch',
        topics: ['Backpropagation mathematics and custom activation functions', 'Building convolutional neural networks (CNNs) for vision', 'Recurrent neural networks (RNNs) and LSTMs', 'Regularization, optimization algorithms (Adam, RMSProp)']
      },
      {
        week: 'Week 4',
        title: 'Transformers, LLMs and Generative AI',
        topics: ['Self-attention mechanism and Transformer architecture', 'Fine-tuning Pre-trained Large Language Models (LLMs)', 'Prompt engineering and Retrieval-Augmented Generation (RAG)', 'Deploying AI models securely using containerized server endpoints']
      }
    ]
  },

  {
    id: 'digital-marketing-ai',
    title: 'AI-Driven Digital Marketing',
    description: 'Supercharge your marketing using Gemini, Claude, and Gamma. Master SEO, high-impact copywriting, and hyper-targeted campaign automation.',
    category: 'Marketing',
    rating: 4.9,
    reviewsCount: 980,
    price: 349,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=480',
    isTrending: true,
    duration: '6 Weeks',
    lectures: 32,
    level: 'Beginner',
    instructor: {
      name: 'Rebecca Sterling',
      role: 'Growth Marketing Director at Stripe',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120',
      bio: 'Rebecca specializes in viral brand architectures and programmatic lead generation. She loves teaching growth hacking with modern AI stacks.'
    },
    syllabus: [
      {
        week: 'Week 1',
        title: 'Modern Digital Marketing Architecture',
        topics: ['SEO optimization and indexing strategies', 'Content planning and brand narrative design', 'Target audience segmentation algorithms', 'Inbound marketing funnels']
      },
      {
        week: 'Week 2',
        title: 'AI-Powered Creative Assets & Content',
        topics: ['Copywriting with Claude, Gemini, and ChatGPT', 'Generating pitch decks and slides with Gamma', 'Dynamic ad graphics creation with Canva and Midjourney', 'Scaling content calendars using AI scripting']
      },
      {
        week: 'Week 3',
        title: 'Paid Acquisition & Campaign Optimization',
        topics: ['Configuring Meta Pixel and Google Ads events', 'Retargeting strategies and conversion rate optimization (CRO)', 'Statistical A/B testing for ad designs', 'Calculating customer acquisition cost (CAC) and lifetime value (LTV)']
      },
      {
        week: 'Week 4',
        title: 'Marketing Automation & Growth Loops',
        topics: ['Setting up automated email sequences', 'Chatbot lead qualification setups', 'Viral referral mechanisms and loop architectures', 'Attribution modeling and marketing data dashboards']
      }
    ]
  },
  {
    id: 'graphic-design-mastery',
    title: 'Professional Graphic Design & Branding',
    description: 'Master visual storytelling, vector illustrations, brand identity guidelines, and high-fidelity layouts using Figma, Adobe Illustrator, and Photoshop.',
    category: 'Design',
    rating: 4.8,
    reviewsCount: 1120,
    price: 399,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800&h=480',
    isBestseller: true,
    duration: '8 Weeks',
    lectures: 40,
    level: 'Beginner',
    instructor: {
      name: 'Liam Sterling',
      role: 'Senior Brand Designer at Airbnb',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=120&h=120',
      bio: 'Liam is a renowned brand designer whose visual designs have defined leading web platforms. He focuses on fundamental design principles and efficient vector tools.'
    },
    syllabus: [
      {
        week: 'Week 1',
        title: 'Visual Arts Foundations & Typography',
        topics: ['Fundamental rules of composition and balance', 'Advanced color theory and palette building', 'Type hierarchy, pairing, and kerning rules', 'Sourcing, matching, and licensing visual fonts']
      },
      {
        week: 'Week 2',
        title: 'UI/UX Design Systems in Figma',
        topics: ['Creating responsive frames and auto-layout structures', 'Component libraries, variants, and interactive states', 'Building comprehensive interface design systems', 'Prototyping realistic user flow animations']
      },
      {
        week: 'Week 3',
        title: 'Vector Design & Custom Iconography (Illustrator)',
        topics: ['Pen tool mastery and shape builder operations', 'Designing mathematical custom logo geometries', 'Exporting clean web-friendly vector SVGs', 'Creating high-impact custom infographics']
      },
      {
        week: 'Week 4',
        title: 'Brand Identity Strategy & Design Handoff',
        topics: ['Writing complete brand identity guideline books', 'Producing high-fidelity 3D product mockups', 'Prepping raster files for digital vs physical print', 'Collaborative design handoff systems with dev teams']
      }
    ]
  },
  {
    id: 'agentic-ai-orchestration',
    title: 'Generative & Agentic AI Orchestration',
    description: 'Build fully autonomous AI systems. Connect Claude, Gemini, n8n, Replit, AI Studio, Gamma, and Flow to orchestrate zero-code enterprise agents.',
    category: 'AI',
    rating: 5.0,
    reviewsCount: 2150,
    price: 799,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=480',
    isTrending: true,
    duration: '12 Weeks',
    lectures: 64,
    level: 'Advanced',
    instructor: {
      name: 'Dr. Michael Vance',
      role: 'Principal AI Engineer at Anthropic',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120',
      bio: 'Dr. Vance leads Agentic Workflow research. He is dedicated to teaching developers how to combine LLM reasoning with automated tool orchestration.'
    },
    syllabus: [
      {
        week: 'Week 1',
        title: 'API Fundamentals & Google AI Studio',
        topics: ['API keys, rate limits, and model temperatures', 'Configuring system prompts inside AI Studio', 'JSON schema output enforcement with Gemini and Claude', 'Function calling and external tool definitions']
      },
      {
        week: 'Week 2',
        title: 'Autonomous Automation with n8n & Flow',
        topics: ['Setting up n8n self-hosted docker nodes', 'Designing conditional routing and error-handling chains', 'Connecting Webhooks, Google Sheets, Slack, and Pinecone', 'Building recursive human-in-the-loop workflows']
      },
      {
        week: 'Week 3',
        title: 'Full-Stack Rapid Prototyping (Replit & Build)',
        topics: ['Scaffolding frontend interfaces dynamically on Replit', 'Securing API proxy servers and storing secrets', 'Deploying static SPAs to serverless edges', 'Iterative system prototyping with AI Studio Build']
      },
      {
        week: 'Week 4',
        title: 'Multi-Agent Networks & LLM Orchestrators',
        topics: ['Orchestrating supervisor-agent and peer-agent structures', 'Building persistent contextual agentic memory systems', 'Generating client decks and reporting live through Gamma', 'Evaluating agent safety, latency, and token economics']
      }
    ]
  }
];
