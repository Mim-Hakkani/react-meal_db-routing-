import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Container, Row,Card,Button} from 'react-bootstrap';


const SingleFood = () => {
    const {singlefood} =useParams();

    const[details,SetDetails]=useState([])

    useEffect(()=>{
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${singlefood}`)
      .then(res=>res.json())
      .then(data=>SetDetails(data.meals))

      
    },[])

 
   
    return (
        <div>
                    <h1>losda </h1>
                    {
                        details.map(dt=>
                         <Card style={{width:'600px',margin:'0 auto'}}>
                            <img src={dt.strMealThumb} alt=""/>
                            <h1>Title: {dt.strMeal}</h1>
                            <p>{dt.strInstructions}</p>
                            <p>Category:{dt.strCategory}</p>
                         </Card>)
                      
                    }

              
                          
        </div>
    );
};

export default SingleFood;