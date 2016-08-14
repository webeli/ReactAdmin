import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import * as firebase from 'firebase';
import { getByKeys } from '../../lib/helpers';
import store from '../../store';

class ItemList extends Component {
    getItemOptions(x) {
        store.dispatch({type: "CHANGE_OPTION_KEY", payload: x})
    }

    render() {
        const dbRef = firebase.database().ref(this.props.projectKey).child('categoryItems');
        let itemArray = getByKeys(dbRef, this.props.items);
        let list = Object.keys(itemArray).map(item => {
            return (
                <ListGroupItem key={itemArray[item].key} onClick={this.getItemOptions.bind(this, itemArray[item].key)}>{itemArray[item].val.title}</ListGroupItem>
            );
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default ItemList;