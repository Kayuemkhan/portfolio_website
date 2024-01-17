import uniqid from 'uniqid'
import ExperienceContainer from '../ProjectContainer/ExperienceContainer'

import { experience } from '../../portfolio'
import './Experience.css'


const Experience = () => {
    if (!experience.length) return null
  
    return (
      <section id='experience' className='section experience'>
        <h2 className='section__title'>Experience</h2>
  
        <div className='projects__grid'>
          {experience.map((experiences) => (
            <ExperienceContainer key={uniqid()} experiences={experiences} />
          ))}
        </div>
      </section>
    )
  }
  

export default Experience
