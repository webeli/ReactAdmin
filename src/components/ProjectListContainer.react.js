import React, { Component } from 'react';
import ProjectList from './ProjectList.react';
import * as firebase from 'firebase';

class ProjectListContainer extends Component {

    componentWillMount() {
        this.data = [];
        this.dbRef = firebase.database().ref();
        this.dbRef.on('child_added', (snap) => {
            this.data.push({key:snap.key,val:snap.val()});
            this.setState({
                data: this.data
            });
        }).bind(this);
    }

    render() {
        return (
            <ProjectList data={this.data} />
        );
    }
}

export default ProjectListContainer;
