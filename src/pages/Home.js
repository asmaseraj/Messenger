import React from 'react';
import Navbar from "../components/Navbar";
import {useHistory} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";

const data = [{
    id: '1',
    name: 'asma',
    pictureSrc: 'https://img.icons8.com/color-glass/48/ffffff/morty-smith.png',
    message: 'salam',
}, {id: '2', name: 'bahar', message: 'che khabar?'}, {
    id: '2',
    name: 'bahar',
    message: 'che khabar?',
    pictureSrc: "https://img.icons8.com/color-glass/48/ffffff/morty-smith.png",
}, {id: '2', name: 'bahar', message: 'che khabar?',pictureSrc: "https://img.icons8.com/color-glass/48/ffffff/morty-smith.png",},
    {id: '2', name: 'bahar', message: 'che khabar?',pictureSrc: "https://img.icons8.com/color-glass/48/ffffff/morty-smith.png",}]


const Home = () => {

    const router = useHistory();

    const RenderMessage = (data) => (
        <Container style={{border: 'solid 1px'}}>
            <Row>

                <Col md={10}>
                    <Row style={{justifyContent: 'center', alignContent: 'center', display: "flex", cursor: "pointer"}}
                         onClick={() => router.push("/chat", {data: data.name})}>

                        <Col md={3} style={{borderRight: "solid 1px", display: "flex", justifyContent: "center"}}>
                            <img src={data.pictureSrc} />
                        </Col>
                        <Col md={9}>
                            <Row style={{padding: "4px"}}> {data.name}</Row>
                            <Row style={{padding: "4px"}}> {data.message}</Row>

                        </Col>

                    </Row>
                </Col>
                <Col md={2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button variant={"danger"} style={{fontSize: '14px', padding: '4px'}}
                            onClick={() => alert(`${data.name} has been blocked`)}>block</Button>

                </Col>
            </Row>
        </Container>
    )

    return (
        <div>

            <Navbar/>
            <div>
                {data.map((d) => RenderMessage(d))}
            </div>

        </div>
    );
};

export default Home;
