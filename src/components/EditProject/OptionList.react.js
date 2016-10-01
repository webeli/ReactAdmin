import React, { Component } from 'react';
import { Panel, ButtonToolbar, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as optionActions from '../../actions/optionActions';

import ModalNewItemOption from './Modal/Modal_New_ItemOption';
import ModalEditItemOption from './Modal/Modal_Edit_ItemOption';
import ModalDeleteOption from './Modal/Modal_Delete_Option';

class OptionList extends Component {

    componentWillUnmount() {
        this.props.clearOptionList();
    }

    constructor(props){
        super(props);
        this.state = {
            modalNewItemOption: false,
            modalEditItemOption: false,
            modalDeleteOption: false,
            selectedItemOption: ''
        };
    }

    setSelectedOption(option) {
        this.props.setSelectedOption(option);
        this.setState({
            modalEditItemOption: true
        })
    }

    render() {
        let modalNewItemOption = () => this.setState({ modalNewItemOption: false });
        let modalEditItemOption = () => this.setState({ modalEditItemOption: false });
        let modalDeleteOption = () => this.setState({ modalDeleteOption: false });
        let newOptionHolder = () => {
            return (
                <Col md={12}>
                    <Panel header={`Create option in item: ${this.props.itemSelectedTitle}`}>
                        <ButtonToolbar>
                            <Button bsStyle="default" onClick={()=>this.setState({ modalNewItemOption: true })}>+ New Option</Button>
                        </ButtonToolbar>
                    </Panel>
                </Col>
            )
        };

        let optionList = null;
        let newOption = null;
        let itemOptions = this.props.project.itemOptions;
        if (this.props.options && this.props.itemSelected) {
            newOption = newOptionHolder();
            optionList = Object.keys(this.props.options).map(option => {
                return (
                    <Col md={6} key={option}>
                        <Panel header={itemOptions[option].title} eventKey={option}>
                            <p style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{itemOptions[option].desc || 'No description'}</p>
                            <p>{itemOptions[option].price || 'No price'}</p>
                            <img src={itemOptions[option].image} height="50px" width="50px" alt={itemOptions[option].title}/>
                            <p></p>
                            <ButtonToolbar>
                                <Button bsSize="xsmall" bsStyle="danger" onClick={()=>this.setState({ modalDeleteOption: true })}>Delete</Button>
                                <Button bsSize="xsmall" bsStyle="primary" onClick={this.setSelectedOption.bind(this, option)}>Edit</Button>
                            </ButtonToolbar>
                        </Panel>
                    </Col>
                )
            });
        }
        return (
            <div>
                <ModalNewItemOption itemSelectedTitle={this.props.itemSelectedTitle} itemKey={this.props.itemKey} show={this.state.modalNewItemOption} onHide={modalNewItemOption} />
                <ModalEditItemOption itemSelectedTitle={this.props.itemSelectedTitle} itemKey={this.props.itemKey} show={this.state.modalEditItemOption} onHide={modalEditItemOption} />
                <ModalDeleteOption show={this.state.modalDeleteOption} onHide={modalDeleteOption} />
                {newOption}
                {optionList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itemSelected: state.options.selected,
        itemSelectedTitle: state.options.itemTitle,
        itemKey: state.options.itemKey,
        options: state.options.data,
        project: state.project
    };
}
function mapDispatchToProps(dispatch) {
    return {
        clearOptionList: () => dispatch(optionActions.clearOptionList()),
        setSelectedOption: (optionKey) => dispatch(optionActions.setSelectedOption(optionKey))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionList);