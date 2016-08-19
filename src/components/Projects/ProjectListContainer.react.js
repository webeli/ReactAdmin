import React, { Component } from 'react';
import ProjectList from './ProjectList.react.js';
import { connect } from 'react-redux';
import * as projectsActions from '../../actions/projectsActions';

class ProjectListContainer extends Component {

    componentDidMount() {
        this.props.getAllProjects();
    }

    render() {
        return (
            <ProjectList />
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
        getAllProjects: () => dispatch(projectsActions.getAllProjects())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectListContainer);