import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar, Form, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as updateDataActions from '../../../actions/updateDataActions';

class ModalNewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newProject: '',
        };

        this.handleNewProject = this.handleNewProject.bind(this);
    }

    handleNewProject(e) { this.setState({newProject: e.target.value}); }

    addNewProject(e) {
        e.preventDefault();
        if (this.state.newProject !== '') {
            this.props.addProject(this.state.newProject);
            this.setState({newProject: ''});
            this.props.onHide();
        }
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.addNewProject.bind(this)}>
                        <FormGroup controlId="newProject">
                            <FormControl type="text" placeholder="New Project"
                                         value={this.state.newProject}
                                         onChange={this.handleNewProject}/>
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button bsStyle="primary" type="submit">Add</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        addProject: (data) => dispatch(updateDataActions.addProject(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalNewProject);