import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryList from './CategoryList.react';
import OptionList from './OptionList.react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ModalProjectSettings from './Modal/Modal_ProjectSettings';
import * as updateDataActions from '../../actions/updateDataActions';

class Project extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalProjectSettings: false
        };
    }

    render() {
        let modalProjectSettings = () => this.setState({ modalProjectSettings: false });

        return (
            <Grid>
                <ModalProjectSettings projectKey={this.props.project.projectKey} show={this.state.modalProjectSettings} onHide={modalProjectSettings} />

                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <Link to={`/projects`}>Back To Projects</Link>
                        <h2>{this.props.projectSettings.projectName}</h2>
                        <p>{this.props.projectSettings.projectDeadline}</p>
                        <ButtonToolbar>
                            <Button onClick={()=>this.setState({ modalProjectSettings: true })}>Project Settings</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <CategoryList categories={this.props.project.categories}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <OptionList />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Project.defaultProps = {
    projectSettings: {
        projectName: 'No Project name',
        projectDeadline: 'No deadline'
    }
};

function mapStateToProps(state) {
    console.log(state);
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