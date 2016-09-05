import React, { Component } from 'react';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as optionActions from '../../actions/optionActions';

class OptionList extends Component {

    componentWillUnmount() {
        this.props.clearOptionList();
    }

    render() {
        let optionList = null;
        let options = this.props.options;
        let itemOptions = this.props.project.itemOptions;
        if (options) {
            optionList = Object.keys(options).map(option => {
                return (
                    <Panel key={option} header={itemOptions[option].title} eventKey={option}>
                        <p>{itemOptions[option].desc}</p>
                        <p>{itemOptions[option].price}</p>
                        <img src={itemOptions[option].image} height="50px" width="50px" alt={itemOptions[option].title}/>
                        <p></p>
                        <ButtonToolbar>
                            <Button bsSize="small" bsStyle="danger">Delete</Button>
                            <Button bsSize="small" bsStyle="primary">Edit</Button>
                        </ButtonToolbar>
                    </Panel>
                )
            });
        }
        return (
            <div>
                {optionList}
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
        clearOptionList: () => dispatch(optionActions.clearOptionList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionList);