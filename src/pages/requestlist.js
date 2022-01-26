import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
const Requestlist = () => {
    return (
        <div>
            <Navbar />
            <Container style={{height: '50vh', border: '4px solid #007bff', color:'black'}}>
                <Row style={{padding:'10px', border:'1px solid black'}}>
                    Nazanin has requested to be your friend.
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                        <Col>
                        <Button variant={"success"} onClick={() => alert(`Accepted`)}>Accept</Button>
                        </Col>
                        <Col>
                        <Button variant={"danger"} onClick={() => alert(`Declined`)}>Decline</Button>
                        </Col>
                    </Row>
                    
                </Row>
                <Row style={{padding:'10px' , border:'1px solid black'}}>
                    Erfan has requested to be your friend.
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                        <Col>
                        <Button variant={"success"} onClick={() => alert(`Accepted`)}>Accept</Button>
                        </Col>
                        <Col>
                        <Button variant={"danger"} onClick={() => alert(`Declined`)}>Decline</Button>
                        </Col>
                    </Row>
                </Row>
                <Row style={{padding:'10px' , border:'1px solid black'}}>
                    Group 2 has invited you to join.
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                        <Col>
                        <Button variant={"success"} onClick={() => alert(`Accepted`)}>Accept</Button>
                        </Col>
                        <Col>
                        <Button variant={"danger"} onClick={() => alert(`Declined`)}>Decline</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>


        </div>
    );


}


export default Requestlist;