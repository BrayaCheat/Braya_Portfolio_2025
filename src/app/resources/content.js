import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Braya",
  lastName: "Cheat",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer & Music Producer",
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

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/BrayaCheat",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@brayacheat7117",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:prayacheat@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Yoo, It's Me Braya Cheat✌🏻</>,
  subline: (
    <>
      Software Developer & Music Producer Based In Phnom Penh.
      {/* <InlineCode>Phnom Penh</InlineCode>, */}
    </>
  ),
};

const about = {
  label: "About",
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
      <>
        Braya is a software developer and music producer based in Phnom Penh,
        passionate about building scalable applications and crafting immersive
        soundscapes. With expertise in frontend, backend development, and the
        fusion of design, technology, and music, he creates seamless digital
        experiences that leave a lasting impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "VTECH",
        timeframe: "2024 - Present",
        role: "Software Developer",
        achievements: [
          <>
            Developed and optimized a high-performance online casino platform,
            enhancing gameplay experience and reducing latency by 50%.
          </>,
          <>
            Engineered and fine-tuned the Baccarat game logic, ensuring fair
            play, seamless user interaction, and improved real-time
            responsiveness.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Advanced MSP",
        timeframe: "2023 - 2024",
        role: "API Analyst",
        achievements: [
          <>
            Learned and applied API integration principles within the ERPNext
            environment, contributing to a standardized system.
          </>,
          <>
            Supported a cross-functional team in a product launch, utilizing
            ERPNext for relevant workflows and reporting.
          </>,
        ],
        images: [],
      },
      {
        company: "Eric Kayser",
        timeframe: "2021 - 2022",
        role: "Barista",
        achievements: [
          <>
            Possesses strong customer service skills and excels in fast-paced
            environments. Adaptable and quick to learn new procedures, with a
            demonstrated ability to take initiative.
          </>,
          <>
            Maintains a positive and professional attitude in high-volume
            customer service settings. Quickly learns new skills and procedures,
            and proactively addresses customer needs.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educations",
    institutions: [
      {
        name: "BakTouk High School",
        description: (
          <>
            Completed my primary and secondary education at Baktouk High School,
            culminating in the Bac II qualification.
          </>
        ),
      },
      {
        name: "Royal University of Phnom Penh",
        description: (
          <>
            Completed a Bachelor's degree in Computer Science, specializing in
            software development and system architecture. Currently pursuing in
            a Master's degree program in Computer Science.
          </>
        ),
      },
      {
        name: "Australia Centre of Education",
        description: (
          <>
            Completed an IELTS preparation program, achieving enhanced
            proficiency in academic and professional English communication.
          </>
        ),
      },
      {
        name: "Music Academy",
        description: (
          <>
            Electronic dance music creator, focusing on the complete production
            process from arrangement and mixing to mastering, while also
            developing strategies for audience engagement within the vinahouse
            music scene.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Javascript, Java, SQL.</>,
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Frontend Frameworks",
        description: <>VueJS, NuxtJS, ReactJS, NextJS (Basic Knowledge).</>,
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Backend Frameworks",
        description: (
          <>NodeJS, ExpresJS, Supabase, Springboot (Basic Knowledge).</>
        ),
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Other Skills & Tools",
        description: (
          <>
            FL Studio, Git, Github, MYSQL, MongoDB, DBeaver, Postman, PrismaORM,Vercel, Render, Railway.
            Docker (Basic Knowledge).
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
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
