
import {Card,Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Meal = (props) => {
    const{idMeal,strMealThumb,strMeal,strInstructions}=props.meal
    
    const history = useHistory();
    const handleDetails=()=>{
      history.push(`/Restudent/${idMeal}`)
  
   } 
    return (
        <div>
             
             <Card style={{marginBottom:'30px'}}>
                            <Card.Img variant="top" src={strMealThumb} />
                            <Card.Body>
                              <Card.Title>{strMeal}</Card.Title>
                              <Card.Text>
                                   {strInstructions.slice(0, 150)}
                              </Card.Text>
                              <Button variant="primary" onClick={handleDetails}>Go somewhere</Button>
                            </Card.Body>
                          </Card>
        </div>
    );
};

export default Meal;