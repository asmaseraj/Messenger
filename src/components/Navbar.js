import React from 'react';
import "./navbar.css"
import {Button, ButtonGroup, Container} from "react-bootstrap";
import {Row, Col} from "react-bootstrap";

const Navbar = () => {
    return (

        <Container>
            <Row>
                <i className="bi bi-box"></i>
                <ButtonGroup aria-label="Basic example" style={{width: '100%'}}>
                    <Button href={"/home"}><img src="https://img.icons8.com/ios-glyphs/60/ffffff/chat.png"/></Button>
                    <Button href={"/profile"}><img src="https://img.icons8.com/ios-glyphs/60/ffffff/user-male-circle.png"/></Button>

                    <Button href={"/setting"}><img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-setting-basic-ui-elements-flatart-icons-outline-flatarticons.png"/></Button>

                </ButtonGroup>

            </Row>

        </Container>

    );
};

export default Navbar;
