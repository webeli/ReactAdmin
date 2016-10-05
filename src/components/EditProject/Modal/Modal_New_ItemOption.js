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

    // Callback when file is uploaded
    uploadComplete(imgUrl) {
        this.setState({
            image: imgUrl
        });
        this.props.addItemOption(this.props.project.projectKey, this.props.itemKey, this.state);
        this.setState({
            active: true,
            attribute: '',
            default: '',
            desc: '',
            price: '',
            title: '',
            files: {}
        });
        this.props.onHide();
    };

    createItemOption(e) {
        e.preventDefault();
        // Create ref and upload image to (ProjectKey -> ItemTitle -> Filename)
        const storageRef = firebase.storage().ref(this.props.project.projectKey).child(this.props.itemSelectedTitle).child(this.state.files.name);
        storageRef.put(this.state.files).then((snapshot) => {
            this.uploadComplete(snapshot.a.downloadURLs[0]);
        });
    }

    render() {
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
                            <FormGroup controlId="default">
                                <Checkbox type="checkbox" checked={this.state.default} onChange={this.handleDefaultChange}>
                                    Default
                                </Checkbox>
                            </FormGroup>
                            <FormGroup controlId="title">
                                <FormControl type="text" placeholder="Title"
                                             value={this.state.title}
                                             onChange={this.handleTitleChange} required/>
                            </FormGroup>
                            <FormGroup controlId="price">
                                <FormControl type="number" placeholder="Price"
                                             value={this.state.price}
                                             onChange={this.handlePriceChange} required/>
                            </FormGroup>
                            <FormGroup controlId="attribute">
                                <FormControl type="text" placeholder="Attribute"
                                             value={this.state.attribute}
                                             onChange={this.handleAttributeChange}/>
                            </FormGroup>
                            <FormGroup controlId="desc">
                                <FormControl componentClass="textarea" placeholder="Description"
                                             value={this.state.desc}
                                             onChange={this.handleDescChange}/>
                            </FormGroup>
                            <FormGroup controlId="uploadImage">
                                <Dropzone style={{
                                    margin:"15px 0 15px",
                                    padding:"15px",
                                    width:"160px",
                                    height:"90px",
                                    background:"#313131",
                                    color:"#FFF",
                                    border:"1px solid #000 dashed"
                                    }} onDrop={this.onDrop.bind(this)}>
                                    <div>Drop files here, or click to select files to upload</div>
                                </Dropzone>
                                <img src={this.state.files.preview} height="80px" width="80px" alt="Preview"/>
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
        addItemOption: (projectKey, itemKey, data) => dispatch(updateDataActions.addItemOption(projectKey, itemKey, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalNewItemOption);