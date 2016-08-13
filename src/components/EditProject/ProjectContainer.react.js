import React, { Component } from 'react';
import Project from './Project.react.js';
import * as firebase from 'firebase';
//import { createArray } from '../../lib/helpers';

class ProjectContainer extends Component {

    componentWillMount() {
        this.data = [];
        this.dbRef = firebase.database().ref(this.props.projectKey);
        this.dbRef.on('value', (snap) => {
            this.data = snap.val();
            this.setState({ data: this.data });
        }).bind(this);
    }

    componentWillUnmount() {
        this.dbRef.off();
    }

    render() {
        return (
            <Project projectKey={this.props.projectKey} project={this.data}/>
        );
    }
}

export default ProjectContainer;