import React, { Component } from 'react';
import "../css/About.css"
import { Row, Col } from "react-bootstrap"
import secondPic from "../Assets/Pic2.jpg"
import { Card, CardDeck  , Container} from "react-bootstrap"
import webDesign from "../Assets/web-design.jpg"
import fullStack from "../Assets/fullstack.png"
import machineLearning from "../Assets/machineLearning.png"
class About extends Component {
  state = {}
  

    render() { 
      return (  
            <div id="about-wrapper" className="mt-5 mb-5">
                <div >
                    <h3 >ABOUT ME</h3>
                </div>
                <div className="mt-5">
                    <Row>
                        <Col>
                            <img src={secondPic} id="second-pic"></img>
                        </Col>
                        <Col id="details-col">
                <h3>I am Quadri Akande</h3>
                <p>Fast load times and lag free interaction is my highest priority.</p>
                <p>My layouts will work on any device, big or small.</p>
                <p>Strong preference for easy to use, intuitive UX/UI.</p>
                <p>Websites don't have to be static, I love making pages come to life.</p>
                        </Col>
            </Row>
                </div>
                <div>
                    <h3 className="mt-5">SERVICES</h3>
                    <div>
         <CardDeck>
  <Card className="services-card">
    <Card.Img variant="top" src={webDesign} />
    <Card.Body>
      <Card.Title>Web Design</Card.Title>
    
    </Card.Body>
    
  </Card>
  <Card className="services-card">
    <Card.Img variant="top" src={fullStack} />
    <Card.Body>
      <Card.Title>Web Applications</Card.Title>
     
    </Card.Body>
    
  </Card>
  <Card className="services-card">
  <Card.Img variant="top" src={machineLearning} />
    <Card.Body>
      <Card.Title>Machine Learning</Card.Title>
    
    </Card.Body>
    
  </Card>
</CardDeck>
                    </div>
                </div>
            </div>
                 );
    }
}
 
export default About;