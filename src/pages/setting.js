import React from 'react';
import Navbar from "../components/Navbar";
import { Button, Row, Col, Container } from 'react-bootstrap';
import Creategroup from './creategroup';
import Modal from "react-bootstrap/Modal";



const Setting = () => {
    return (
        <div>
            <Navbar />
            <div style={{ height: '50vh', border: '4px solid #007bff' }}>
                <Container style={{ height: '100%', backgroundColor: 'white' }}>
                    <Row style={{
                        paddingTop: '10px', justifyContent: 'center', alignItems: 'center',
                        paddingBottom: '5px', border: '1px solid black', cursor: 'pointer'
                    }}
                    >
                        <Col sm={3} style={{ borderRight: '1px solid black' }}>
                            <img src="https://img.icons8.com/ios-filled/64/000000/group-foreground-selected.png" />
                        </Col>
                        <Col sm={9}>
                            <Button href="./creategroup" style={{ backgroundColor: 'white', color: 'black', border: "2px ", width: "100%" }}>New group</Button>

                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '10px', justifyContent: 'center', alignItems: 'center', paddingBottom: '5px', border: '1px solid black' }}>
                        <Col sm={3} style={{ borderRight: '1px solid black' }}>
                            <img src="https://img.icons8.com/ios/64/000000/invite.png" />
                        </Col>
                        <Col sm={9}>
                            <Button href="./requestlist" style={{ backgroundColor: 'white', color: 'black', border: "2px ", width: "100%" }}>Requests</Button>

                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '10px', justifyContent: 'center', alignItems: 'center', paddingBottom: '5px', border: '1px solid black' }}>
                        <Col sm={3} style={{ borderRight: '1px solid black' }}>
                            <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/64/000000/external-search-seo-dreamstale-lineal-dreamstale-7.png" />
                        </Col>
                        <Col sm={9}>
                            <Button href='./search' style={{ backgroundColor: 'white', color: 'black', border: "2px ", width: "100%" }}>Search</Button>

                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '10px', justifyContent: 'center', alignItems: 'center', paddingBottom: '5px', border: '1px solid black' }}>
                        <Col sm={3} style={{ borderRight: '1px solid black' }}>
                        <img src="https://img.icons8.com/pastel-glyph/64/000000/add-user-male--v2.png"/>                        </Col>
                        <Col sm={9}>
                            <Button href='./suggestion' style={{ backgroundColor: 'white', color: 'black', border: "2px ", width: "100%" }}>Suggestions</Button>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Setting;
