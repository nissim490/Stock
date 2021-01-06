import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Ticker2 from './data2.js'
import Ticker from './data.js'
export default function FreeSolo(props) {
  const [textState, setTextState] = useState('');
  
  const [company, setCompany] = useState('');
  const updateCompany =(e)=>{
    const aa =new Map
    
     Ticker.TickerSymbols.map(function (obj) {
       aa.set(obj.name,obj.symbol) ;
    
    });

    console.log(aa.get(e.target.value));
              console.log(e.target.value);
              props.s(aa.get(e.target.value))
    }   
  return (
    <div style={{ width: 300 }}>
     
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
     
        options={Ticker2.TickerSymbols.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [

];
