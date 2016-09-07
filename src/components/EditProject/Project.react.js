import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryList from './CategoryList.react';
import OptionList from './OptionList.react';
import { connect } from 'react-redux';
import ModalProjectSettings from './Modal_ProjectSettings';
import ModalNewCategory from './Modal_NewCategory';
import * as updateDataActions from '../../actions/updateDataActions';

class Project extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalProjectSettings: false,
            modalNewCategory: false
        };
    }

    render() {
        let modalProjectSettings = () => this.setState({ modalProjectSettings: false });
        let modalNewCategory = () => this.setState({ modalNewCategory: false });


        //<Button bsStyle="default" onClick={()=>this.props.addCategory(this.props.projectKey)}>+ Category</Button>

        return (
            <Grid>
                <ModalProjectSettings show={this.state.modalProjectSettings} onHide={modalProjectSettings} />
                <ModalNewCategory show={this.state.modalNewCategory} onHide={modalNewCategory} />
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <h2>{this.props.project.pName}</h2>
                        <p>{this.props.project.deadline}</p>
                        <ButtonToolbar>
                            <Button onClick={()=>this.setState({ modalProjectSettings: true })}>Project Settings</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <ButtonToolbar>
                            <Button bsStyle="default" onClick={()=>this.setState({ modalNewCategory: true })}>+ Category</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <ButtonToolbar>
                            <Button bsStyle="default">+ Option</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <CategoryList projectKey={this.props.projectKey} categories={this.props.project.categories}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <OptionList />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        project: state.project
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addCategory: (key) => dispatch(updateDataActions.addCategory(key))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Project);