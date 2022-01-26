import React from 'react';
import { useLocation } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Navbar from "../components/Navbar";


const RenderMessage = (message) => (

    message.isSenderMe ?
        <div style={{ width: '100%', direction: "rtl" }}>
            <div style={{
                color:'white',
                backgroundColor: 'black',
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
                color:'black',
                backgroundColor: 'white',
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

    const messages = [
        { 
            isSenderMe: true, 
            message: "Hello." 
        },
        {
            isSenderMe: false,
            message: "Hi!"
        },
        {
            isSenderMe: true,
            message: "How are you?"
        },
        {
            isSenderMe: false,
            message: "I'm fine. How are you?"
        },
        {
            isSenderMe: false,
            message: "Where are you?"
        }]
    const location = useLocation();
    return (
        <div>
            <Navbar />

            <div style={{ height: '50vh', border: '1px solid black' }}>

                <div style={{ backgroundColor: 'white', border: 'solid 2px gray', width: '100%' }}>
                    <img style={{ borderRight: 'solid 1px', marginRight: '4px' }}
                        src="https://img.icons8.com/color-glass/48/ffffff/morty-smith.png" />
                    {location.state.data}
                </div>
                <div style={{ background: 'linear-gradient(90deg, rgba(238,199,216,1) 0%, rgba(189,212,238,1) 100%)', padding: '8px', width: '100%', height: '74%' }}>
                    {messages.map((message) => RenderMessage(message))}
                </div>
                <div style={{ display: 'flex', flexDirection: "row", height: '12.5%' }}>
                    <input type='text' style={{ width: "100%", border: 'solid 6px lightBlue' }} />
                    <Button>send</Button>
                </div>

            </div>
        </div>

    );
};

export default Chatprivate;
