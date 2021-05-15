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
import { Link } from "react-router-dom";
//import Container from "component/Container";



function Chatroom() {

    return (

        <div >
            <Navbar />

            <Row>
                <Col className="Col1" md={{ span: 2 }}>
                    <br />

                    <Image className="Image" src="user.jfif" width={150} height={150} rounded />

                    <div className="name"><strong>Name of User</strong></div><br />
                    <div>
                        <Link to="#">
                            <button type="submit" className="btn btn-block">Profile</button>
                        </Link> <br />
                        <Link to="#">
                            <button type="submit" className="btn btn-block">Settings</button>
                        </Link>
                    </div><br />
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

                <Col md={{ span: 10 }}>

                    <Row className="Row1" size="md-12">

                        <br />

                        <Media>
                            <img
                                width={200}
                                height={200}
                                className="mr-3"
                                src="music.gif"
                                alt="Generic placeholder"
                            />
                           
                            <Media.Body>
                                <h5>Now Playing...</h5>
                                <iframe src="https://open.spotify.com/embed/track/4jDmJ51x1o9NZB5Nxxc7gY" width="800" height="111" frameborder="0" allowtransparency="true" allow="encrypted-media" title="play"></iframe>
                            </Media.Body>
                            
                        </Media>

                    </Row>
                    <Row>
                        <Col sm={9}>
                            <ChatWindow></ChatWindow>
                        </Col>

                        <Col className="Col2" sm={3} ><div>
                            Time can never mend
                            The careless whisper of a good friend
                            To the heart and mind
                            If your answer's kind
                            There's no comfort in the truth
                            Pain is all you'll find
                            I should have known better, yeah
                            I feel so unsure
                            As I take your hand and lead you to the dance floor
                            As the music dies
                            Something in your eyes
                            Calls to mind a silver screen
                            And all its sad goodbyes
                            I'm never gonna dance again
                            Guilty feet have got no rhythm
                            Though it's easy to pretend
                            I know you're not a fool
                            I should have known better than to cheat a friend
                            And waste a chance that I'd been given
                            So I'm never gonna dance again
                            The way I danced with you
                            Time can never mend
                            The careless whisper of a good friend
                            To the heart and mind
                            If your answer's kind
                            There's no comfort in the truth
                            Pain is all you'll find
                            I'm never gonna dance again
                            Guilty feet have got no rhythm
                            Though it's easy to pretend
                            I know you're not a fool
                            I should have known better than to cheat a friend
                            And waste a chance that I'd been given
                            So I'm never gonna dance again
                            The way I danced with you
                            Never without your love What am I without your love?
                            Tonight the music seems so loud
                            I wish that we could lose this crowd
                            Maybe it's better this way
                            We'd hurt each other with the things we want to say
                            We could have been so good together,
                            We could have lived this dance forever
                            But now, who's gonna dance with me?
                            Please stay
                            I'm never gonna dance again
                            Guilty feet have got no rhythm
                            Though it's easy to pretend
                            I know you're not a fool
                            I should have known better than to cheat a friend
                            And waste a chance that I'd been given
                            So I'm never gonna dance again
                            The way I danced with you
                            Now that you're gone
                            Now that you're gone
                            Now that you're gone
                            What I did that was so wrong?
                            So wrong that you had to leave me alone?
                            </div>
                        </Col>
                    </Row>

                </Col>

            </Row>

        </div>
    );
}



export default Chatroom;
