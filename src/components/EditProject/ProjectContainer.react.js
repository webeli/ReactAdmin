import React, { Component } from 'react';
import Project from './Project.react.js';
import { connect } from 'react-redux';

class ProjectContainer extends Component {

    render() {
        return (
            <Project />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        project: state.project
    };
}
export default connect(mapStateToProps)(ProjectContainer);