import React, { Component } from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryList from './CategoryList.react';
import OptionListContainer from './OptionListContainer.react';

class Project extends Component {

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <h2>{this.props.project.pName}</h2>
                        <p>{this.props.project.deadline}</p>
                        <ButtonToolbar>
                            <Button>Project Settings</Button>
                            <Button bsStyle="primary">New Category</Button>
                        </ButtonToolbar>
                        <br />
                    </Col>
                    <Col xs={12} md={6}>
                        <CategoryList projectKey={this.props.projectKey} categories={this.props.project.categories}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <OptionListContainer projectKey={this.props.projectKey} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Project;