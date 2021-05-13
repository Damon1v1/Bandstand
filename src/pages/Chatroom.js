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
import ChatWindow from "../components/ChatWindow";
import Media from 'react-bootstrap/Media';
import "./style.css";
import Image from 'react-bootstrap/Image';
import {Link } from "react-router-dom";







function Chatroom () {

   return (

        <div>
            <Navbar />

                <Row>
                    <Col className="Col1" md={{ span: 2 }}>
                        <br/>
                        
                        <Image className="Image" src="user.jfif" width={150} height={150} rounded />
                        
                        <div className="name"><strong>Name of User</strong></div><br/>
                        <div>
                            <Link to="#">
                              <button type="submit" className="btn btn-block">Home</button>
                            </Link> <br/>
                            <Link to="#">
                              <button type="submit" className="btn btn-block">Profile</button>
                            </Link> <br/>
                            <Link to="#">
                              <button type="submit" className="btn btn-block">Settings</button>
                            </Link>
                        </div><br/>
                        <div>
                            <Link to="#">
                              <button type="submit" className="btn btn-block ">Logout</button>
                            </Link>
                        </div>

                            
                        {/* <Card style={{ width: '10rem'}}>
                            <Card.Img variant="top" src="" rounded  />
                
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card> */}
                    </Col>

                    <Col  md={{ span: 10}}>

                        <Row className="Row1" size="md-12">
                             
                             <br/>   
                          
                            <Media>
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="music.gif"
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                    </p>
                                </Media.Body>
                            </Media>
                            
                        </Row>
                        <Row>
                            <Col sm={9}>
                               <ChatWindow></ChatWindow>
                            </Col>

                            <Col className="Col2" sm={3}><h2>Lyrics of the current song</h2></Col>
                        </Row>
                        
                    </Col>
                       
                </Row>
        
        </div>
   );
}



export default Chatroom;
