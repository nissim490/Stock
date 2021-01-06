import React,{useState} from 'react';
import { Chart } from 'react-charts'

import Table from 'react-bootstrap/Table';
import '../../sass/bootstrap.min.css';

import './Mytable.scss';
const Mytable = props => {
  const [maxArr, setMaxArr] = useState(0);
  const [query, setQuery] = useState('');
  let tempMax=15
  console.log(props)

  /* setMaxArr( props.items.balance.map(function(arr){
let tempMax=0
if(tempMax<arr.length)
tempMax = arr.length
return tempMax
 })) */
 var getNumberOfDigits = function(num){
   var mm=num
   if(num<0)
   num= num*(-1)
  var count = 1;
  while(Math.floor(num/10) >= 1){
      num = Math.floor(num/10);
      ++count;
  }
 
  if(count>=9)
return(Math.round( mm/1000000000 * 100) / 100).toFixed(2)+'(G)'

if(count>=6)
return(Math.round( mm/1000000 * 100) / 100).toFixed(2)+'(M)'

if(count>=3)
return(Math.round( mm/1000 * 100) / 100).toFixed(2)+'(K)'

  return (Math.round(mm * 10) / 10).toFixed(1);
}
console.log(getNumberOfDigits(-5786.275748943380067));

  return (
   
   (!!props.items)&&<Table striped bordered hover  >
    <thead>
      <tr>
        <th><h3 className="m12">Category/Years</h3></th>
        {props.maxYaer.map(M => (
       <th> <h3 className="m12">{M}</h3> </th>
    
      ))}
      
      </tr>
    </thead>
    <tbody>
    <tr>
        <td ><h3 className="m12">Return on Invested Capital (Roic)</h3></td>
        {props.items.balance.roic.map(M => (
       <td> <h3 className="m12">{getNumberOfDigits(M)}</h3></td>
    
      ))}
       </tr>
    <tr>
        <td ><h3 className="m12">Sales</h3></td>
        {props.items.balance.sales.map(M => (
       <td> <h3 className="m12">{getNumberOfDigits(M)}</h3></td>
    
      ))}
      </tr>
    
      <tr>
        <td><h3 className="m12">Eps</h3></td>
        {props.items.balance.eps.map(M => (
       <td> <h3 className="m12">{getNumberOfDigits(M)}</h3></td>
    
      ))}
      </tr>
      
      
    
      <tr>
        <td><h3 className="m12">Equity</h3></td>
        {props.items.balance.equity.map(M => (
      <td> <h3 className="m12">{getNumberOfDigits(M)}</h3></td>
    ))}
      </tr>
     
     
      
    
      
      
      <tr>
        <td><h3 className="m12">Total liabilites</h3></td>
        {props.items.balance.netOperatingCashFlow.map(M => (
       <td> <h3 className="m12">{getNumberOfDigits(M)}</h3></td>
    ))}
       
      </tr>
     
    </tbody>
    </Table>
 
  

  );
};

export default Mytable;
