import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ExperienceContainer = () => {
  console.log("a")

  return (
    <div className="row">
  <div className="col-lg-12" data-aos="fade-up">
    <div className="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100">
      <h4 style={{ textAlign: 'left' }}>
        <a href="https://www.asu.edu/" style={{ color: '#12d640' }}>Genuity Systems</a>
      </h4>
      <h5 style={{ textAlign: 'left' }}>October 2022 - Present</h5>
      <p style={{ textAlign: 'left',  }}><em>Software Engineer (Android )</em></p>
      <ul style={{ textAlign: 'left', listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>Update Java code to Kotlin Dhaka Bank App. Fixed bugs in the VOIP calling app. </li>
        <li>Configured, troubleshot, and administered server‑side web applications for the statistics department.</li>
      </ul>
    </div>
    <hr />

    <div className="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100">
      <h4 style={{ textAlign: 'left'}}>
        <a href="https://www.augmenify.com/" style={{ color: '#12d640' }}>Augmenify Infotech Pvt. Ltd.</a>
      </h4>
      <h5 style={{ textAlign: 'left' }}>August 2020 - November 2020</h5>
      <p style={{ textAlign: 'left' }}><em>Backend Developer</em></p>
      <ul style={{ textAlign: 'left' }}>
        <li>Documented and coded server‑less web application for the hotel industry and designed REST API using Flask‑based JWT authentication.</li>
        <li>Redeveloped an existing system to support customer account management, scheduling, and time tracking; enabled dynamic API calls with the help of Amazon API Gateway, AWS Lambda, and DynamoDB.</li>
      </ul>
    </div>
    {/* Repeat similar structures for other entries */}
  </div>
</div>

  );
};

export default ExperienceContainer
 