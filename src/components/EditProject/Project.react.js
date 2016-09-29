import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryList from './CategoryList.react';
import OptionList from './OptionList.react';
import { connect } from 'react-redux';
import ModalProjectSettings from './Modal/Modal_ProjectSettings';
import ModalNewCategory from './Modal/Modal_New_Category';
import ModalNewOption from './Modal/Modal_New_Option';
import * as updateDataActions from '../../actions/updateDataActions';

class Project extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalProjectSettings: false,
            modalNewCategory: false,
            modalNewOption: false
        };
    }

    render() {
        let modalProjectSettings = () => this.setState({ modalProjectSettings: false });
        let modalNewCategory = () => this.setState({ modalNewCategory: false });
        let modalNewOption = () => this.setState({ modalNewOption: false });

        return (
            <Grid>
                <ModalProjectSettings projectKey={this.props.projectKey} show={this.state.modalProjectSettings} onHide={modalProjectSettings} />
                <ModalNewCategory show={this.state.modalNewCategory} onHide={modalNewCategory} />
                <ModalNewOption show={this.state.modalNewOption} onHide={modalNewOption} />

                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <h2>{this.props.projectSettings.projectName}</h2>
                        <p>{this.props.projectSettings.projectDeadline}</p>
                        <ButtonToolbar>
                            <Button onClick={()=>this.setState({ modalProjectSettings: true })}>Project Settings</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <ButtonToolbar>
                            <Button bsStyle="default" onClick={()=>this.setState({ modalNewCategory: true })}>+ Category</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <ButtonToolbar>
                            <Button bsStyle="default" onClick={()=>this.setState({ modalNewOption: true })}>+ Option</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <CategoryList projectKey={this.props.projectKey} categories={this.props.project.categories}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <OptionList />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Project.defaultProps = { projectSettings: {
    projectName: 'No Project name',
    projectDeadline: 'No deadline'
}};

function mapStateToProps(state) {
    return {
        project: state.project,
        projectSettings: state.project.projectSettings
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addCategory: (key) => dispatch(updateDataActions.addCategory(key))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);