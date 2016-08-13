import React, { Component } from 'react';
import { Grid, Row, Col, Accordion, Panel, ButtonToolbar, Button } from 'react-bootstrap';
import CategoryList from './CategoryList.react';

class Project extends Component {

    render() {
        console.log(this.props);
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
                        <CategoryList categories={this.props.project.categories}/>
                    </Col>
                    <Col xs={12} md={6}>

                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Project;