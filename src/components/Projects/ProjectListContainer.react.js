import React, { Component } from 'react';
import ProjectList from './ProjectList.react.js';
import * as firebase from 'firebase';
import { createArray } from '../../lib/helpers';

class ProjectListContainer extends Component {

    componentWillMount() {
        this.data = [];
        this.dbRef = firebase.database().ref();
        this.dbRef.on('value', (snap) => {
            this.data = createArray(snap);
            this.setState({ data: this.data });
        }).bind(this);
    }

    componentWillUnmount() {
        this.dbRef.off();
    }

    render() {
        return (
            <ProjectList data={this.data} />
        );
    }
}

export default ProjectListContainer;