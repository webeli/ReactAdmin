import React, { Component } from 'react';
import Header from '../HeaderAdmin';
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

export default Projects;