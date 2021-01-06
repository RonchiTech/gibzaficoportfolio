import React from 'react';
import classes from './Card.module.css';
const card = (props) => {
  return (
    <div className={classes.containers} onClick={props.clicked} >
      <div className={classes.card}>
        <img src={props.src} alt={props.alt}></img>
        <div className={classes.videoLogo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-play-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg>
        </div>
      </div>
      <div className={classes.info}>
        <h3>{props.title}</h3>
        <p>{props.caption}</p>
      </div>
    </div>
  );
};

export default card;
