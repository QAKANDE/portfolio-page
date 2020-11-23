import React, { Component } from 'react';
import { Card , Row , Col} from "react-bootstrap"
import ArchiKraft from "../Assets/archi-kraft-consults.png"
import netflix from "../Assets/netflixLogo.jpg"
import linkedIn from "../Assets/LinkedinLogo.jpg"
import neural from "../Assets/neuralNetwork.jpg"
import fraudDetection from "../Assets/frauddetection.png"
import cloudComputing from "../Assets/aws.png"
import "../css/Portfolio.css"


class Portfolio extends Component {
    state = {  }
    render() { 
        return ( <>
            <div id="portfolio-wrapper" className="container mt-5 mb-5">
                <h4 className="mb-4">PORTFOLIOS</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-1 row-cols-xl-3 mb-4 text-center">
              <a className="portfolio-anchor" href="https://q-investment-home-front-end.herokuapp.com/" target="as_blank">
  <Card className="portfolio-card" as={Col}>
    <Card.Img variant="top" src={ArchiKraft} />
    <Card.Body>
      <Card.Title>CrowdFunding Platform</Card.Title>
      
    </Card.Body>
                    </Card>
              </a>
    
                    <a className="portfolio-anchor" href="https://github.com/QAKANDE/StriveModule4/tree/master/qflix" target="as_blank">                   
  <Card className="portfolio-card" as={Col}>
    <Card.Img variant="top" src={netflix} />
    <Card.Body>
      <Card.Title>Netflix Replica</Card.Title>
      
    </Card.Body>
    
  </Card>
                    </a>
                    <a className="portfolio-anchor" href="https://github.com/QAKANDE/Linkedin-benchmark" target="as_blank">                     
  <Card className="portfolio-card" as={Col}>
    <Card.Img variant="top" src={linkedIn} />
    <Card.Body>
      <Card.Title>LinkedIn Replica</Card.Title>
      
    </Card.Body>
    
                    </Card>
                </a>
                       <a className="portfolio-anchor" href="https://drive.google.com/file/d/1LzKH6sfq-WrmY4-OrU-ffZe_yepaBrHq/view?usp=sharing" target="as_blank">
                        
                    <Card className="portfolio-card" as={Col}>
    <Card.Img variant="top" src={neural} />
    <Card.Body>
      <Card.Title>Image Classification</Card.Title>
      
    </Card.Body>
    
                    </Card>
                </a>
                       <a className="portfolio-anchor" href="https://drive.google.com/file/d/1F747vDu2JdVdOGtqaK3mD8CvgUOVIlUI/view?usp=sharing" target="as_blank">
                        
                    <Card className="portfolio-card" as={Col}>
    <Card.Img variant="top" src={fraudDetection} />
    <Card.Body>
      <Card.Title>Detecting Fraud</Card.Title>
      
    </Card.Body>
    
                    </Card>
                </a>
                       <a className="portfolio-anchor" target="as_blank">
                        
                              <Card className="portfolio-card" as={Col}>
    <Card.Img variant="top" src={cloudComputing} />
    <Card.Body>
      <Card.Title>Cloud Architecture</Card.Title>
     
    </Card.Body>
    
                    </Card>
                </a>
                          </Row>                          
                </div>
                </> );
    }
}
 
export default Portfolio;