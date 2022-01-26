import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';
const Suggestion = () => {
    return (
        <div>
            <Navbar />
            <Container style={{height: '50vh', border: '4px solid #007bff', color:'black'}}>
                <Row style={{padding:'10px', border:'1px solid black'}}>
                    You have connections with Sara. Do you want to send a friend request?
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                    <Col>
                        <Button variant={"success"} onClick={() => alert(`Friend request has been sent.`)}>Request</Button>
                        </Col>
                        <Col>
                        <Button variant={"danger"} onClick={() => alert(`This user will not be suggested again.`)}>Ignore</Button>
                        </Col>
                    </Row>
                    
                </Row>
                <Row style={{padding:'10px' , border:'1px solid black'}}>
                    You have connections with Mahan. Do you want to send a friend request?
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                    <Col>
                        <Button variant={"success"} onClick={() => alert(`Friend request has been sent.`)}>Request</Button>
                        </Col>
                        <Col>
                        <Button variant={"danger"} onClick={() => alert(`This user will not be suggested again.`)}>Ignore</Button>
                        </Col>
                    </Row>
                </Row>
                <Row style={{padding:'10px' , border:'1px solid black'}}>
                You have connections with Zohre. Do you want to send a friend request?
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                        <Col>
                        <Button variant={"success"} onClick={() => alert(`Friend request has been sent.`)}>Request</Button>
                        </Col>
                        <Col>
                        <Button variant={"danger"} onClick={() => alert(`This user will not be suggested again.`)}>Ignore</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>


        </div>
    );


}


export default Suggestion;