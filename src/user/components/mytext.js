import React, { useEffect, useState } from 'react';
import Card  from 'react-bootstrap/Card';
import axios from 'axios'


const Mytext = props => {
    const [loadedUsers2, setLoadedUsers2] = useState();
  useEffect(() => {
     
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
      params: {
        q: `${props.result}`,
        pageNumber: '1',
        pageSize: '10',
        autoCorrect: 'true',
        fromPublishedDate: 'null',
        toPublishedDate: 'null'
      },
      headers: {
        'x-rapidapi-key': '4c62693e24msh2f7a1f996bca996p113c2cjsnf689dfa6724c',
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setLoadedUsers2(response.data.value);
      console.log(response.data.value);
    }).catch(function (error) {
      console.error(error);
    });
    
  }, []);
  let c=0
  let finalArray2=''
  let finalArray=''
  if(!!loadedUsers2){

    finalArray2 = loadedUsers2.map(function (obj) {
      return obj.url ;
    });
   finalArray = loadedUsers2.map(function (obj) {
    return obj.title ;
  })}
  console.log(finalArray2);
  console.log(finalArray);


  return (

    
      <div>
        <Card className="BarChart2"style={{ width: '50rem',height:'100rem' }}>
  <Card.Img variant="top" src='https://images.unsplash.com/photo-1529243856184-fd5465488984?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1369&q=80' />
  <Card.Body>
    <Card.Title> <b className='form2'>{props.result} NEWS </b></Card.Title>
   { finalArray&& <Card.Text >
    {finalArray.map(function (obj){
c=c+1
return <div>
  <p><b className ='icon2'> <i class="fas fa-newspaper"></i> &nbsp;{obj}</b></p>
</div> 

    })}
   
    </Card.Text>}
    
  </Card.Body>
  <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
</Card>
     {/*    <h1 for="title"> </h1>
        <textarea class=" comment-box" id="1" rows="1">
       
        </textarea> */}
      </div>
  );
        }

export default Mytext ;
