import { scaleService } from 'chart.js';
import React, { Component} from 'react'
import { Doughnut } from 'react-chartjs-2';



const DoughnutChart = props => {
const data = {

    labels:['Jan','Feb','Mar','Apr','May'],
    datasets:[
        {
            label:'Sale for 2020(M)',
            data:[3,2,2,1,5],
          
            backgroundColor:['rgba(255,99,205,1)','rgba(255,205,86,1)','rgba(54,162,235,1)','rgba(255,159,64,1)','rgba(153,102,255,1)'],
          
        }
      
    ]
}
const options ={

title:{
display:true,
text:"Doughnut Chart"
}

}
    return(
        <div>
      <Doughnut data={data} options={options}/>


        </div>)
}
export default DoughnutChart; 