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

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/BrayaCheat",
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
      Software Developer Based In Phnom Penh.
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
      <div className="space-y-6 text-neutral-800 dark:text-neutral-200">

        {/* Header */}
        <div className="mb-6">
          <p className="text-2xl font-bold">
            <span className="wave">👋</span> Yo, I'm Braya!
            <span className="text-sm ml-2 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded-full">Meme Stack Engineer</span>
          </p>
        </div>

        {/* Roles */}
        <div className="flex gap-4 mb-8">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            👨‍💻 By Day: Meme Fullstack
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🎧 By Night: Bass Memelord
          </span>
        </div>

        {/* Location */}
        <p className="text-lg mb-8">
          📍 Phnom Penh | WiFi: <code className="text-green-600 dark:text-green-400">5 bars</code> | 808s: <code className="text-red-600 dark:text-red-400">11/10</code>
        </p>

        <div className="prose dark:prose-invert max-w-none">
          {/* Meme Stack Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Meme Stack Arsenal:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><code>useMemo()</code> but mostly for memes</li>
              <li>State management with <code>spaghettiReducer</code></li>
              <li>APIs that return <code>418 I'm a teapot</code></li>
              <li>CSS that works <em>(by accident)</em></li>
            </ul>
          </div>

          {/* Music Meme Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Audio Meme Tactics:</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Drops so filthy they need a <code>git clean</code></li>
              <li>Naming tracks like <code>dont_delete_this_one_v69.wav</code></li>
              <li>Using <code>useSound()</code> for *everything*</li>
            </ul>
          </div>

          {/* Collab CTA */}
          <div className="mt-8 mb-12">
            <p className="font-medium text-lg mb-4">Hit me up for:</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1 bg-red-100 dark:bg-red-900/50 px-3 py-2 rounded-md text-sm">
                🔥 Code that compiles (60% of the time)
              </span>
              <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/50 px-3 py-2 rounded-md text-sm">
                🎵 Beats that break speakers (100% of the time)
              </span>
              <span className="inline-flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/50 px-3 py-2 rounded-md text-sm">
                🤝 Dad jokes about <code>undefined</code>
              </span>
            </div>
          </div>

          {/* Meme Quote */}
          <blockquote className="mt-10 mb-6 italic border-l-4 border-pink-500 dark:border-pink-400 pl-6 py-2 text-lg">
            "If my code runs, it's not stupid.<br />
            If my beats slap, it's not luck.<br />
            <span className="text-sm">(Disclaimer: Might be both)</span>"
            <span className="ml-2">🚀🔥</span>
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
        role: "API Analyst (Internship)",
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
      }
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
        title: "Frontend Technologies",
        description: <>VueJS, NuxtJS, ReactJS, NextJS.</>,
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
        title: "Backend Technologies",
        description: (
          <>NodeJS, ExpressJS, Supabase, Springboot.</>
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
            Git, Github, MYSQL, MongoDB, DBeaver, Postman,
            Prisma,Vercel, Render, Railway, Docker.
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
