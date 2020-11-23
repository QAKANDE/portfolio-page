import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Form, Col, Button, Row } from "react-bootstrap"
import "../css/Contact.css"
class Contact extends Component {
    state = {
        contactMe: {        
            fromName: "",
            message: "",
            email:""
        }
    }

    updateDetails = (event) => {
    let contactMe = this.state.contactMe;
    let id = event.currentTarget.id;
    contactMe[id] = event.currentTarget.value;
    this.setState({
      contactMe,
    });
  };
    
    sendEmail = (e) => {
        e.preventDefault()
        const templateParams = {
      from_name: this.state.contactMe.fromName,
      to_name: "Quadri",
    message: this.state.contactMe.message,
    reply_to:  this.state.contactMe.email
    };
emailjs.send("service_ia5l4o9", "template_ymws2pm", templateParams, "user_wvm45ao5pnfJi83cs73sz")
            .then(function (response) {       
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
            });
        
        this.setState({
            contactMe: {        
            fromName: "",
            message: "",
            email:""
        }
        })
     

    }
    render() { 
        return ( 
             <>
            <div className="container mt-5 mb-5" id="contact-wrapper">
              <Row>
                <Col>
                  <Form  >
                   <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="fromName">Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                id="fromName"
                onChange={(e) => this.updateDetails(e)}
                value={this.state.contactMe.fromName}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                placeholder="Enter Your Email Address "
                type="email"
                id="email"
                onChange={(e) => this.updateDetails(e)}
                value={this.state.contactMe.email}
              />
            </Form.Group>
                        </Form.Row>
                            <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                placeholder="Enter Your Message"
                type="text"
                id="message"
                onChange={(e) => this.updateDetails(e)}
                value={this.state.contactMe.message}
              />
            </Form.Group>
                        </Form.Row>
                        <Button onClick={(e) => this.sendEmail(e)}>Send Message</Button>
                    </Form>
                </Col>
                <Col>
                   <div className="mt-4 text-center" className="contact-me">
                            <a href=""target="_blank">

                            <i class="fa fa-instagram mx-3 fa-3x contact-icons"></i>
                            </a>
                           
                            <a href="https://www.linkedin.com/in/quadri-akande-991b6a197/"target="_blank"> <i class="contact-icons fa fa-linkedin mx-3  fa-3x"></i></a>
                             <a href="https://github.com/QAKANDE"target="_blank"><i class="fa fa-github mx-3 fa-3x contact-icons"></i></a>
                        </div>
                </Col>
              </Row>
                    
                </div>
                </>
         );
    }
}
 
export default Contact;