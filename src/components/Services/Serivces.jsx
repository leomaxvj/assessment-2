import React ,{useState,useEffect } from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';


function Serivces({values}) {
    const [News, setNews] = useState([])
    console.log(News[0],"AAA")
    useEffect(() => {
       console.log(values.length,"manoj")
      //  if(values.toLowerCase()==="tesla"){
      //   axios.get('https://newsapi.org/v2/everything?q=Tesla&apiKey=9c5a60e64c0341619089c76aeab976b4')
      //   .then((response) => 
      //       setNews(response.data.articles)
      //       // console.log(response)s
      //   ) 
        
      //  }
      //  else if(values.toLowerCase()==="cricket"){
      //   axios.get('https://newsapi.org/v2/everything?q=Cricket&apiKey=9c5a60e64c0341619089c76aeab976b4')
      //  .then((response) => 
      //      setNews(response.data.articles)
      //      // console.log(response)s
      //  ) 
      //  }

       axios.get(`https://newsapi.org/v2/everything?q=${values}&apiKey=9c5a60e64c0341619089c76aeab976b4`)
       .then((response) => 
           setNews(response.data.articles)
           // console.log(response)s
       ) 
       

      
    },[values])
const leo=News.map((max) => {
    return(
       
<div  className="Card col-1" style={{height:"660px" ,padding: "40px 40px 50px 20px"}} >
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={max.urlToImage} />
      <Card.Body>
        <Card.Title>{max.title}</Card.Title>
        <Card.Text>
          {max.description}
        </Card.Text>
        <Button variant="primary" ><a href={max.url}>Learn More</a></Button>
      </Card.Body>
    </Card>
    
</div>

    )
})


  return (
    <div className='row'>{leo}</div>

  )
}

export default Serivces;