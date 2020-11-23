import React, { Component } from 'react';
import "../css/Resume.css"
import { Row, Col  , ProgressBar} from "react-bootstrap"
class Resume extends Component {
    state = {  }
    render() { 
        return ( 
             <>
                <div id="resume-wrapper" className="container mt-5 mb-5">
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
                        <h3 className="mt-5 mb-5">RESUME</h3>
                        <h4 className="mt-5 mb-5">Working Experience</h4>
                        <div id="resume-summary">
                            <ul>
                                <li className="mt-3 mb-3">
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

                     <div className="mt-5">
                        <h3 className="mt-5 mb-5">Education</h3>
                        <div id="resume-summary">
                            <ul>
                                    <li className="mt-3 mb-3">
                                    <Row>
                                        <Col xl={3}>
                                        <h5>2019 - 2020</h5>
                                        </Col>
                                        <Col xl={9}>
                                            <div className="flex-row">
                                                <h3>Msc Computer Science</h3>
                                                <h5>University Of East London</h5>
                                                <p>Grade - Distinction.</p>
                                            </div>
                                        </Col>
                                   </Row>
                                </li>
                                   <li className="mt-3 mb-3">
                                    <Row>
                                         <Col xl={3}>
                                        <h5>Apr 2020 - Nov 2020</h5>
                                        </Col>
                                        <Col xl={9}>
                                            <div className="flex-row">
                                                <h3>Full Stack Development</h3>
                                                <h5>Strive School</h5>
                                             
                                            </div>
                                        </Col>
                                   </Row>
                                </li>
                                    <li className="mt-3 mb-3">
                                    <Row>
                                         <Col xl={3}>
                                        <h5>2013 - 2018</h5>
                                        </Col>
                                        <Col xl={9}>
                                            <div className="flex-row">
                                                <h3>Bsc Computer Science</h3>
                                                <h5>Babcock University</h5>
                                                <p>Grade - Second Class Upper Division.</p>
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