module.exports = {
  siteTitle: 'Ankit Rana | Software Engineer',
  siteDescription:
    'Ankit Rana is a software engineer based in Santa Cruz, CA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Ankit Rana, Ankit, Rana, ankitrana1709, software engineer, MEMS fabrication, Microfluidics engineer, Process Engineer, R&D Engineer, Electrical Engineer, front-end engineer, web developer, javascript, cincinnati',
  siteUrl: 'https://ranaankit.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ankit Rana',
  location: 'Santa Cruz, CA',
  email: 'ranaankit@gmail.com',
  github: 'https://github.com/anartikna',
  twitterHandle: '@ankitrana_',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/anartikna',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
