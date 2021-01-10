import React from 'react';
import classes from './ContactPage.module.css';

const ContactPage = () => {

  return (
    <section className={classes.contactPage}>
        <div className={classes.container}>
        <iframe
        src="https://www.cognitoforms.com/f/MOyt8QUhDka2uj7_YBAfug?id=1"
        style={{ position: 'relative', minWidth: '100%', width: '100%' }}
        frameBorder="0"
        scrolling="yes"
        seamless="seamless"
        height="488"
        width="100%"
        title="forms"
      ></iframe>
      <script src="https://www.cognitoforms.com/scripts/embed.js"></script>
        </div>
     
    </section>
  );
};

export default ContactPage;
