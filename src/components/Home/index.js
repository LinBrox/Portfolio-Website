import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s4.png';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['i', 'n', 't', 'o', 'n'];
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];
  useEffect(() => {
    setLetterClass('text-animate');

    // Add a timeout to change the animation class after 4000ms (4 seconds)
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass}`}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>{'\''}m</span>
          <img src={LogoTitle} alt="developer"></img>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>
          Frontend-Backend Developer / JavaScript & C# expert / Full-Stack{' '}
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
