import React, { Component } from 'react';
import "../css/Resume.css"
import { Row, Col  , ProgressBar} from "react-bootstrap"
class Resume extends Component {
    state = {  }
    render() { 
        return ( 
             <>
                <div id="resume-wrapper" className="container">
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
                    <div className="mt-4">
                        <h3>RESUME</h3>
                        <h4>Working Experience</h4>
                        <div id="resume-summary">
                            <ul>
                                <li>
                                    <Row>
                                        <Col xl={3}>
                                        <h5>2019 - 2020</h5>
                                        </Col>
                                        <Col xl={9}>
                                            <div className="flex-row">
                                                <h3>IT Technical Support Officer</h3>
                                                <h5>Wrights Consultings Ltd</h5>
                                                <p>Displayed proficiency in the use of application software by using and configuring SAP in the management of the company’s finance, logistics and human resources. This led to a 15% increase in company functionality.</p>
                                            </div>
                                        </Col>
                                   </Row>
                                </li>
                           </ul>
                        </div>
                    </div>
                </div>
                </>
         );
    }
}
 
export default Resume;