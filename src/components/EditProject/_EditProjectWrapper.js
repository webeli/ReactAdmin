import React, { Component } from 'react';
import Header from '../HeaderAdmin';
import ProjectContainer from './ProjectContainer.react'

class EditProject extends Component {

    render() {
        return (
            <div>
                <Header />
                <ProjectContainer projectKey={this.props.routeParams.projectKey} />
            </div>
        );
    }
}

export default EditProject;