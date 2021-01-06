
import React, { useEffect, useContext } from 'react';

import './Balance.scss';

const MyTime = props => {
  let v=""
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
   /*  console.log(m)
  console.log(s) */
   var elem = document.getElementById("time");
  if(typeof elem !== 'undefined' && elem !== null) {
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  }
  
  
    var t = setTimeout(function() {
      startTime()
    }, 500);
  }



startTime();

  return (
    
  
     <div className="m">
        <i class="fas fa-clock">  </i>
        <b id="time"></b>
     </div>
 
   
  );
};

export default MyTime;
