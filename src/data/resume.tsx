import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shreyank Jadiya",
  initials: "SJ",
  url: "https://shreyankjadiya.com",
  location: "Toronto,ON",
  locationLink: "https://www.google.com/maps/place/Toronto,+ON,+Canada/@43.7182412,-79.3780581,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
  description:
    "Leader | Full Stack Developer | Shopify Expert",
  summary:
    "Mission-Driven Full-stack Web Developer with a passion for thoughtful UI Design, collaboration, and refactoring of code. Started my web development journey while pursuing my masters degree at university. I am a self taught developer who learned from own experiences and mistakes. I started my joureny as a contractor in web development and after 4 years of contracting and constant learning finally ended up in a dream company Umbra. Umbra boosted my career in a way where i learned a lot about how the development and testing of the websites work. I have successfully managed more than 10 shopify plus storefronts while working at a umbra in parallel. I used technology stacks such as Shopify's liquid, NodeJS, ReactJS, Nextjs, Remix,etc with SQL Databases. After 3 Solid years at umbra, I changed my career to be in a more challenging role at Greenworks Tools Where my primary task was to completely revamp and integrate the old fashioned shopify store to brand new conervsion optimized website. Currently building systems that supports various use cases at Greenworks Tools. Also, I have started my own digital agency in 2022 to help clients to scale and grow and to help with their development needs. Owner of shopify development agency at, [The SJ Development](https://www.thesjdevelopment.com)",
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
        url: "www.linkedin.com/in/shreyank-jadiya",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
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
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
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
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
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
      video: "https://cdn.llm.report/openai-demo.mp4",
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
      video: "https://cdn.llm.report/openai-demo.mp4",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
