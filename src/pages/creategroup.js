import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import {Button, Row, Col, Container} from "react-bootstrap";
const Creategroup = () => {
    return(

        <div>
            <Navbar/>
            <div style={{height:'50vh', border: '4px solid #007bff'}}>
                <Container>
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                        Enter the name
                    </Row>
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                        <input type="text"></input>
                    </Row>
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px"}}>
                        <Button variant="success">Create</Button>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Creategroup;