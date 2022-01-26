import React from 'react';
import {useLocation} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import Navbar from "../components/Navbar";


const RenderMessage = (message) => (

    message.isSenderMe ?
        <div style={{width:'100%',direction:"rtl"}}>
            <div style={{
                backgroundColor: 'lightGreen',
                width: 'max-content',
                padding: '8px',
                borderRadius: '4px',
                marginBottom: "4px"
            }}>
                {message.message}
            </div>
        </div> :
        <div>
            <div style={{
                direction: "ltr",
                backgroundColor: 'green',
                width: 'max-content',
                padding: '8px',
                borderRadius: '4px',
                marginBottom: "4px"
            }}>
                {message.message}
            </div>
        </div>


)


const Chatprivate = () => {

    const messages = [{isSenderMe: false, message: "chetoori"}, {
        isSenderMe: false,
        message: "chetoori"
    }, {isSenderMe: true, message: "chetoori"}, {isSenderMe: false, message: "chetoori"}, {
        isSenderMe: false,
        message: "chetoori"
    }]
    const location = useLocation();
    return (
        <Container>
            <Navbar/>
            <div style={{backgroundColor: 'lightBlue', borderBottom: 'solid 1px'}}>
                <img style={{borderRight: 'solid 1px', marginRight: '4px'}}
                     src="https://img.icons8.com/color-glass/48/ffffff/morty-smith.png"/>
                {location.state.data}
            </div>
            <div style={{backgroundColor: 'lightGray', height: '300px',padding:'8px'}}>
                {messages.map((message) => RenderMessage(message))}
            </div>
            <div style={{display:'flex',flexDirection:"row"}}>
                <input type='text' style={{width:"100%", border: 'solid 6px yellow'}}/>
                <Button>send</Button>
            </div>
        </Container>

    );
};

export default Chatprivate;
