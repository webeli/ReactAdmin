import React, { Component } from 'react';
import ProjectList from './ProjectList.react';
import * as firebase from 'firebase';

class ProjectListContainer extends Component {

    componentWillMount() {
        this.data = [];
        this.dbRef = firebase.database().ref();
        this.dbRef.on('value', (snap) => {
            this.data = this.createArray(snap);
            this.setState({ data: this.data });
        }).bind(this);
    }
    createArray(snap) {
        let array = [];
        Object.keys(snap.val()).forEach(key => {
            array.push({key:key,val:snap.val()[key]})
        });
        return array;
    }

    render() {
        return (
            <ProjectList data={this.data} />
        );
    }
}

export default ProjectListContainer;
