import { scaleService } from 'chart.js';
import React, { Component} from 'react'
import { Bar } from 'react-chartjs-2';



const BarChart = props => {
    var arrMax=[]
    var arrMin=[]
    const netOperatingCashFlow = props.items.growth.netOperatingCashFlow
    const sales = props.items.growth.sales
    const roic = props.items.balance.roic
    const eps = props.items.growth.eps
    const equity = props.items.growth.equity

    arrMax.push(sales.reduce((a,b)=>Math.max(a,b), -Infinity))
    arrMax.push(eps.reduce((a,b)=>Math.max(a,b), -Infinity))
    arrMax.push(equity.reduce((a,b)=>Math.max(a,b), -Infinity))
    arrMax.push(netOperatingCashFlow.reduce((a,b)=>Math.max(a,b), -Infinity))
    arrMax.push(roic.reduce((a,b)=>Math.max(a,b), -Infinity))

    arrMin.push(eps.reduce((a,b)=>Math.min(a,b), Infinity))
    arrMin.push(sales.reduce((a,b)=>Math.min(a,b), Infinity))
    arrMin.push(equity.reduce((a,b)=>Math.min(a,b), Infinity))
    arrMin.push(netOperatingCashFlow.reduce((a,b)=>Math.min(a,b), Infinity))
    arrMin.push(roic.reduce((a,b)=>Math.min(a,b), Infinity))


    
    const Min = arrMin.reduce((a,b)=>Math.min(a,b), Infinity);
    const Max = arrMax.reduce((a,b)=>Math.max(a,b), -Infinity);
  
    
//Only find minimum


const data = {

    labels:props.maxYaer,
    datasets:[
       
       
        {
            label:'Roic',
            data:props.items.balance.roic,
            borderColor:['rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)'],
            backgroundColor:['rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)','rgba(200,150,20,0.5)']
           
        },
        {
            label:'netOperatingCashFlow',
            data:props.items.growth.netOperatingCashFlow,
            borderColor:['rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)'],
            backgroundColor:['rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)','rgba(200,15,20,0.5)']
           
        },
        {
            label:'equity',
            data:props.items.growth.equity,
            borderColor:['rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)'],
            backgroundColor:['rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)','rgba(100,15,55,0.5)']
           
        },
        {
            label:'eps',
            data:props.items.growth.eps,
            borderColor:['rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)'],
            backgroundColor:['rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)','rgba(5,15,200,0.5)']
           
        },
        {
            label:'sales',
            data:props.items.growth.sales,
            borderColor:['rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)'],
            backgroundColor:['rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)','rgba(200,150,200,0.5)']
           
        },
        
    
    ]
}
const options ={


scales:{
yAxes:[
    {
        ticks:{
            min:Min,
            max:Max,
            stepSize:500
        }
    }
]

}

}
    return(
        <div>
          <b className='form2'>Balance</b>
      <Bar data={data} options={options}/>


        </div>)
}
export default BarChart; 