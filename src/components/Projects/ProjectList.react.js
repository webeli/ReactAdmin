import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class ProjectList extends Component {

    signOut() {
        this.props.signOut();
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
                            <Link to={`/editproject/${project}`}><Button bsStyle="primary">Manage</Button></Link>&nbsp;
                            <Button bsStyle="default">View</Button>
                        </p>
                    </Thumbnail>
                </Col>
            )
        });

        return (
            <Grid>
                <Button bsStyle="default" onClick={() => this.signOut()}>SignOut</Button>
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
        projects: state.projects,
        auth: state.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(authActions.signOutUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);