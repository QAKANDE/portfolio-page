import React, { Component } from 'react';
import "../css/Main.css"

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div id="main">
                    <div id="center">
                        <h1>Hello , hola , Bonjour , Ciao , नमस्ते !  </h1>
                        <h2 className="mt-4">I'm Quadri Akande</h2>
                        <h3 className="mt-4">I am a full stack developer.</h3>
                        <h3 className="mt-4">I use MongoDb , Express , React , Node <br></br> To Create Beautiful and Efficient Web Applications</h3>
                        <div id="icons">
                            <a href=""target="_blank">

                            <i class="fa fa-instagram mx-3 fa-3x"></i>
                            </a>
                           
                            <a href="https://www.linkedin.com/in/quadri-akande-991b6a197/"target="_blank"> <i class="fa fa-linkedin mx-3  fa-3x"></i></a>
                             <a href="https://github.com/QAKANDE"target="_blank"><i class="fa fa-github mx-3 fa-3x"></i></a>
                        </div>
                    </div>
                </div>

                </>
         );
    }
}
 
export default Main;