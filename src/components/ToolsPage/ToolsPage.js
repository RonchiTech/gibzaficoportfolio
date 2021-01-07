import React from 'react'
import classes from './ToolsPage.module.css'
import Tools from './Tools'
const toolsPage = () => {
    return (
        <section className={classes.ToolsPage}>
              <h2 className={classes.line}>Softwares</h2>
              <div className={classes.lists}>
                  <Tools/>
              </div>
        </section>
    );
}

export default toolsPage;