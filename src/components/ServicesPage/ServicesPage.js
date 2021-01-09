import React from 'react';
import ServicePage from './ServicePage';
import classes from './ServicesPage.module.css';
import EditPhotos from '../../assets/imgs/editphotos.jpg';
import WeddingVids from '../../assets/imgs/wedvids.jpg';
import EditVids from '../../assets/imgs/editvids.jpg';
const servicesPage = () => {
  return (
    <section className={classes.services}>
      <h2 className={classes.line}>Services</h2>
      <hr />
      <div className={classes.mainContainer}>
        <ServicePage src={EditPhotos} alt="photo edits">
          <p>Photo Editing</p>
          <ul className={classes.list}>
            <li>Raw Conversion </li>
            <li>5 Photographs per Package</li>
            <li>Blah Blah blah</li>
          </ul>
        </ServicePage>

        <ServicePage src={WeddingVids} alt="wedding edits">
          <p>Wedding Films</p>
          <ul>
            <li>7-8 Minute Wedding Film </li>
            <li>Full Day Coverage</li>
            <li>No Travel Fees</li>
            <li>Aerial Drone Footage</li>
            <li>Delivered Via Online Or Flash Drive In 4K</li>
          </ul>
        </ServicePage>

        <ServicePage src={EditVids} alt="vids edits">
          <p>Video Editing</p>
          <ul>
            <li>7-10 Minute Video Film </li>
            <li>Blah blah blah</li>
            <li>Blah blah blah</li>
            <li>Blah blah blah</li>
          </ul>
        </ServicePage>
      </div>
    </section>
  );
};

export default servicesPage;
