const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Kayuemkhan.github.io/abdulportfolio',
  title: 'AK',
}

const about = {
  name: 'Abdul Kayuem',
  role: 'Mobile Engineer',
  description:
    'I’m a mobile app developer with more than <strong>Four years</strong> of experience in the software industry, specializing in <strong>Java, Kotlin, Android</strong>, and <strong>Flutter</strong>.' +
    ' Over the years, I have developed complex systems for <strong>Banking Apps</strong>,<strong>Fintech</strong>, <strong>POS</strong>, <strong>Telemedicine</strong>, <strong>WebRTC</strong>, and <strong>E-commerce</strong> applications. I love building innovative and impactful software that improves the lives of a vast number of people.',
  resume: 'https://drive.google.com/file/d/1ufFPF_tsdbCK9vtYQdWaXi9Es2J2ooS5/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/abdulkayuem/',
    github: 'https://github.com/Kayuemkhan',
  },
}

const projects = [
  {
    name: 'DBL Go',
    description:
      'Converted the Dhaka Bank Go app from Java to Kotlin, upgraded the UI with the latest architecture, ' +
      'and optimized performance, serving over <strong>100,000 users</strong>, solved security issues detected by Dhaka Bank ' +
      'securities',
    stack: ['Android', 'Kotlin', ''],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.gplex.dhakabank&hl=en&gl=US',
  },
  {
    name: 'Picky - Online Shopping BD',
    description:
      'Enhanced the design and implementation of an e-commerce app Picky with over <strong>50,000 downloads</strong> and ' +
      'integrated a payment gateway, saving time for 20 Riders',
    stack: ['Flutter', 'Getx', 'REST', 'Firebase', 'ShoreBird'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.haitsofts.picky&hl=en&gl=US',
    livePreview: 'https://apps.apple.com/us/app/picky-online-shopping-bd/id1613911394',
  },
  {
    name: 'Foxy Pizza',
    description:
      'Pizza Delivery, Takeaway, & Eat in. It is providing all-possible ways of ordering the most delicious pizza in the city.',
    stack: ['Flutter', 'Getx', 'REST', 'Firebase'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.foxy.user&hl=en&gl=US',
    livePreview: 'https://apps.apple.com/us/app/foxy-pizza/id1660795503',
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
  'Machine Learning',
  'MLkit',
  'Tensorflow',
  'MySQL',
  'Git',
  'CI/CD',
  'Trello',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dev.abdulkayuem@gmail.com',
}

export { header, about, projects, skills, contact,experience }
