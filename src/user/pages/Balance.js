
import Autocomplete from "react-autocomplete";
import  MyTable from "../components/MyTable.js"
import axios from 'axios'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Card from '../../shared/components/UIElements/Card';
import React, { useEffect, useState } from 'react';
import '../../shared/components/Navigation/MainNavigation.scss';
import '../../css/style.css'
import LineChart from'../components/lineChart';

import BarChart from'../components/BarChart';
import '../components/lineChart.scss';
import './Balance.scss';
import Mytext from'../components/mytext'
import 'react-autocomplete-input/dist/bundle.css';
import Ticker from '../../data/data2.js'
import Ticker2 from '../../data/data.js'


const Balance = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [loadedUsers, setLoadedUsers] = useState();
  const [value, setvalue] = useState();
  const [result, setResult] = useState("TSLA");
  const [value1, setvalue1] = useState("tesla");
  const [dummy, setDummy] = useState(1);
  
  const a =  (b)=>{

    setResult(b)
  
  }
  const aa =new Map

  Ticker2.TickerSymbols.map(function (obj) {
    aa.set(obj.name,obj.symbol) ;})

  
 
  let tempMax=15
  
    useEffect(() => {
     
      setIsLoading(true);
      const fetchUsers = async () => {
        try {
          


          
           ///HTTP REQUEST
           const  responseData= await  axios({
            method: "get",
            url:  `https://stb-yn.herokuapp.com/api/v1/Balance/${result}`,
            
            
          })
          setvalue1(value)
          setLoadedUsers(responseData.data);
          setIsLoading(false);
        } catch (err) {setIsLoading(false);}
      };
      fetchUsers();
    }, [dummy]);
    let year=[]
    console.log(loadedUsers);
    if(!!loadedUsers){
    for (var key in loadedUsers.growth) {
      if (loadedUsers.growth.hasOwnProperty(key)) {
        if(tempMax> loadedUsers.growth[key].length)
        tempMax =  loadedUsers.growth[key].length
         
      }
    }
   
    for(var i=0;i<tempMax;i++)
    year.push(2020-i)
    year =year.reverse();}
    const menuStyle = {
      display: 'block',
      border: ' none',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '0.5rem 2rem',
      fontSize: '1.5rem',
       position: 'none', 
      overflow: 'auto',
      fontfamily: "inherit",
      maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
      transition: "all .3s",
      zIndex: 100,
      borderBottom:'3px solid #3b63d1',
    };
  return (
    <React.Fragment>
    
{isLoading && ( <div className="center"> <LoadingSpinner /> </div> )}            
   {!isLoading &&!!loadedUsers&& <div class="u-center-text u-margin-bottom-big">
   <div   className="form">
      <b className="icon">
      <i class="fas fa-search"> &nbsp;</i>
     </b>
        <Autocomplete
          
        inputProps={{ style: menuStyle, 
          placeholder:" Company"}}
        items={Ticker.TickerSymbols}
        shouldItemRender={(item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item}
        renderItem={(item, isHighlighted) =>
          <div
          style={{ position: 'none',  color:'black',background: isHighlighted ? '#3b63d1' : 'white' }}
          >
            <b>{item}</b>
            
          </div>
          
        }
      
  value={value}
  onChange={(e) => setvalue(e.target.value)}
  onSelect={ (val)=>{
    setvalue(val)
    setResult( aa.get(val))
    setDummy(dummy+1)

        }}
  
/>

</div>
   {!isLoading && !value&&<h2 class="heading-secondary">
                   {value}  Tesla- 
                    </h2>}
   {!isLoading &&!!loadedUsers&& <h2 class="heading-secondary">
                   {value1}({result})
                    </h2>}
        </div>}
         
    {!isLoading &&!!loadedUsers&&<Card className="MyTable"><MyTable items={loadedUsers}  maxYaer={year}/> </Card>}
     
 <div className="cahrtContiner">  
        {!isLoading &&!!loadedUsers&&<Mytext result={result}/>} 
          {!isLoading &&!!loadedUsers&&<Card className="BarChart"><BarChart items={loadedUsers} maxYaer={year}/></Card>},
          
 </div>              
 <div class="u-center-text u-margin-bottom-big">
 <div class="u-center-text u-margin-bottom-big">
            {!isLoading &&!!loadedUsers&&<h1 className="heading-secondary" > <i class="fas fa-chart-line"></i>  &nbsp;Growth Stock</h1>}
                    
 </div>

  </div>
               
  <div className="LinerCahrtContiner">  
  
  {!isLoading &&!!loadedUsers&&<LineChart items={loadedUsers} maxYaer={year}/>}
   </div>



                  
   
</React.Fragment>
  );
};

export default Balance;