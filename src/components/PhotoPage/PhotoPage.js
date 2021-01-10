import React from 'react';
import classes from './PhotoPage.module.css';
import NatureSkies from './NatureSkies/NatureSkies';
import Random from './Random/Random';
import { NavLink, Route, Switch } from 'react-router-dom';
const photoPage = () => {
  return (
    <section className={classes.PhotoPage}>
      <h2 className={classes.line}>Photographs</h2>
      <hr />
      <ul className={classes.LinkList}>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: '#e2a35cf1',
            }}
            style={{ textDecoration: 'none', color: '#000' }}
            exact
            to="/"
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{
              fontWeight: 'bold',
              color: '#e2a35cf1',
            }}
            style={{ textDecoration: 'none', color: '#000' }}
            to="/photos/nature_skies"
          >
            Nature &#38; Skies
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: '#e2a35cf1',
            }}
            style={{ textDecoration: 'none', color: '#000' }}
            to="/photos/random"
            exact
          >
            Random
          </NavLink>
        </li>
      </ul>
      <div>
        <Switch>
          <Route exact path="/">
            <NatureSkies />
            <Random />
          </Route>
          <Route  path="/photos/nature_skies">
            <NatureSkies />
          </Route>
          <Route  path="/photos/random">
            <Random />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default photoPage;
