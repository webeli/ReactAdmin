import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryList from './CategoryList.react';
import OptionList from './OptionList.react';
import { connect } from 'react-redux';
import ModalProjectSettings from './ModalProjectSettings';

class Project extends Component {

    constructor(props){
        super(props);
        this.state = { lgShow: false };
    }

    render() {
        let lgClose = () => this.setState({ lgShow: false });

        return (
            <Grid>
                <ModalProjectSettings show={this.state.lgShow} onHide={lgClose} />
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <h2>{this.props.project.pName}</h2>
                        <p>{this.props.project.deadline}</p>
                        <ButtonToolbar>
                            <Button onClick={()=>this.setState({ lgShow: true })}>Project Settings</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <ButtonToolbar>
                            <Button bsStyle="default">+ Category</Button>
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
export default connect(mapStateToProps)(Project);