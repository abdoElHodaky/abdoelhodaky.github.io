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
          title:'Enterprise Gateway API & Service Mesh Platform',
          description:'Complete enterprise-grade Kubernetes Gateway API and Service Mesh infrastructure delivering 99.99% uptime, 30% cost savings, and 50% faster deployments across multiple cloud providers with advanced security, intelligent monitoring, and full automation.\
            Transform your infrastructure operations with a world-class, enterprise-ready platform '
        },
        {
          title:' Openshift gitops',
          description:"🚀 Production-ready OpenShift GitOps implementation using FluxCD with enterprise-grade security (98.7/100 score), featuring a complete ecommerce stack (React/Node.js/PostgreSQL) across multi-environment deployments, zero-trust networking, comprehensive vulnerability scanning (Trivy/Checkov/TruffleHog), and automated CI/CD pipelines ."
        },{
          title: 'Data Analytics System',
          description: 'Enterprise Rails CQRS analytics platform: 60M+ ops/hour, multi-DSS integration, 100K+ users, production-optimized.'
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
         {
          title: ' Sikka ',
          description: 'production-ready ride-hailing platform for Sudan featuring intelligent driver matching,\
            real-time GPS tracking, local payment integration (EBS/CyberPay), multi-cloud cost optimization, PostgreSQL geospatial queries, Redis caching, Kubernetes auto-scaling,\
            WebSocket live updates, emergency safety protocols, dynamic surge pricing, business intelligence dashboards, and comprehensive security—built with NestJS/TypeScript and scalable from hundreds to thousands of concurrent users'
            
        },
      ],
    },
  },
  seo: { title: 'Portfolio of ME', description: 'protfolio', imageURL: 'data:image/png;base64,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' },
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
      'About/AbdElrhman_Elhodaky___BE__Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
      to: 'july 2025 ',
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
