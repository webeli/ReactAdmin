import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as optionActions from '../../actions/optionActions';

import ModalEditItem from './Modal/Modal_Edit_Item';
import ModalDeleteItem from './Modal/Modal_Delete_Item';

class ItemList extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalEditItem: false,
            modalDeleteItem: false
        };
    }

    getItemOptions(itemKey) {
        this.props.getOptionListByKey(this.props.project.projectKey, itemKey);
    }

    render() {
        let modalEditItem = () => this.setState({ modalEditItem: false });
        let modalDeleteItem = () => this.setState({ modalDeleteItem: false });

        let list = null;
        let items = this.props.items;
        if (items) {
            const categoryItems = this.props.project.categoryItems;
            list = Object.keys(items).map(item => {
                return (
                    <ButtonToolbar key={item}>
                        <ButtonGroup bsSize="sm">
                            <Button bsStyle="danger" onClick={()=>this.setState({ modalDeleteItem: true })}>x</Button>
                            <Button bsStyle="primary" onClick={()=>this.setState({ modalEditItem: true })}>I</Button>
                            <Button style={{padding:"5px 25px"}} onClick={this.getItemOptions.bind(this, categoryItems[item].key)}>{categoryItems[item].title}</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                );
            });
        }

        return (
            <div>
                <ModalEditItem show={this.state.modalEditItem} onHide={modalEditItem} />
                <ModalDeleteItem show={this.state.modalDeleteItem} onHide={modalDeleteItem} />
                {list}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        options: state.options,
        project: state.project
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getOptionListByKey: (key1, key2) => dispatch(optionActions.getOptionListByKey(key1, key2))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);