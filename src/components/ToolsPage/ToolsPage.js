import React from 'react';
import classes from './ToolsPage.module.css';
import Tools from './Tools';
const toolsPage = () => {
  return (
    <section className={classes.ToolsPage}>
      <div className={classes.mainContainer}>
        <h2 className={classes.line}>Softwares</h2>
        <div className={classes.toolsContainer}>
          <Tools />
        </div>
      </div>
    </section>
  );
};

export default toolsPage;
