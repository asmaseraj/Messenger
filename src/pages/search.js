import React, { Component } from 'react';
import { Button, Modal, ModalDialog, ModalBody } from 'react-bootstrap';

const Search = () => {

    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Search</Modal.Title>
                <Button variant="danger" href="./setting">X</Button>
            </Modal.Header>

            <Modal.Body>
                <p>Enter the ID that you want to search for</p>
                <br></br>
                <input type="text" placeholder='ID'></input>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="primary" onClick={() => alert('No user matched with ID.')}>Search</Button>

            </Modal.Footer>
        </Modal.Dialog>
    );





}

export default Search;