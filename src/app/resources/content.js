import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Braya",
  lastName: "Cheat",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Phnom_Penh", // Use the IANA time zone identifier for Phnom Penh, Cambodia
  languages: ["English", "Khmer"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, music, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};
import { FaFacebook, FaTelegram, FaYoutube, FaGithub, FaGoogle } from "react-icons/fa6";
const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: <FaGithub/>,
    link: "https://github.com/BrayaCheat",
  },
  {
    name: "Youtube",
    icon: <FaYoutube/>,
    link: "https://www.youtube.com/@brayacheat7117",
  },
  {
    name: "Email",
    icon: <FaGoogle/>,
    link: "mailto:prayacheat@gmail.com",
  },
  {
    name: "Telegram",
    icon: <FaTelegram/>,
    link: "https://t.me/brayacheat19",
  },
  {
    name: "Facebook",
    icon: <FaFacebook/>,
    link: "https://www.facebook.com/share/12L8Xoengpt/?mibextid=wwXIfr",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hello, I'm Braya Cheat ✨</>,
  subline: (
    <>
      A Software Developer based in Phnom Penh, Cambodia. Passionate about building innovative solutions and leveraging technology to solve real-world problems.
      {/* <InlineCode>Phnom Penh</InlineCode>, */}
    </>
  ),
};

