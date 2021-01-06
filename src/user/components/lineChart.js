import { scaleService } from 'chart.js';
import React, { Component} from 'react'
import { Line } from 'react-chartjs-2';
import Card from '../../shared/components/UIElements/Card';

const lineChart = props => {
    const netOperatingCashFlow = props.items.growth.netOperatingCashFlow
    const sales = props.items.growth.sales
    const roic = props.items.balance.roic
    const eps = props.items.growth.eps
    const equity = props.items.growth.equity
    const minSales = sales.reduce((a,b)=>Math.min(a,b), Infinity);
    const maxSales = sales.reduce((a,b)=>Math.max(a,b), -Infinity);
    const minEps = eps.reduce((a,b)=>Math.min(a,b), Infinity);
    const maxEps = eps.reduce((a,b)=>Math.max(a,b), -Infinity);
    const minEquity = equity.reduce((a,b)=>Math.min(a,b), Infinity);
    const maxEquity = equity.reduce((a,b)=>Math.max(a,b), -Infinity);
    const minNetOperatingCashFlow = netOperatingCashFlow.reduce((a,b)=>Math.min(a,b), Infinity);
    const maxNetOperatingCashFlow  = netOperatingCashFlow.reduce((a,b)=>Math.max(a,b), -Infinity);
    const minRoic = roic.reduce((a,b)=>Math.min(a,b), Infinity);
    const maxRoic  = roic.reduce((a,b)=>Math.max(a,b), -Infinity);
const dataSales = {
    
    labels:props.maxYaer,
    datasets:[
        
        {
            label:' Growth Sales',
            data :sales,
            borderColor:['#3b63d1'],
            backgroundColor:['#3b63d1'],
            pointBackgroundColor:['#3b63d1'],
            pointBorderColor:['#3b63d1']
        },
    ]
}
const dataEps = {
    
    labels:props.maxYaer,
    datasets:[
        {
            label:'Growth Eps',
            data:eps,
            borderColor:['#3b63d1'],
            backgroundColor:['#3b63d1'],
            pointBackgroundColor:['#3b63d1'],
            pointBorderColor:['#3b63d1']
        },
       
    ]
}
const dataEquity = {
    
    labels:props.maxYaer,
    datasets:[
        {
            label:'Growth Equity',
            data:equity,
            borderColor:['#3b63d1'],
            backgroundColor:['#3b63d1'],
            pointBackgroundColor:['#3b63d1'],
            pointBorderColor:['#3b63d1']
        },
       
    ]
}
const dataNetOperatingCashFlow = {
    
    labels:props.maxYaer,
    datasets:[
        
        {
            label:'Growth Eet Operating Cash Flow',
            data:netOperatingCashFlow,
            borderColor:['#3b63d1'],
            backgroundColor:['#3b63d1'],
            pointBackgroundColor:['#3b63d1'],
            pointBorderColor:['#3b63d1']
        },
       
     
    ]
}
const dataRoic = {
    
    labels:props.maxYaer,
    datasets:[
        
        {
            label:'Roic',
            data:roic,
            borderColor:[' #3b63d1'],
            backgroundColor:[' #3b63d1'],
            pointBackgroundColor:[' #3b63d1'],
            pointBorderColor:[' #3b63d1']
        },
       
     
    ]
}

function op(min ,max){

    const options ={
        title:{
        display:true,
        text:"Line Chart"
        },
        scales:{
        yAxes:[
            {
                ticks:{
                    min:min,
                    max:max,
                    stepSize:100
                }
            }
        ]
        
        }
        
        }
    
}

    return(
        <React.Fragment>
        
    
               <Card className="Roic"> <b className='form2'>Roic</b><Line   data={dataRoic} options={op(minRoic ,maxRoic)}/></Card> 
              <Card className="Sales"><b className='form2'>Sales</b><Line   data={dataSales} options={op(minSales ,maxSales)}/></Card>
              <Card className="Eps">  <b className='form2'>Eps</b><Line   data={dataEps} options={op(minEps ,maxEps)}/></Card>
              <Card className="Equity"><b className='form2'>Equity</b>  <Line   data={dataEquity} options={op(minEquity ,maxEquity)}/></Card>
              <Card className="NetOperatingCashFlow"> <b className='form2'>Net Operating Cash Flow</b> <Line   data={dataNetOperatingCashFlow} options={op(minNetOperatingCashFlow ,maxNetOperatingCashFlow)}/></Card>
      
        </React.Fragment>
        )
}
export default lineChart; 