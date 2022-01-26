import React from 'react';
import Navbar from "../components/Navbar";
import { Row, Col, Container } from 'react-bootstrap';
const Setting = () => {
    return (
        <div>
            <Navbar />
            <div style={{ height: '50vh', border: '4px solid black' }}>
                <Container style={{  height: '100%' }}>
                    <Row style={{paddingTop: '10px',justifyContent:'center', alignItems:'center', paddingBottom:'5px', border:'1px solid black'}}>
                        <Col sm={3} style={{borderRight:'1px solid black'}}>
                        <img src="https://img.icons8.com/ios-filled/64/000000/group-foreground-selected.png"/>
                        </Col>
                        <Col sm={9}>
                        New Group
                        </Col>
                    </Row>
                    <Row style={{paddingTop: '10px',justifyContent:'center', alignItems:'center', paddingBottom:'5px', border:'1px solid black'}}>
                        <Col sm={3} style={{borderRight:'1px solid black'}}>
                        <img src="https://img.icons8.com/ios/64/000000/invite.png"/>
                        </Col>
                        <Col sm={9}>
                        Requests
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Setting;
