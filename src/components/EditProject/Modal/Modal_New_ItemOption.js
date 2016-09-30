import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar, Form, FormGroup, FormControl, Col, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as updateDataActions from '../../../actions/updateDataActions';
import Dropzone from 'react-dropzone';
import * as firebase from 'firebase';

class ModalNewItemOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            attribute: '',
            default: '',
            desc: '',
            image: '',
            price: '',
            title: '',
            files: {}
        };
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.handleAttributeChange = this.handleAttributeChange.bind(this);
        this.handleDefaultChange = this.handleDefaultChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleActiveChange(e) { this.setState({active: e.target.checked}); }
    handleAttributeChange (e) { this.setState({attribute: e.target.value}); }
    handleDefaultChange (e) { this.setState({default: e.target.value}); }
    handleDescChange (e) { this.setState({desc: e.target.value}); }
    handlePriceChange (e) { this.setState({price: e.target.value}); }
    handleTitleChange (e) { this.setState({title: e.target.value}); }

    onDrop(files) {
        this.setState({
            files: files[0]
        });
    }

    createItemOption(e) {
        e.preventDefault();

        const storageRef = firebase.storage().ref("images").child(this.props.itemKey).child(this.state.files.name);
        storageRef.put(this.state.files).then(function(snapshot) {
            console.log('Uploaded a blob or file!', snapshot);
            console.log('URL', snapshot.a.downloadURLs[0]);

            this.setState({
                image: snapshot.a.downloadURLs[0],
                files: ''
            });

            console.log("this.props", this.props);
            this.props.addItemOption(this.props.project.projectKey, this.props.itemKey, this.state);
            this.setState({
                active: true,
                attribute: '',
                default: '',
                desc: '',
                image: '',
                price: '',
                title: ''
            });
            this.props.onHide();
        });

    }

    render() {
        console.log(this.props);
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Create New Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
                        <Form onSubmit={this.createItemOption.bind(this)}>
                            <FormGroup controlId="active">
                                <Checkbox type="checkbox" checked={this.state.active} onChange={this.handleActiveChange}>
                                    Active
                                </Checkbox>
                            </FormGroup>
                            <FormGroup controlId="attribute">
                                <FormControl type="text" placeholder="attribute"
                                             value={this.state.attribute}
                                             onChange={this.handleAttributeChange}/>
                            </FormGroup>
                            <FormGroup controlId="default">
                                <FormControl type="text" placeholder="default"
                                             value={this.state.default}
                                             onChange={this.handleDefaultChange}/>
                            </FormGroup>
                            <FormGroup controlId="desc">
                                <FormControl type="text" placeholder="desc"
                                             value={this.state.desc}
                                             onChange={this.handleDescChange}/>
                            </FormGroup>
                            <FormGroup controlId="image">
                                <Dropzone onDrop={this.onDrop.bind(this)}>
                                    <div>Try dropping some files here, or click to select files to upload.</div>
                                </Dropzone>
                            </FormGroup>
                            <FormGroup controlId="price">
                                <FormControl type="number" placeholder="price"
                                             value={this.state.price}
                                             onChange={this.handlePriceChange} required/>
                            </FormGroup>
                            <FormGroup controlId="title">
                                <FormControl type="text" placeholder="title"
                                             value={this.state.title}
                                             onChange={this.handleTitleChange} required/>
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button bsStyle="primary" type="submit">Create</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        project: state.project
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addItemOption: (projectKey, itemKey, data) => dispatch(updateDataActions.addItemOption(projectKey, itemKey, data)),
        uploadImage: (files, itemKey) => dispatch(updateDataActions.uploadImage(files, itemKey))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalNewItemOption);