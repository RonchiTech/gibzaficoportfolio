import React, {useState} from 'react';
import Button from '../../UI/Button/Button'
import Image1 from '../../../assets/imgs/randomImages/1.jpg';
import Image2 from '../../../assets/imgs/randomImages/2.jpg';
import Image3 from '../../../assets/imgs/randomImages/3.jpg';
import Image4 from '../../../assets/imgs/randomImages/4.jpg';
import Image5 from '../../../assets/imgs/randomImages/5.jpg';
import Image6 from '../../../assets/imgs/randomImages/6.jpg';
import Image7 from '../../../assets/imgs/randomImages/7.jpg';
import Image8 from '../../../assets/imgs/randomImages/8.jpg';
import Image9 from '../../../assets/imgs/randomImages/9.jpg';
import Image10 from '../../../assets/imgs/randomImages/10.jpg';
import Image11 from '../../../assets/imgs/randomImages/11.jpg';
import Image12 from '../../../assets/imgs/randomImages/12.jpg';
import Image13 from '../../../assets/imgs/randomImages/13.jpg';
import Image14 from '../../../assets/imgs/randomImages/14.jpg';
import Image15 from '../../../assets/imgs/randomImages/15.jpg';
import Image16 from '../../../assets/imgs/randomImages/16.jpg';

const Random = () => {
  const [showMore, setShowMore] = useState(false);
  let moreImages = null;

  const showMoreHandler = (event) => {
    event.preventDefault();
    setShowMore(!showMore);
  };
  if (showMore) {
    moreImages = (
      <div>
        <img src={Image8} alt="8" />
        <img src={Image9} alt="9" />
        <img src={Image10} alt="10" />
        <img src={Image11} alt="11" />
        <img src={Image12} alt="12" />
        <img src={Image13} alt="13" />
        <img src={Image14} alt="14" />
        <img src={Image15} alt="15" />
        <img src={Image16} alt="16" />
      </div>
    );
  }
  return (
    <div className="image-container">
      <img src={Image1} alt="1" />
      <img src={Image2} alt="2" />
      <img src={Image3} alt="3" />
      <img src={Image4} alt="4" />
      <img src={Image5} alt="5" />
      <img src={Image6} alt="6" />
      <img src={Image7} alt="7" />
      {/* <img src={Image8} alt="8" />
      <img src={Image9} alt="9" />
      <img src={Image10} alt="10" />
      <img src={Image11} alt="11" />
      <img src={Image12} alt="12" />
      <img src={Image13} alt="13" />
      <img src={Image14} alt="14" />
      <img src={Image15} alt="15" />
      <img src={Image16} alt="16" /> */}
       {moreImages}
      <Button clicked={showMoreHandler}>Show {showMore? 'Less' : 'More'}</Button>
    </div>
  );
};
export default Random;
