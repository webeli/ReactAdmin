import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar, Form, FormGroup, FormControl, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as updateDataActions from '../../../actions/updateDataActions';

class ModalProjectSettings extends Component {
    constructor(props) {
        super(props);
        if (this.props.projectSettings) {
            this.state = {
                companyCity: this.props.projectSettings.companyCity || '',
                companyName: this.props.projectSettings.companyName || '',
                companyPhone: this.props.projectSettings.companyPhone || '',
                companyStreet: this.props.projectSettings.companyStreet || '',
                companyWebsite: this.props.projectSettings.companyWebsite || '',
                companyZip: this.props.projectSettings.companyZip || '',
                projectDeadline: this.props.projectSettings.projectDeadline || '',
                projectEmail: this.props.projectSettings.projectEmail || '',
                projectName: this.props.projectSettings.projectName || ''
            };
        } else {
            this.state = {
                companyCity: '',
                companyName: '',
                companyPhone: '',
                companyStreet: '',
                companyWebsite: '',
                companyZip: '',
                projectDeadline: '',
                projectEmail: '',
                projectName: ''
            };
        }

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCompanyPhone = this.handleCompanyPhone.bind(this);
        this.handleCompanyStreet = this.handleCompanyStreet.bind(this);
        this.handleCompanyWebsite = this.handleCompanyWebsite.bind(this);
        this.handleCompanyZip = this.handleCompanyZip.bind(this);
        this.handleProjectDeadline = this.handleProjectDeadline.bind(this);
        this.handleProjectEmail = this.handleProjectEmail.bind(this);
        this.handleProjectName = this.handleProjectName.bind(this);

    }
    handleCityChange(e) { this.setState({companyCity: e.target.value}); }
    handleNameChange (e) { this.setState({companyName: e.target.value}); }
    handleCompanyPhone (e) { this.setState({companyPhone: e.target.value}); }
    handleCompanyStreet (e) { this.setState({companyStreet: e.target.value}); }
    handleCompanyWebsite (e) { this.setState({companyWebsite: e.target.value}); }
    handleCompanyZip (e) { this.setState({companyZip: e.target.value}); }
    handleProjectDeadline (e) { this.setState({projectDeadline: e.target.value}); }
    handleProjectEmail (e) { this.setState({projectEmail: e.target.value}); }
    handleProjectName (e) { this.setState({projectName: e.target.value}); }

    updateProjectSettings(e) {
        e.preventDefault();
        this.props.setProjectSettings(this.props.project.projectKey, this.state);
        this.props.onHide();
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Project Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
                        <Form onSubmit={this.updateProjectSettings.bind(this)}>
                            <FormGroup controlId="companyCity">
                                <FormControl type="text" placeholder="city"
                                             value={this.state.companyCity}
                                             onChange={this.handleCityChange}/>
                            </FormGroup>
                            <FormGroup controlId="companyName">
                                <FormControl type="text" placeholder="name"
                                             value={this.state.companyName}
                                             onChange={this.handleNameChange}/>
                            </FormGroup>
                            <FormGroup controlId="companyPhone">
                                <FormControl type="text" placeholder="companyPhone"
                                             value={this.state.companyPhone}
                                             onChange={this.handleCompanyPhone}/>
                            </FormGroup>
                            <FormGroup controlId="handleCompanyStreet">
                                <FormControl type="text" placeholder="companyStreet"
                                             value={this.state.companyStreet}
                                             onChange={this.handleCompanyStreet}/>
                            </FormGroup>
                            <FormGroup controlId="companyWebsite">
                                <FormControl type="text" placeholder="companyWebsite"
                                             value={this.state.companyWebsite}
                                             onChange={this.handleCompanyWebsite}/>
                            </FormGroup>
                            <FormGroup controlId="companyZip">
                                <FormControl type="text" placeholder="companyZip"
                                             value={this.state.companyZip}
                                             onChange={this.handleCompanyZip}/>
                            </FormGroup>
                            <FormGroup controlId="projectDeadline">
                                <FormControl type="text" placeholder="projectDeadline"
                                             value={this.state.projectDeadline}
                                             onChange={this.handleProjectDeadline}/>
                            </FormGroup>
                            <FormGroup controlId="projectEmail">
                                <FormControl type="text" placeholder="projectEmail"
                                             value={this.state.projectEmail}
                                             onChange={this.handleProjectEmail}/>
                            </FormGroup>
                            <FormGroup controlId="projectName">
                                <FormControl type="text" placeholder="projectName"
                                             value={this.state.projectName}
                                             onChange={this.handleProjectName}/>
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button bsStyle="default" type="submit">Reset</Button>
                                    <Button bsStyle="primary" type="submit">Update</Button>
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
        projectSettings: state.project.projectSettings,
        project: state.project
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setProjectSettings: (projectKey, data) => dispatch(updateDataActions.setProjectSettings(projectKey, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalProjectSettings);