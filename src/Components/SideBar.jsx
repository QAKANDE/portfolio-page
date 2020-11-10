import React, { Component } from 'react';
import ProfilePicture from "../Assets/Pic.JPG"
import "../css/SideBar.css"
import {Link} from "react-router-dom"

class SideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div id="sidebar">
                <div id="img-wrapper">
                <img src={ProfilePicture} id="profile-picture"></img>
                </div>
                <hr id="break"></hr>
                    <div id="links" className=" d-flex flex-column">
                        <Link to="/">
                    <a>Home</a>
                        </Link>
                           <Link to="/about">
                    <a>About</a>
                        </Link>
                        <Link to="/resume">
                    <a>Resume</a>
                        </Link>
                        <Link to="/portfolio">

                    <a>Portfolio</a>
                        </Link>
                        <Link to="/contact">

                    <a>Contact</a>
                        </Link>
                </div>

                <hr></hr>
            </div>
                </>
         );
    }
}
 
export default SideBar;