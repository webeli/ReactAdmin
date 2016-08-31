import React, { Component } from 'react';
import Header from '../Header';
import { connect } from 'react-redux';
import ProjectListContainer from './ProjectListContainer.react';

class Projects extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProjectListContainer/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Projects);