import React, { Component } from 'react';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as optionActions from '../../actions/optionActions';


class ItemList extends Component {
    getItemOptions(itemKey) {
        this.props.getOptionListByKey(this.props.projectKey, itemKey);
    }

    render() {
        let list = null;
        if (this.props.items) {
            const categoryItems = this.props.project.categoryItems;
            list = Object.keys(this.props.items).map(item => {
                return (
                    <ButtonToolbar key={item}>
                        <ButtonGroup bsSize="sm">
                            <Button bsStyle="danger">x</Button>
                            <Button bsStyle="primary">I</Button>
                            <Button onClick={this.getItemOptions.bind(this, categoryItems[item].key)}>{categoryItems[item].title}</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                );
            });
        }

        return (
            <div>
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