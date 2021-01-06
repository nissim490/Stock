
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../shared/components/Navigation/MainNavigation.scss';
import { AuthContext } from '../../shared/context/auth-context';
import '../../css/style.css'
const HomePage  = () => {
  

  const [isLoading, setIsLoading] = useState(false);
  const {  error,  clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();
  const auth = useContext(AuthContext);
  

  return (
<React.Fragment>
  <ErrorModal error={error} onClear={clearError} />
  {isLoading && (<div className="center"><LoadingSpinner /></div> )}
  <div className="tour-item__image"><img src='https://images.unsplash.com/photo-1423666523292-b458da343f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80' alt="title" /></div>
    
  <div class="header__text-box">
                <h1 class="heading-primary">
                <span class="heading-primary--main">STOCK</span>
                    <p></p>
                    <span class="heading-primary--sub">to make money</span>
                </h1>
                {/*  <NavLink to="/Balance"  class="btn btn--white btn--animated">Balance</NavLink> */}
 </div>
           
  

   
 
                
                
</React.Fragment>
  )
};
///'https://images.unsplash.com/photo-1581012771300-224937651c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60'
export default HomePage ;
