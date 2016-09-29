import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar, Form, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as updateDataActions from '../../../actions/updateDataActions';

class ModalNewCategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCategoryItem: '',
        };

        this.handleNewCategoryItem = this.handleNewCategoryItem.bind(this);
    }

    handleNewCategoryItem(e) { this.setState({newCategoryItem: e.target.value}); }

    addNewCategory(e) {
        e.preventDefault();
        if (this.state.newCategoryItem !== '') {
            this.props.addCategoryItem(this.props.project.projectKey, this.props.categoryKey, this.state.newCategoryItem);
            this.setState({newCategoryItem: ''});
            this.props.onHide();
        }
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">New Category Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.addNewCategory.bind(this)}>
                        <FormGroup controlId="newCategoryItem">
                            <FormControl type="text" placeholder="New Category Item"
                                         value={this.state.newCategoryItem}
                                         onChange={this.handleNewCategoryItem}/>
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
    return {
        project: state.project
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addCategoryItem: (projectKey, categoryKey, data) => dispatch(updateDataActions.addCategoryItem(projectKey, categoryKey, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalNewCategoryItem);