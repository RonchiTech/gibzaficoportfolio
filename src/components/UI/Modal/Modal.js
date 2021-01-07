import React from 'react';

import classes from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
         <iframe title="wedding" id="video" width="900" height="500" src={`//www.youtube.com/embed/${props.link}?rel=0`} frameBorder="0" allowFullScreen></iframe>
      </div>
    </React.Fragment>
  );
};

export default modal;