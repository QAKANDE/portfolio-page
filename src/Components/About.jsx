import React, { Component } from 'react';
import "../css/About.css"
import { Row, Col } from "react-bootstrap"
import secondPic from "../Assets/Pic2.jpg"
import { Card, CardDeck } from "react-bootstrap"
import webDesign from "../Assets/web-design.jpg"
import fullStack from "../Assets/fullstack.png"
import machineLearning from "../Assets/machineLearning.png"
class About extends Component {
    state = {  }
    render() { 
        return (  
            <div id="about-wrapper" className="container">
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
                            <p>I am a full stack developer, I am a frontend web developer. I can provide clean code and pixel perfect design.
                                I also make website more & more interactive with web animations.</p>
                            <p>Languages : English , French</p>
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
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="services-card">
    <Card.Img variant="top" src={fullStack} />
    <Card.Body>
      <Card.Title>Web Applications</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className="services-card">
  <Card.Img variant="top" src={machineLearning} />
    <Card.Body>
      <Card.Title>Machine Learning</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
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