const about = {
  label: "Information",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">Introduction:</h3>
        {/* Roles */}
        <ul className="text-[16px]">
          <li><strong>Full Name:</strong> ChanChaoBraya Cheat</li>
          <li><strong>Role:</strong> Software Developer</li>
          <li><strong>By Day:</strong> Building fullstack applications with modern web technologies</li>
          <li><strong>By Night:</strong> Exploring music production with a focus on the Vinahouse genre</li>
          <li><strong>Location:</strong> Phnom Penh, Cambodia — driven by a love for technology and creative expression</li>
        </ul>

        <br/>

        <div className="prose dark:prose-invert max-w-none">

          {/* Tech Stack */}
          {/* <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Technical Skills:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Proficient in Java with hands-on experience using Spring Boot for building scalable backend services</li>
              <li>Experienced in modern JavaScript frameworks, especially Vue.js and Nuxt.js for building dynamic UIs</li>
              <li>Skilled in designing and consuming RESTful APIs with proper authentication and error handling</li>
              <li>Comfortable working with relational databases like MySQL and integrating them into backend systems</li>
              <li>Well-versed in building full-stack applications using a Java backend and JavaScript frontend stack</li>
            </ul>
          </div> */}

          {/* Music Skills */}
          {/* <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Creative Pursuits:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Currently exploring music production with a focus on the Vinahouse genre</li>
              <li>Experimenting with melodies, rhythms, and drops using beginner-friendly audio tools and plugins</li>
              <li>Enjoy blending creative sound design with technical curiosity to improve my skills over time</li>
            </ul>
          </div> */}

          {/* Collab CTA */}
          <div className="mt-8 mb-12">
            <h3 className="text-xl font-semibold mb-4">Open to opportunities involving:</h3>
            <ul className="flex flex-wrap gap-3">
              <li className="inline-flex items-center gap-1 bg-red-100 dark:bg-red-900/50 px-3 py-2 rounded-md text-sm">
                Building reliable and scalable web applications
              </li>
              <li className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/50 px-3 py-2 rounded-md text-sm">
                Collaborating on creative and technical projects
              </li>
              <li className="inline-flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/50 px-3 py-2 rounded-md text-sm">
                Contributing to meaningful, team-driven environments
              </li>
            </ul>
          </div>

          {/* Personal Quote */}
          <blockquote className="mt-10 mb-6 italic border-l-4 border-pink-500 dark:border-pink-400 pl-6 py-2 text-lg">
            "I strive to write code that is both functional and thoughtful,
            and to create experiences that connect people — whether through technology or music."
          </blockquote>
        </div>
      </div>
    )
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "VTECH",
        timeframe: "2024 – Present",
        role: "Software Developer",
        achievements: [
          <>
            Developed a high-performance online gaming platform, improving UI responsiveness and reducing user latency by 50%. Optimized graphics for lower-end devices by minimizing resource-intensive effects, ensuring smooth performance on a wider range of hardware.
          </>,
          <>
            Built and fine-tuned interactive game interfaces (e.g., Baccarat), ensuring smooth gameplay, real-time feedback, and seamless user experience.
          </>,
          <>
            Actively collaborating with backend teams to integrate APIs and WebSocket events, while independently exploring Spring Boot through personal projects and tutorials.
          </>,
        ],
        images: [],
      },
      {
        company: "Advanced MSP",
        timeframe: "2023 – 2024",
        role: "Software Developer (Internship)",
        achievements: [
          <>
            Gained hands-on experience in API integration within the ERPNext environment, contributing to the system's standardization and streamlining workflows.
          </>,
          <>
            Collaborated with cross-functional teams to support the product launch, assisting with ERPNext workflows and helping document API processes for seamless integration.
          </>,
          <>
            Developed a deeper understanding of API documentation, ensuring clear and concise communication of API endpoints for internal and external teams.
          </>,
        ],
        images: [],
      },
      // {
      //   company: "Eric Kayser",
      //   timeframe: "2021 – 2022",
      //   role: "Barista",
      //   achievements: [
      //     <>
      //       Demonstrated exceptional customer service skills in a high-volume setting, providing an efficient and positive experience for customers.
      //     </>,
      //     <>
      //       Adapted quickly to new procedures and technologies, taking initiative to streamline processes and ensure smooth operations during peak hours.
      //     </>,
      //     <>
      //       Maintained a professional and friendly demeanor, effectively handling customer inquiries and building rapport in a fast-paced environment.
      //     </>,
      //   ],
      //   images: [],
      // },
      {
        company: "MN Juicy",
        timeframe: "2024 - 2025",
        role: "Software Developer (Freelance)",
        achievements: [
          // <>
          //   <a href="https://mn-juicy.vercel.app/menu" target="_blank" rel="noopener noreferrer">
          //     View live demo
          //   </a>
          // </>,
          <>
            Led the design and development of a mobile-first digital drink ordering platform using Nuxt.js and Tailwind CSS, providing a fast, modern, and intuitive user experience.
          </>,
          <>
            Built and integrated a real-time Telegram notification system that instantly alerts staff of new orders, significantly reducing response time and improving operational flow.
          </>,
          <>
            Implemented an interactive location picker using Leaflet.js, allowing customers to easily drop a pin for precise delivery — capturing only essential details: name, phone number, and location.
          </>,
          <>
            Streamlined user and staff experiences with features like dynamic category filtering, product management, and QR code access for effortless mobile ordering.
          </>,
          <>
            Deployed on Vercel to ensure optimized performance, fast global delivery, and robust uptime with modern cloud deployment practices.
          </>
        ],
        images: []
      },
      {
        company: "VORTEX AI CHATBOT",
        timeframe: "2025 - Present",
        role: "Software Developer (Side Project)",
        achievements: [
          // <>
          //   <a href="https://braya-chatbot.vercel.app" target="_blank" rel="noopener noreferrer">
          //     View live demo
          //   </a>
          // </>,
          <>
            Developed an AI-powered chatbot using Nuxt 3 and integrated with the Gemini API to deliver fast, responsive, and intelligent conversations that enhance user interaction.
          </>,
          <>
            Designed and implemented an intuitive user interface that facilitates easy communication, resulting in a seamless chat experience for users across devices.
          </>,
          <>
            Focused on optimizing the chatbot's performance, ensuring smooth, real-time processing of messages and responses through effective API calls and intelligent state management.
          </>,
          <>
            Leveraged modern technologies like Nuxt 3, Tailwind CSS, and the Gemini API to create an interactive platform capable of handling dynamic user queries and providing accurate responses.
          </>,
          <>
            Deployed the chatbot on Vercel to guarantee fast loading times, scalability, and reliable performance across various regions and devices.
          </>
        ],
        images: []
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educations",
    institutions: [
      {
        name: "Bak Touk High School",
        description: (
          <>
            Completed primary and secondary education with Bac II qualification and strong academic performance.
          </>
        ),
      },
      {
        name: "Royal University of Phnom Penh (RUPP)",
        description: (
          <>
            Bachelor’s Degree in Computer Science — focused on software development and system architecture.
            Currently pursuing a Master’s Degree to deepen expertise in advanced technologies.
          </>
        ),
      },
      {
        name: "Australia Centre for Education (ACE)",
        description: (
          <>
            Completed IELTS preparation program with high proficiency in academic and professional English communication.
          </>
        ),
      },
    ],
  },
  technical:
  {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>JavaScript, Java, SQL</>,
        images: [],
      },
      {
        title: "Frontend Technologies",
        description: <>VueJS, NuxtJS, ReactJS, NextJS</>,
        images: [],
      },
      {
        title: "Backend Technologies",
        description: <>NodeJS, ExpressJS, Supabase, Spring Boot</>,
        images: [],
      },
      {
        title: "Other Skills & Tools",
        description: <>Git, GitHub, MySQL, MongoDB, DBeaver, Postman, Vercel, Render, Railway, Docker, Prisma</>,
        images: [],
      },
    ]
  }
};

const blog = {
  label: "Blog",
  title: "My Blogs",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My Projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
