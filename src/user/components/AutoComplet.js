
import React, { useState } from 'react';

import Ticker from './data.js'
import Ticker2 from './data2.js'
import useAutocomplete from 'use-autocomplete'

const AutoComplet = props => {
  const [textState, setTextState] = useState('');
  const testWords = [
    "Leslie",
    "Jolene",
    "Cooley",
    "Allison",
    "Debbie",
    "Beryl",
    "Carissa",
    "Jewel",
    "Daisy",
    "Gordon"
  ];
  const [completions] = useAutocomplete(textState, Ticker2.TickerSymbols);
  const [company, setCompany] = useState('');
 
 
const updateCompany =(e)=>{
const aa =new Map

 Ticker.TickerSymbols.map(function (obj) {
   aa.set(obj.name,obj.symbol) ;
   
});
const s =[ ]
const arr=Ticker.TickerSymbols.map(function (obj) {
 /*  console.log(`"${obj.name}",`) */
 return(obj.name) ;
 
});



  let search = e.target.value;
          search = search.toLowerCase();
         if(e.target.value.length >=3){
        const a =  Ticker.TickerSymbols.filter( f => 
              (JSON.stringify(f).toLowerCase().indexOf(search) !== -1)
             )
         
            let finalArray = a.map(function (obj) {
              return obj.name ;
            });
         
          
          setCompany( finalArray)
         
       
          }
          setTextState( e.target.value)
          console.log(e.target.value);
          
          props.s(aa.get(e.target.value))
}   

  
  return (
    <div>
     {/*  <input
      class="form__input"
        type='text'
        value={textState}
        onChange={updateCompany}
        list='list'
        placeholder="Insert Name Company"
      /> */}
      <div>
     {/*  <datalist id="list">  
      <b >{(completions.map((val, index) => (<option value={val} /> )))}</b>
      
       </datalist> 
     */}
       <div>
      <input
      
       class="form__input"
        type='text'
        value={textState}
        onChange={(e) => setTextState(e.target.value)}
        list='list'
      />
      <div>
        {completions.map((val, index) => (
          
          <p key={index}>{val}</p>
        ))}
         <ul class="suggestions">
            {completions.map((val, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === true) {
                className = "suggestion-active";
              }

             
                <li className={className} key={val} >
                  {val}
                </li>
              
            })}
          </ul>
      </div>    
    </div>
      </div>    
    </div>
    
  );
        }

export default AutoComplet ;
