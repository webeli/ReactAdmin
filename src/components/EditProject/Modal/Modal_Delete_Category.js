import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalDeleteCategory extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Delete Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Delete Category
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalDeleteCategory;