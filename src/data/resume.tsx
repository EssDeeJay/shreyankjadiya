import { Icons } from "@/components/icons";
import { SITE } from "@/lib/site";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: SITE.name,
  initials: "SJ",
  url: SITE.url,
  location: SITE.location,
  locationLink: "https://www.google.com/maps/place/Toronto,+ON,+Canada/@43.7182412,-79.3780581,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
  description: SITE.profileDescription,
  summary:
    "I am a mission-driven full-stack developer focused on thoughtful UI, maintainable code, and high-performing ecommerce experiences. Since beginning my web development career in Toronto, I have built and managed Shopify and Shopify Plus storefronts using Liquid, Node.js, React, Next.js, Remix, and SQL.\n\nMy work includes storefront redesigns, custom Shopify apps, B2B experiences, and integrations with systems such as Salesforce and SAP. I also run [The SJ Development](https://www.thesjdevelopment.com), a Shopify development agency that helps growing brands improve and scale their digital commerce.",
  avatarUrl: "/me.jpg",
  skills: [
    "Shopify",
    "Shopify Plus",
    "Liquid",
    "REST",
    "React",
    "Next.js",
    "Typescript",
    "Tailwind",
    "Node.js",
    "Python",
    "Remix",
    "Postgres",
    "Docker",
    "SQL",
    "Javascript",
    "HTML",
    "CSS",
    "Jira",
    "Git/Github",
    "AWS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shreyankjadiya120@gmail.com",
    tel: "+12269615077",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EssDeeJay",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreyank-jadiya",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shreyankjadiya",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shreyankjadiya120@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Greenworks Tools",
      href: "https://greenworkstools.ca/",
      badges: [],
      location: "Holland Landing, ON",
      title: "Full Stack Developer",
      logoUrl: "/greenworks.png",
      start: "Nov 2023",
      end: "Present",
      description:
        "Completely Revamped Shopify Plus website with modern design, features and performance.Integrated Shopify with the business Systems such as Salesforce, SAP to make sure the data is synced with all these systems. Worked along side system architects to make sure the connection of all systems are working fine all the time. Currently working to develop the commercial website on shopify plus. Also, developed private shopify apps to capture custom data at the front end using frameworks such as Remix,React,Nextjs, SQL,Nodejs,etc.",
    },
    {
      company: "Umbra Ltd.",
      badges: [],
      href: "https://ca.umbra.com/",
      location: "Toronto,ON",
      title: "Web Developer - Shopify",
      logoUrl: "/umbra.png",
      start: "Aug 2020",
      end: "Nov 2023",
      description:
        "Built, maintained, and optimized Shopify Plus storefronts across Umbra's international ecommerce portfolio. Developed custom themes and features, improved storefront performance and conversion experiences, and supported reliable development and testing workflows.",
    },
    {
      company: "The SJ Development",
      href: "https://www.thesjdevelopment.com/",
      badges: [],
      location: "Toronto,CA",
      title: "Owner/Lead Developer",
      logoUrl: "/thesj.png",
      start: "Feb 2023",
      end: "Present",
      description:
        "Started my own web development venture to help the clients grow in the digital world by building the best digital experiences in ecommerce and all other softwares.The SJ Development helps small clients grow and big clients scale on their shopify websites.",
    },
    {
      company: "Village Juicery",
      href: "https://www.villagejuicery.com/",
      badges: [],
      location: "Toronto,CA",
      title: "Web Developer",
      logoUrl: "/vj.png",
      start: "July 2019",
      end: "Aug 2020",
      description:
        "Completely redesigned the old shopify theme with a new mockup using advanced tools like adobe XD,photoshop. Worked with designers to make sure the mockup matches with the brand values. Completely developed the site as per mockup. Also, worked with the team to develop custom modules such as shipping availability and store pickup locator on the collection pages. Maintained the shopify theme and code over a year and also did the refactor to improve the image sizes and other web development best practices to ramp up the speed.",
    },
  ],
  education: [
    {
      school: "University of Windsor",
      href: "https://uwindsor.ca",
      degree: "Masters degree (M.eng) in Electrical & Computer",
      logoUrl: "/uwindsor.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Advanced Web Developer Bootcamp - Udemy",
      href: "https://www.udemy.com/",
      degree: "Certificate Course",
      logoUrl: "/udemy.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "Web Developer Bootcamp - Udemy",
      href: "https://www.udemy.com/",
      degree: "Certificate Course",
      logoUrl: "/udemy.png",
      start: "2018",
      end: "2019",
    },
    {
      school: "Babaria Institute of Technology (BITS)",
      href: "https://bitstechnology.org/",
      degree: "Bachelor of Electrical Engineering (B.E,Electrical)",
      logoUrl: "/babaria.png",
      start: "2012",
      end: "2016",
    }
  ],
  projects: [
    {
      title: "Square Flower",
      href: "https://www.squareflower.com/",
      dates: "",
      active: true,
      description:
        "Completely revamped Square Flower's website from scratch using a fresh Shopify theme, rebuilding the storefront for the organic bedding brand.",
      technologies: ["Shopify", "Theme Development", "Storefront Redesign"],
      links: [
        {
          type: "Website",
          href: "https://www.squareflower.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/squareflower_project.jpg",
      video: "/squareflower_project.mp4",
    },
    {
      title: "Maison Bouquet",
      href: "https://maisonbouquet.ca/",
      dates: "",
      active: true,
      description:
        "Built Maison Bouquet's storefront from scratch using a Shopify theme, with custom pickup and local delivery functionality alongside bouquet subscriptions.",
      technologies: ["Shopify", "Theme Development", "Pickup & Local Delivery", "Subscriptions"],
      links: [
        {
          type: "Website",
          href: "https://maisonbouquet.ca/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/maisonbouquet_project.jpg",
      video: "/maisonbouquet_project.mp4",
    },
    {
      title: "Harlow Properties",
      href: "https://www.harlowproperties.ca/",
      dates: "",
      active: true,
      description:
        "Extended Harlow Properties' Webflow website with a live rental availability CMS and a dedicated availability page, helping visitors browse current apartment listings.",
      technologies: ["Webflow", "CMS", "Live Rental Availability"],
      links: [
        {
          type: "Website",
          href: "https://www.harlowproperties.ca/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Live Availability",
          href: "https://www.harlowproperties.ca/available-rentals",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/harlowproperties_project.jpg",
      video: "/harlowproperties_project.mp4",
    },
    {
      title: "Greenworks Commercial",
      href: "https://www.greenworkscommercial.ca/",
      dates: "Jul 2024 - Oct 2024",
      active: true,
      description:
        "With the release of a retailer site, my next big project at greenworks was to develop the commercial site from scratch and make sure that it follows the similar standards as retailer website. This website is developed by keeping performance in mind.",
      technologies: [
        "Shopify",
        "Liquid",
        "Remix",
        "Prisma",
        "Javascript",
        "SQL",
        "Web Components"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.greenworkscommercial.ca/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/commercial_project.mp4",
    },
    {
      title: "Greenworks Canada",
      href: "https://greenworkstools.ca/",
      dates: "Nov 2023 - Feb 2024",
      active: true,
      description:
        "Completely redesigned, revamped and boosted with the latest functionalities that exist in the web space today. The good thing with this website is there are no third party apps/plugins to used to develop any of its modules",
      technologies: [
        "Shopify",
        "Liquid",
        "Remix",
        "Prisma",
        "Javascript",
        "SQL",
        "Web Components"
      ],
      links: [
        {
          type: "Website",
          href: "https://greenworkstools.ca/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/greenworks_project.gif",
      video: "",
    },
    {
      title: "Umbra",
      href: "https://ca.umbra.com/",
      dates: "Jul 2023 - Nov 2023",
      active: true,
      description:
        "After having two years at umbra, my primary goal was to revamp the site to boost the performance of the site and the conversion rate to improve the sales across the site. This site is designed to achieve this.",
      technologies: [
        "Shopify",
        "Liquid",
        "Remix",
        "Prisma",
        "Javascript",
        "SQL",
        "Web Components"
      ],
      links: [
        {
          type: "Website",
          href: "https://ca.umbra.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/umbra_project.mp4",
    },
    {
      title: "Umbra B2B",
      href: "https://b2b-ca.umbra.com/",
      dates: "Mar 2024 - June 2024",
      active: true,
      description:
        "All the custom B2B functionalities built on top of the dawn theme with latest shopify B2B updates. Exclusively developed for umbra.",
      technologies: [
        "Shopify",
        "Liquid",
        "Javascript",
        "Web Components"
      ],
      links: [
        {
          type: "Website",
          href: "https://b2b-ca.umbra.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/umbra-b2b-project.mp4",
    },
    {
      title: "Gemme Moi",
      href: "https://gemmemoi.ca/",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "The side project of working with the new startup brand has been excellent. The website is built upon the existing theme from shopify store and enhanced to have extra features that supports the customers and boosts the sales.",
      technologies: [
        "Shopify",
        "Liquid",
        "Javascript",
        "Web Components"
      ],
      links: [
        {
          type: "Website",
          href: "https://gemmemoi.ca/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/gemmemoi_project.mp4",
    },
    {
      title: "Vraj & Co.",
      href: "https://vraj-co.myshopify.com/",
      dates: "May 2022 - Nov 2022",
      active: true,
      description:
        "An excellent spices retailer from new zealand, a completely custom made theme that is developed from the base dawn theme. Designed from mockups to the reality.",
      technologies: [
        "Shopify",
        "Liquid",
        "Javascript",
        "Web Components"
      ],
      links: [
        {
          type: "Website",
          href: "https://vraj-co.myshopify.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/vraj_project.mp4",
    },
  ],
  hackathons: [
    {
      title: "Shopify Features App - RedRuby",
      dates: "August 15,2024 - Present",
      location: "Toronto, Ontario",
      description:
        "Developing a shopify application that integrates with MongoDB as database and uses prisma for schema. Remix is the full stack framework the app is built using.",
      image:
        "/red_ruby.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/EssDeeJay/shopify-features-app",
        },
      ],
    },
    {
      title: "Radiant Shopify Theme",
      dates: "May 2024 - Present",
      location: "Toronto, Ontario",
      description:
        "Developing a performance centric custom shopify theme for blazing fast ecommerce storefronts. Using code splitting techniques and keeping the JS and CSS well organized to make sure the site does not block rendering. Using advanced web development techniques to create latest functional ecommerce components with the best user experience.",
      image:
        "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/EssDeeJay/radiant-theme-shopify",
        },
      ],
    },
    {
      title: "Shopify Checkout App",
      dates: "January 2024 - Present",
      location: "New Market,Ontario",
      description:
        "Developed shopify application for checkout extensibility supporting extra functions and features such as adding custom banners, custom checkout blocking rules such as PO blocker.",
      image:
        "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/EssDeeJay/shopify-checkout-test-app",
        },
      ],
    },
    {
      title: "Nextjs Shopify Headless Storefront",
      dates: "Sept 2023 - December 2023",
      location: "Toronto, Ontario",
      description:
        "Created a headless storefront using Nextjs,TailwindCSS,Shopify GraphQL APIs. This storefront is extremely performant and provides the best user expereince ever with the speed scores of above 80 for both desktop and mobile. Created Product page, advanced search pages and dynamic cart on this storefront as well. ",
      icon: "public",
      image:
        "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/EssDeeJay/shopify-next-headless",
        },
      ],
    },
    {
      title: "Chatme App",
      dates: "Feb 2018 - Apr 2018",
      location: "Toronto, Ontario",
      description:
        "Developed a chat application similar to twitter as part of the coursework while learning the web development. This is a nodejs app and has its own server. It uses google's Firebase for database. The front end is created using react,react-router,redux etc. This app has the functionality where user can make the profiles, like and comment on the posts etc.",
      image:
        "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/EssDeeJay/chatmeapp",
        },
      ],
    },    
    {
      title: "Country Guessing React App",
      dates: "October 13th - 15th, 2017",
      location: "Windsor, Ontario",
      description:
        "A react based front end app to guess the country based on its flag. It provides you with the different options to choose from and gives you the correct answer on the selection.",
      image:
        "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/EssDeeJay/country_guessing_reactapp",
        },
      ],
    },
  ],
} as const;
