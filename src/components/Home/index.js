import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s4.png';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('');

  useEffect(() => {
    setLetterClass('text-animate');
  }, []);

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
    '.',
  ];

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={`${letterClass}`}>H</span>
          <span className={`${letterClass}`}>i,</span>
          <br />
          <span className={`${letterClass}`}>I</span>
          <span className={`${letterClass}`}>{'\''}m</span>
          <img src={LogoTitle} alt="developer"></img>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} />
        </h1>
        <h2>
          Frontend-Backend Developer / JavaScript & C# expert / Full-Stack{' '}
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
