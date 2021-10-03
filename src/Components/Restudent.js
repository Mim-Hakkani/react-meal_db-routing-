import React, { useEffect, useState } from 'react';
import { Col, Container, Row,Card,Button,InputGroup,FormControl} from 'react-bootstrap';
import Meal from './Meal';

const Restudent = () => {
    const[searchText,setSearchText]=useState('');

    const[meals,setMeals]=useState([])

    const handleSearch=(event)=>{
        let SearchTxt = event.target.value;
        setSearchText(SearchTxt);
    }
    
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[searchText]);



    return (
        <div>
        
        <Container>
                <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search Food you want"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={handleSearch}
                        />
                        <InputGroup.Text id="basic-addon2">Search Food</InputGroup.Text>
                </InputGroup>
        </Container>


            <Container>
                <Row>
                    {
                     meals.map(meal=>
                            <Col md={4}>
                                <Meal key={meal.idMeal} meal={meal}>
                            
                                </Meal>
                            </Col>
                       
                       )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Restudent;
