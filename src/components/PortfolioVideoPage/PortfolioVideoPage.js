import React from 'react'
import classes from './PorfolioVideoPage.module.css';
import Cards from '../UI/Cards/Cards'
const PortfolioVideoPage = () => {
    return(
        <section className={classes.Portfolio}>
             <h2 className={classes.line}>Featured Wedding Films</h2>
      <hr />
      <div>
        <Cards/>
      </div>
        </section>
    );
}

export default PortfolioVideoPage;