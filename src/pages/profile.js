import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from "../components/Navbar";
import { Row, Col } from 'react-bootstrap';
const Setting = () => {
    return (
        <div>
            <Navbar />
            <div style={{ height: '50vh', border: '4px solid #007bff' }}>
                <Container style={{ paddingTop:'10px',height:'100%'}}>
                    <Row style={{}}>
                        <Col sm={9} style={{fontSize:'30px', color:'black'}}>
                            Asma Seraj
                            <br></br>
                            <Row style={{marginLeft:'2px', fontSize:'20px', color:'gray'}}>

                                @asmaseraj

                            </Row>
                        </Col >
                        <Col sm={3}>
                        <img src="https://img.icons8.com/dusk/64/000000/person-female.png"/>
                        </Col>
                    </Row>


                </Container>
            </div>
        </div>
    );
};

export default Setting;
