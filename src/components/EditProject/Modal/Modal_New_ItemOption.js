import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar, Form, FormGroup, FormControl, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as updateDataActions from '../../../actions/updateDataActions';

class ModalNewItemOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '',
            attribute: '',
            default: '',
            desc: '',
            image: '',
            price: '',
            title: ''
        };
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.handleAttributeChange = this.handleAttributeChange.bind(this);
        this.handleDefaultChange = this.handleDefaultChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleActiveChange(e) { this.setState({active: e.target.value}); }
    handleAttributeChange (e) { this.setState({attribute: e.target.value}); }
    handleDefaultChange (e) { this.setState({default: e.target.value}); }
    handleDescChange (e) { this.setState({desc: e.target.value}); }
    handleImageChange (e) { this.setState({image: e.target.value}); }
    handlePriceChange (e) { this.setState({price: e.target.value}); }
    handleTitleChange (e) { this.setState({title: e.target.value}); }

    createItemOption(e) {
        e.preventDefault();
        console.log("Create option", this.state);
        this.props.addItemOption(this.props.project.projectKey, this.props.itemKey, this.state);
        this.setState({
            active: '',
            attribute: '',
            default: '',
            desc: '',
            image: '',
            price: '',
            title: ''
        });
        this.props.onHide();
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
                                <FormControl type="text" placeholder="active"
                                             value={this.state.active}
                                             onChange={this.handleActiveChange}/>
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
                                <FormControl type="text" placeholder="image"
                                             value={this.state.image}
                                             onChange={this.handleImageChange}/>
                            </FormGroup>
                            <FormGroup controlId="price">
                                <FormControl type="text" placeholder="price"
                                             value={this.state.price}
                                             onChange={this.handlePriceChange}/>
                            </FormGroup>
                            <FormGroup controlId="title">
                                <FormControl type="text" placeholder="title"
                                             value={this.state.title}
                                             onChange={this.handleTitleChange}/>
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