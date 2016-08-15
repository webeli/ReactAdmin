import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import OptionList from './OptionList.react';
import { getByKeys } from '../../lib/helpers';

class OptionListContainer extends Component {

    render() {
        if (this.props.options.key) {
            var optionsRef = firebase.database().ref(this.props.projectKey).child('itemOptions');
            var itemOptionsRefs = firebase.database().ref(this.props.projectKey).child('categoryItems').child(this.props.options.key).child('refs');
            itemOptionsRefs.on('value', (snap) => {
                this.options = getByKeys(optionsRef, snap.val());
            }).bind(this);
        }

        return (
            <OptionList projectKey={this.props.projectKey} options={this.options}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        options: state.options
    };
}
export default connect(mapStateToProps)(OptionListContainer);