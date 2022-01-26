import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import {Button, Row, Col, Container} from "react-bootstrap";

const Creategroup = () => {
    return(

        <div>
            <Navbar/>
            
                <Container style={{height:'50vh', border: '4px solid #007bff', justifyContent:"center", alignItems:"center"}}>
                    <Row style={{float:"none", margin:"auto", paddingTop:"20px", color:"black", justifyContent:"center", alignItems:"center"}}>
                       <br></br> <h4>Select a name for the group</h4> <br></br>
                    </Row>
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"10px" , justifyContent:"center", alignItems:"center"}}>
                        <input type="text" placeholder='group name'></input>
                    </Row>
                    <Row style={{float:"none", margin:"0 auto", paddingTop:"30px" , justifyContent:"center", alignItems:"center"}}>
                    <Button variant={"success"} style={{fontSize: '14px', padding: '10px', fontSize:"16px"}}
                            onClick={() => alert(`Created *example* group`)}>Create</Button>
                    </Row>
                </Container>
            
        </div>
    );
}

export default Creategroup;