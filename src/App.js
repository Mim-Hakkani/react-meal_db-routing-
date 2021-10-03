import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Home from './Components/Home/Home';
import About from './Components/About';
import Restudent from './Components/Restudent';
import { BrowserRouter,Switch,Route, NavLink } from 'react-router-dom';
import Notfound from './Components/Notfound';
import SingleFood from './Components/SingleFood/SingleFood';

function App() {
  return (
    <div className="App">
       <Container>
         <Row>
           <Col md={12}>
              <BrowserRouter>
              <ul>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/restudent">Restudent</NavLink>
                <NavLink to="/gallery">Gallery</NavLink></ul>

                  <Switch>
                      <Route exact path="/">
                         <Home></Home>
                      </Route> 

                      <Route exact path="/home">
                      <Restudent></Restudent>
                      </Route> 

                      <Route exact path="/about">
                         <About></About>
                      </Route>

                      <Route exact path="/Restudent">
                         <Restudent></Restudent>
                      </Route>

                      <Route exact path="/Restudent/:singlefood">
                         <SingleFood></SingleFood>
                      </Route>

                      <Route exact path="*">
                        <Home></Home>
                      </Route> 
                  </Switch>
              
              </BrowserRouter>
           </Col>
         </Row>
       </Container>
    </div>
  );
}

export default App;
