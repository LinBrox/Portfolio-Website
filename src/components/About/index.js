import './index.scss'
import Loader from 'react-loaders'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setLetterClass('text-animate')

    // Add a timeout to change the animation class after 4000ms (4 seconds)
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          As a highly motivated and responsible Computer Science graduate with
          several years of industry experience, I have developed a strong skill
          set that enables me to thrive in any professional setting, such as
          problem solving, working with others, complaint handling, compliance,
          and many more.{' '}
        </p>
        <p>
          My academic background and work experience have provided me with an
          excellent understanding of the importance of technology in today's
          world and the power it must shape and transform industries. Throughout
          my career, I have gained expertise in various areas, including
          business support management, customer service management, complaint
          handling, and compliance.{' '}
        </p>
        <p>
          I am proficient in Microsoft Office and have working knowledge of
          HTML, C++, C#, React, Java & JavaScript. I am looking for a new and
          challenging role in the computer science industry, where I can utilize
          my existing skills and grow further. My goal is to make a significant
          impact in the technology sector and contribute to the growth of an
          organization.
        </p>
      </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </div>
  )
}

export default About
