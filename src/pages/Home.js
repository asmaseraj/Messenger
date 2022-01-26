import React from 'react';
import Navbar from "../components/Navbar";
import {useHistory} from "react-router-dom";
import {Button, Col, Container, Row} from "react-bootstrap";

const data = [{
    id: '1',
    name: 'Bahar',
    pictureSrc: "https://img.icons8.com/doodle/48/000000/fortune-teller.png",
    message: 'Hello.',
}, {id: '2', name: 'Ali', message: "I'm fine thanks.?", pictureSrc: "https://img.icons8.com/doodle/48/000000/manager--v1.png"}, {
    id: '2',
    name: 'Nargol',
    message: 'what a nice day.',
    pictureSrc: "https://img.icons8.com/doodle/48/000000/user-female-red-hair.png",
}, {id: '2', name: 'Group 1', message: "let's go out today.",pictureSrc: "https://img.icons8.com/doodle/48/000000/they.png"}]

const Home = () => {

    const router = useHistory();

    const RenderMessage = (data) => (
        <Container style={{border: 'solid 1px'}}>
            <Row>

                <Col md={10}>
                    <Row style={{justifyContent: 'center', alignContent: 'center', display: "flex", cursor: "pointer"}}
                         onClick={() => router.push("/chat", {data: data.name, pic: data.pictureSrc})}>

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
                            onClick={() => alert(`${data.name} has been blocked`)}>Block</Button>

                </Col>
            </Row>
        </Container>
    )

    return (
        <div>

            <Navbar/>
            <div style={{height:'50vh', border: '4px solid #007bff'}}>
                {data.map((d) => RenderMessage(d))}
            </div>

        </div>
    );
};

export default Home;
