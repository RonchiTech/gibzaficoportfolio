import React from 'react';
// import VideoLQ from '../../assets/videos/gibz-video-lowq.mp4';
import Video from '../../assets/videos/gibz-video.mp4';
import classes from './VideoPage.module.css';
const videoPage = () => {
  return (
    <React.Fragment>
      <section className={classes.VideoPage}>
      <video autoPlay muted loop className={classes.video}>
        <source src={Video} type="video/mp4" />
      </video>
      <header className={classes.viewport_header}>
        <h1 className={classes.h1}>Downtown Corinth</h1><br/>
        <div className={classes.container}>
          <div className={classes.chevron}></div>
          <div className={classes.chevron}></div>
          <div className={classes.chevron}></div>
          <span className={classes.text}>Scroll down</span>
        </div>
      </header>
      </section>
    </React.Fragment>
  );
};

export default videoPage;
