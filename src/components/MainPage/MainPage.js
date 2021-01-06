import React from 'react';
import classes from './MainPage.module.css';
import Icons from '../UI/SocialMediaIcons/SocialMediaIcons';
const mainPage = () => {
  return (
    <main>
      <div className={classes.main_div}>
        <h3 className={classes.signature}>insert signature</h3>
        <h2 className={classes.myname}>Hi, I&#39;m Gib Zafico.</h2>
        <p className={classes.myskills}>
          Photographer, Videographer,
          <br /> Cinematographer, Influencer.
        </p>
        <Icons />
      </div>
  
    </main>
  );
};

export default mainPage;
