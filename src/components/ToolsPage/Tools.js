import React from 'react'
import classes from './Tools.module.css'

import Photoshop from '../../assets/imgs/photoshop.svg'
import PremierPro from '../../assets/imgs/premiere.svg'
import AfterEffects from '../../assets/imgs/after-effects.svg'
import Lightroom from '../../assets/imgs/lightroom.svg'
const tools = () => {
    return (
        <ul>
            <li>
                <img className={classes.imgSize}src={Photoshop} alt='Photoshop Logo'/>
                <img className={classes.imgSize}src={PremierPro} alt='Premier Pro Logo'/>
                <img className={classes.imgSize}src={AfterEffects} alt='After Effects Logo'/>
                <img className={classes.imgSize}src={Lightroom} alt='Lightroom Logo'/>
            </li>
        </ul>
    );
}

export default tools;