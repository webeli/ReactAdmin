import React, { Component } from 'react';
import Project from './Project.react.js';
import * as firebase from 'firebase';
import store from '../../store';
import { connect } from 'react-redux';
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
            this.optionsRef =  this.dbRef.child('itemOptions');
            var itemOptionsRefs = this.dbRef.child('categoryItems').child(itemKey).child('refs');
            itemOptionsRefs.on('value', (snap) => {
                this.options = getByKeys(this.optionsRef, snap.val());
                this.setState({ options: this.options });
            }).bind(this);

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

function mapStateToProps(state, ownProps) {
    return {
        options: state.options
    };
}

export default connect(mapStateToProps)(ProjectContainer);