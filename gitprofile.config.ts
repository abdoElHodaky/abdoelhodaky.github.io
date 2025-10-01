// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'abdoElHodaky', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['abdoElHodaky/abdoElHodaky',
                     'abdoElHodaky/tradSys',
                     'abdoElHodaky/About',
                     'abdoElHodaky/abdoelhodaky.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['abdoElHodaky/Devops','abdoElHodaky/Fluxcd'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'recent Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title:' Openshift gitops',
          description:"🚀 Enterprise GitOps Solution: Production-ready OpenShift implementation using FluxCD with exceptional security standards (98.7/100 score), orchestrating 119 validated YAML configurations across development, staging, and production environments with zero-trust networking and custom Security Context Constraints.\n\n🏗️ Full-Stack Application Architecture: Comprehensive ecommerce platform featuring React frontend, Node.js backend, and PostgreSQL database, enhanced with automated CI/CD pipelines, advanced Kubernetes security patterns, and integrated vulnerability scanning through Trivy, Checkov, and TruffleHog.\n\n 🎯 Industry-Standard Implementation: Showcases enterprise-grade container orchestration with automated deployment scripts, local development support via OpenShift CRC, and serves as a definitive reference for secure, scalable Kubernetes deployments in mission-critical environments."
        },
        {
          title: 'Data Analytics System',
          description:
            'build Data Analytics platform via RubyOnRails, JsonRPC'
        },
        {
          title: 'kubernetes deployment',
          description:
            'Deploy project via terraform and GitHub actions to Kuberntes cluster ',
         // imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          //link: 'https://example.com',
        },
        {
          title: 'Fluxcd kustimization',
          description:
            'Kustomization for git repository via fluxcd ,kind, cricleci',
         // imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //  link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of ME', description: 'protfolio', imageURL: 'https://placehold.co/40' },
  social: {
    linkedin: 'abdelrhman-elhodaky-9521bb220',
    //x: 'arif_szn',
   // mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: 'Abdo26',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
   // website: 'https://www.arifszn.com',
    phone: '+201141894373',
    email: 'abdo_elhodaky@outlook.com',
  },
  resume: {
    fileUrl:
      'About/Abd_Elrhman_Elhodaky__BE__Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP,Laravel',
    'Go',
    'ExpressJs/NestJs',
    'MySQL/PostgreSql',
    'MongoDB',
    'Git','Docker','Terraform',
    'Kubernetes/Kind','OpenShift',
    'CircleCi,Fluxcd'
  ],
  experiences: [
    {
      company: 'freelance',
      position: 'Backend Developer',
      from: 'april 2023',
      to: 'Feb 2025 ',
      //companyLink: 'https://example.com',
    },
    {
      company: 'Gds',
      position: 'FS Dec',
      from: 'Nov 2022',
      to: 'Jan 2023',
     // companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Ruby',
      //body: 'Lorem ipsum dolor sit amet',
      year: 'April 2022 ',
     // link: 'https://example.com',
    },
    {
      name: 'Php',
      //body: 'Lorem ipsum dolor sit amet',
      year: 'April 2022',
     // link: 'https://example.com',
    },
    {
      name: 'NodeJs',
      //body: 'Lorem ipsum dolor sit amet',
      year: 'April 2022',
     // link: 'https://example.com',
    },
    {
      name: 'AWS',
      //body: 'Lorem ipsum dolor sit amet',
      year: 'June 2025',
     // link: 'https://example.com',
    },
    {
      name: 'Kubernetes',
      //body: 'Lorem ipsum dolor sit amet',
      year: 'June 2025',
     // link: 'https://example.com',
    },
    {
      name: 'Golang' ,
      year: 'August 2025'
    }
    
  ],
  educations: [
    {
      institution: 'Mansoura university',
      degree: 'Bachelor of Information systems',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
   /* {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
