import React, { Component } from 'react';
import "../css/About.css"
import { Row, Col } from "react-bootstrap"
import secondPic from "../Assets/Pic2.jpg"
import {Card , CardDeck} from "react-bootstrap"
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
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
                    </div>
                </div>
            </div>
                 );
    }
}
 
export default About;