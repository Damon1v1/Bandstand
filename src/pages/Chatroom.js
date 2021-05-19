import React from "react";
//import Container from "../components/Container";
import { Row, Col } from "react-bootstrap";
// import Card from "../components/Card";
//import Container from "../components/Container";
//import Row from "../components/Row";
import Navbar from "../components/Navbar";
// import Col from "../components/Col";
//import List from "../components/List";
//import Card from 'react-bootstrap/Card';
//import ChatWindow from "../components/ChatWindow";
//import Media from 'react-bootstrap/Media';
import "./style.css";
//import Image from 'react-bootstrap/Image';
//import { Link } from "react-router-dom";
import SpotifyPlayer from "../components/SpotifyPlayer";
import Panechat from "./Panechat";
import PaneSidebar from "../components/PaneSidebar";
import Footer from "../components/Footer";

function Chatroom() {

    return (

        <div style={{width: '100%', height: '90%'}}>
        
            <Navbar />       
            <br />
            <br /> 
            <Row className="main-row row justify-content-center">
               
                <Col md={9}>
                    <br />
                    <Row className="Row1 row justify-content-center" >
                        <div className="media">
                        {/* <Button variant="danger" size="lg"> */}
                                <SpotifyPlayer></SpotifyPlayer>
                                        

                        {/* <div className="mb-2 ">
                                        
                                    </div>  */}
                            {/* <Media> */}
                            
                                {/* <img
                                    width={200}
                                    height={200}
                                    className="mr-3"
                                    src="music.gif"
                                    alt="Generic placeholder"
                                /> */}
{/*                             
                                <Media.Body>
                                    
                                </Media.Body>
                        
                            </Media> */}
                        </div>

                    </Row>



                    <Row className="row justify-content-center">
                        <div className="side">
                            <PaneSidebar> </PaneSidebar>
                        </div>
                    </Row>



                    <Row size="row justify-content-center" >
                       <Col className="chat">
                            <Panechat /> 
                        </Col>
                    </Row>

                </Col>

            </Row>
            
            <Footer /> 
        </div>
    );
}



export default Chatroom;
