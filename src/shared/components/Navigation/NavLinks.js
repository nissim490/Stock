import React, { useContext,useEffect ,useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Input } from 'mdb-ui-kit';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.scss';
import axios from "axios";
const NavLinks = props => {
  const auth = useContext(AuthContext);
  const [usd,setUsd] = useState('');
  const [en,setEn] = useState('');
  const [urp,setUrp] = useState('');
  
  var newMap = {};
  const inputHandler = async event => { 
        
    event.preventDefault()
    
  }

  /* useEffect(() => {
  const fetchUsers = async () => {
    try {
      


      
       ///HTTP REQUEST
       const  responseData= await  axios({
        method: "get",
        url:  `http://data.fixer.io/api/latest?access_key=81e2c5dbe198808392b6d5f6af010f25&base=EUR`,
        
        
      })
    
      for (var i in responseData.data.rates)
   newMap[i] = responseData.data.rates[i];
  
    
   setUsd( newMap.USD) 
 setEn( newMap.GBP) 
 setUrp(newMap.ILS)
     
    } catch (err) {}
  };
  fetchUsers();

}, []); */
console.log( newMap);
  return (




<div class="navigation">
<input type="checkbox" class="navigation__checkbox" id="navi-toggle"></input>

<label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">

            <ul class="navigation__list">
            <li class="navigation__item"><a href="/" class="navigation__link"><span>01</span>HOME</a></li>
            <li class="navigation__item"><a href="/Balance" class="navigation__link"><span>02</span>Balance</a></li>
  
        
            </ul>
            </nav>

</div>






    
  /*  <ul className="nav-links">
     
      
     <i class="united states flag"></i> <b className='icon'> {(urp+urp*(1-usd))}&nbsp;&nbsp;</b>
       
     <i class="england flag"></i> <b className='icon'> {(urp+urp*(1-en))}&nbsp;&nbsp;</b>
    
     <i class="european union flag"></i><b className='icon'> {urp}</b>
      
    
     
    </ul> */
  );
};

export default NavLinks;
