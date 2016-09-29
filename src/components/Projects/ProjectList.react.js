import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as projectActions from '../../actions/projectActions';

class ProjectList extends Component {

    loadProject(key) {
        this.props.getProjectByKey(key);
    }

    render() {
        let projects = this.props.projects;
        let projectList = Object.keys(projects).map(project => {
            return (
                <Col key={project} xs={12} md={4}>
                    <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                        <h3>{projects[project].pName}</h3>
                        <p>Description</p>
                        <p>
                            <Link to={`/editproject/${project}`}><Button onClick={()=>this.loadProject(project)} bsStyle="primary">Manage</Button></Link>&nbsp;
                            <Button bsStyle="default">View</Button>
                        </p>
                    </Thumbnail>
                </Col>
            )
        });

        return (
            <Grid>
                <p></p>
                <ButtonToolbar>
                    <Button>+ New project</Button>
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