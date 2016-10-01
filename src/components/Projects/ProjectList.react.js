import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ModalNewProject from './Modal/Modal_New_Project';
import * as projectActions from '../../actions/projectActions';

class ProjectList extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalNewProject: false
        };
    }

    loadProject(key) {
        this.props.getProjectByKey(key);
    }

    render() {
        let modalNewProject = () => this.setState({ modalNewProject: false });

        let projects = this.props.projects;
        let projectList = Object.keys(projects).map(project => {
            return (
                <Col key={project} xs={12} md={4}>
                    <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                        <h3>{projects[project].projectSettings.projectName}</h3>
                        <p>Description</p>
                        <ButtonToolbar>
                            <Button bsStyle="danger">Delete</Button>
                            <Link style={{color:'#FFF'}} to={`/editproject/${project}`}><Button onClick={()=>this.loadProject(project)} bsStyle="primary">Manage</Button></Link>
                            <a href={`https://tival.se/#/project/${project}`}><Button bsStyle="default">View</Button></a>
                        </ButtonToolbar>
                    </Thumbnail>
                </Col>
            )
        });

        return (
            <Grid>
                <ModalNewProject show={this.state.modalNewProject} onHide={modalNewProject} />
                <p></p>
                <ButtonToolbar>
                    <Button onClick={()=>this.setState({ modalNewProject: true })}>+ New project</Button>
                </ButtonToolbar>
                <p></p>
                <Row className="show-grid">
                    {projectList}
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        projects: state.projects
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getProjectByKey: key => dispatch(projectActions.getProjectByKey(key))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);