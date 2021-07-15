import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import logo from '../images/logo.svg';

export default function Header(props) {

  return (
        <header className="header root__section-position">
            <img src={logo} alt="Лого проекта Mesto Russia" className="header__logo" />
            <div className="header__authorization-block">
              <p className={`header__authorized-email ${props.loggedIn ? 'header__authorized-email_visible': ''}`}>{props.userData}</p>
              <nav>
              <Switch>
                <Route path="/sign-up">
                  <Link className="header__user-nav" to="/sign-in">Войти</Link>
                </Route>
                <Route path="/sign-in">
                  <Link className="header__user-nav" to="/sign-up">Регистрация</Link>
                </Route>
                <Route exact path="/">
                  <Link className="header__user-nav header__user-nav_signout" onClick={props.onSignOut} to="/sign-in">Выйти</Link>
                </Route>
              </Switch>
              </nav>
            </div>
        </header>
  );
}