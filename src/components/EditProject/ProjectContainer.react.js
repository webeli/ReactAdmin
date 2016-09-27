import React, { Component } from 'react';
import Project from './Project.react.js';
import { connect } from 'react-redux';

class ProjectContainer extends Component {

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
export default connect(mapStateToProps)(ProjectContainer);