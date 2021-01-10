import React, { useState } from 'react';
import Card from './Card/Card';
import Video1 from '../../../assets/imgs/peytonalex.jpg';
import Video2 from '../../../assets/imgs/3rd.jpg';
import Video4 from '../../../assets/imgs/4th.jpg';
import classes from './Cards.module.css';
import Modal from '../Modal/Modal';
const Cards = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [vidLink, setvidLink] = useState(null);
  const closeModalHandler = () => {
    setvidLink(null)
    setShowModal(false);
  };
  const openModalHandler = (vidLink) => {
    setvidLink(vidLink);
    setShowModal(true);
  };
 
  return (
    <div className={classes.cardsContainer}>
      <Modal
        show={showModal}
        modalClosed={closeModalHandler}
        link={vidLink}
      ></Modal>
      <Card
        title="Peyton &amp; Alex"
        caption="New Albany, MS"
        src={Video1}
        clicked={() => openModalHandler('EoFEv9BSIn4')}
      />
      <Card
        title="Josh &amp; Paisleigh"
        caption="Walnut MS"
        src={Video2}
        clicked={() => openModalHandler('ga2XjAsCqmY')}
      />
      <Card
        title="Cruz &amp; Emily"
        caption="Tupelo MS"
        src={Video4}
        clicked={() => openModalHandler('XU9M72F4nZU')}
      />
    </div>
  );
};

export default Cards;
