import React from 'react';

import './CardAuth.scss';

const CardAuth = props => {
  console.log(props.style);
  return (

    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default CardAuth;
