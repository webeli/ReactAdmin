import React, { Component } from 'react';
import Project from './Project.react.js';
import * as firebase from 'firebase';
import store from '../../store';
import { getByKeys } from '../../lib/helpers';

class ProjectContainer extends Component {

    componentWillMount() {
        this.data = [];
        this.dbRef = firebase.database().ref(this.props.projectKey);
        this.dbRef.on('value', (snap) => {
            this.data = snap.val();
            this.setState({ data: this.data });
        }).bind(this);

        store.subscribe(() => {
            console.log("store changed", store.getState())
            var getState = store.getState();
            var itemKey = getState.options.key;
            this.optionRefs = this.data.categoryItems[itemKey].refs;
            console.log("ref: ", this.optionRefs);
            this.options = getByKeys(this.dbRef.child('itemOptions'), this.optionRefs);
            this.setState({ options: this.options });
            console.log(this.options);
            //console.log(optionRefs);
        });
    }

    componentWillUnmount() {
        this.dbRef.off();
    }

    render() {
        console.log(store.getState());
        return (
            <Project projectKey={this.props.projectKey} project={this.data} options={this.options}/>
        );
    }
}

export default ProjectContainer;