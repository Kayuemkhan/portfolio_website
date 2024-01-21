const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Kayuemkhan.github.io/abdulportfolio',
  title: '/root',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abdul Kayuem',
  role: 'Mobile Engineer',
  description:
    'I’m a mobile app developer with more than three years of experience in the software industry, specializing in Java, Kotlin, Android, and Flutter. Over the years, I have developed complex systems for POS, Telemedicine, WebRTC, and E-commerce applications. I love building innovative and impactful software that improves the lives of a vast number of people',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/abdulkayuem/',
    github: 'https://github.com/Kayuemkhan',
  },
}

const projects = [
  {
    name: 'Picky - Online Shopping BD',
    description:
      'Picky is an e-commerce app offers a convenient and user-friendly shopping experience. ',
    stack: ['Flutter', 'Getx', 'ShoreBird'],
    sourceCode: 'https://github.com',
    livePreview: 'https://play.google.com/store/apps/details?id=com.haitsofts.picky&hl=en&gl=US',
  },
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const experience = [

  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Kotlin',
  'Android',
  'Flutter',
  'REST API',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abdulkayuem@gmail.com',
}

export { header, about, projects, skills, contact,experience }
