import React, { Component } from 'react';
import { } from 'react-bootstrap';
import * as firebase from 'firebase';
import { getByKeys } from '../../lib/helpers';

class ItemList extends Component {

    render() {
        const dbRef = firebase.database().ref(this.props.projectKey).child('categoryItems');
        let itemArray = getByKeys(dbRef, this.props.items);
        let list = Object.keys(itemArray).map(item => {
            return (
                <p key={item}>{itemArray[item].title}</p>
            );
        });
        return (
            <div>{list}</div>
        );
    }
}

export default ItemList;