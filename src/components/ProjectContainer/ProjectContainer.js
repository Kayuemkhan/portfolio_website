import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'

import PlayStoreIcon from './icons/playstore.png'
import AppStore from './icons/App_Store_(iOS).svg.png'

import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
      <img src={PlayStoreIcon} alt="Play Store" width="32" height="32" />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
      <img src={AppStore} alt="Play Store" width="32" height="32" />
      </a>
    )}
  </div>
)

export default ProjectContainer
