import React, { Component } from 'react';
import Project from './Project.react.js';
import { connect } from 'react-redux';
import * as projectActions from '../../actions/projectActions';

class ProjectContainer extends Component {

    componentWillMount() {
        this.props.getProjectByKey(this.props.projectKey);
    }

    render() {
        return (
            <Project projectKey={this.props.projectKey}/>
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
        getProjectByKey: key => dispatch(projectActions.getProjectByKey(key))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);