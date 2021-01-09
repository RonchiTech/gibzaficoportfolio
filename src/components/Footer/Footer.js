import React from 'react'
import classes from './Footer.module.css';
const footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterBody}>
            <h2>Developed by Ronchi Floyd</h2>
            <p>&#169; All rights reserve</p>
            </div>
        
        </footer>
    );
}

export default footer;