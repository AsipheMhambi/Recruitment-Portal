import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";


// Body component
const Body = () => {
  return (
    <div className="body">
      <h1>One Million Success Stories <br /><br /> Start Yours Today With Us</h1>

      <Search />


      <div className="media-icons">
        <div className='facebook'>
          <a href="https://www.facebook.com/profile.php?id=100092504071844"><FaFacebook style={{ color: '#3b5998', fontSize: '40px' }}/></a>
        </div>
        <div className='github'>
          <a href="https://github.com/AsipheMhambi?tab=repositories"><FaGithub style={{ color: '#24292e', fontSize: '40px' }} /></a>
        </div>
        <div className='linkedin'>
          <a href='www.linkedin.com/in/asiphe-mhambi-81504525a'><FaLinkedin  style={{color: '#0e76a8', fontSize: '40px'}}/></a>
        </div>
      </div>
      
    </div>
    
  );
};

export default Body;   