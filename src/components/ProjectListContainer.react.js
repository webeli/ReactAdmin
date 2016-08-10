import React, { Component } from 'react';
import ProjectList from './ProjectList.react';

class ProjectListContainer extends Component {

    componentWillMount() {
        this.data = [];
        this.dbRef = firebase.database().ref();
        this.dbRef.on('child_added', (snap) => {
            this.data.push(snap.val());
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
