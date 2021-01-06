import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';

import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.scss';
import '../../../css/style.css'
const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
    
   

      <MainHeader>

        <h1 className="main-navigation__title" > 
          <Link to="/">STOCK </Link>
          <NavLinks/>
        </h1>
        <nav className="main-navigation__header-nav">
       
        </nav>
      </MainHeader>
    
    </React.Fragment>
  );
};

export default MainNavigation;
