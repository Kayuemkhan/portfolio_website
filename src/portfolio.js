const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Kayuemkhan.github.io/abdulportfolio',
  title: 'AK',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abdul Kayuem',
  role: 'Mobile Engineer',
  description:
    'I’m a mobile app developer with more than three years of experience in the software industry, specializing in Java, Kotlin, Android, and Flutter. Over the years, I have developed complex systems for POS, Telemedicine, WebRTC, and E-commerce applications. I love building innovative and impactful software that improves the lives of a vast number of people',
  resume: 'https://drive.google.com/file/d/1AFhcUTvvDGE0UtWJ7K8XIeDWqJXIw_jL/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/abdulkayuem/',
    github: 'https://github.com/Kayuemkhan',
  },
}

const projects = [
  {
    name: 'DBL Go',
    description:
      'Dhaka Bank go is a mobile banking app. It gives you secure access to your Dhaka Bank Accounts and Credit Cards anytime, anywhere',
    stack: ['Android', 'Kotlin', ''],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.gplex.dhakabank&hl=en&gl=US',
  },
  {
    name: 'Picky - Online Shopping BD',
    description:
      'Picky is an e-commerce app offers a convenient and user-friendly shopping experience ',
    stack: ['Flutter', 'Getx', 'ShoreBird'],
    sourceCode: 'https://play.google.com/store/apps/details?id=com.haitsofts.picky&hl=en&gl=US',
    livePreview: 'https://apps.apple.com/us/app/picky-online-shopping-bd/id1613911394',
  },
  
  {
    name: 'Foxy Pizza',
    description:
      'Pizza Delivery, Takeaway, & Eat in.It is providing the all-possible ways of ordering the most delicious pizza in the city. ',
      stack: ['Flutter', 'Getx', ''],
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
  'MySQL',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dev.abdulkayuem@gmail.com',
}

export { header, about, projects, skills, contact,experience }
