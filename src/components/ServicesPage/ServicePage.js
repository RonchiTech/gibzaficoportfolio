import classes from './ServicePage.module.css';
import React from 'react';

const servicePage = ({ children, src, alt }) => {
  return (
    <>
      <div className={classes.container}>
        <div>
          <img className={classes.imageContainer} src={src} alt={alt} />
        </div>

        {children}
      </div>
    </>
  );
};

export default servicePage;
