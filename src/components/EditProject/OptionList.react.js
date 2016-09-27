import React, { Component } from 'react';
import { Panel, ButtonToolbar, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as optionActions from '../../actions/optionActions';

import ModalEditOption from './Modal/Modal_Edit_Option';
import ModalDeleteOption from './Modal/Modal_Delete_Option';

class OptionList extends Component {

    componentWillUnmount() {
        this.props.clearOptionList();
    }

    constructor(props){
        super(props);
        this.state = {
            modalEditOption: false,
            modalDeleteOption: false
        };
    }

    render() {
        let modalEditOption = () => this.setState({ modalEditOption: false });
        let modalDeleteOption = () => this.setState({ modalDeleteOption: false });

        let optionList = null;
        let options = this.props.options;
        let itemOptions = this.props.project.itemOptions;
        if (options) {
            optionList = Object.keys(options).map(option => {
                return (
                    <Col md={6} key={option}>
                        <Panel header={itemOptions[option].title} eventKey={option}>
                            <p style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{itemOptions[option].desc || 'No description'}</p>
                            <p>{itemOptions[option].price || 'No price'}</p>
                            <img src={itemOptions[option].image} height="50px" width="50px" alt={itemOptions[option].title}/>
                            <p></p>
                            <ButtonToolbar>
                                <Button bsSize="xsmall" bsStyle="danger" onClick={()=>this.setState({ modalDeleteOption: true })}>Delete</Button>
                                <Button bsSize="xsmall" bsStyle="primary" onClick={()=>this.setState({ modalEditOption: true })}>Edit</Button>
                            </ButtonToolbar>
                        </Panel>
                    </Col>
                )
            });
        }
        return (
            <div>
                <ModalEditOption show={this.state.modalEditOption} onHide={modalEditOption} />
                <ModalDeleteOption show={this.state.modalDeleteOption} onHide={modalDeleteOption} />
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