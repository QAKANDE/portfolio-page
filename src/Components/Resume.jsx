import React, { Component } from 'react';
import "../css/Resume.css"
import { Row, Col  , ProgressBar} from "react-bootstrap"
class Resume extends Component {
    state = {  }
    render() { 
        return ( 
             <>
                <div id="resume-wrapper">
                    <h3>MY SKILLS</h3>
                    <div id="skills-div">
                        <Row>
                            <Col>
                                <ul className="skills-list">
                                    <li className="mt-5">
                                        <h5>HTML5</h5>
                                        <ProgressBar now={90} />
                                    </li>
                                    <li className="mt-5">
                                        <h5>JavaScript</h5>
                                        <ProgressBar now={70} />
                                      </li>
                                    <li className="mt-5">
                                        <h5>React.js</h5>
                                        <ProgressBar now={75} />
                                    </li>
                                    <li className="mt-5">
                                         <h5>Machine Learning Using Python</h5>
                            <ProgressBar now={40} />
                                      </li>
                                </ul>
                            </Col>
                            <Col>
                             <ul className="skills-list">
                                      <li className="mt-5"><h5>CSS3</h5>
                                        <ProgressBar now={90} /></li>
                                      <li className="mt-5"><h5>MongoDb</h5>
                                        <ProgressBar now={70} /></li>
                                      <li className="mt-5"><h5>Express.js</h5>
                                        <ProgressBar now={70} /></li>
                                </ul>
                            </Col>
                        </Row>
                      
                    </div>
                </div>
                </>
         );
    }
}
 
export default Resume;