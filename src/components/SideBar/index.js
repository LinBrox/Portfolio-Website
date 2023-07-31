import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s4.png'
import LogoSubtitle from '../../assets/images/logo_sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import GitHubLogo from './GitHub_Logo.svg'
import LinkedInLogo from './Linkedin-PNG.png'
import FaceBookLogo from './Facebook_logo.png'

const SideBar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} className="main-logo" alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassName="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassName="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/LinBrox">
          <img src={GitHubLogo} alt="GitHub Logo" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/linton-bryan-fox-25aa58156/"
        >
          <img src={LinkedInLogo} alt="LinkedIN Logo" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/linton.bryanfox.9/"
        >
          <img src={FaceBookLogo} alt="Facebook Logo" />
        </a>
      </li>
    </ul>
  </div>
)

export default SideBar
