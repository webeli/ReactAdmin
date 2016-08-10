import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

class ProjectList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        let projectList = this.props.data.map(project => {
            return (
                <Col xs={12} md={4}>
                    <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
                        <h3>{project.pName}</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>&nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
            )
        });

        return (
            <Grid>
                <Row className="show-grid">
                    {projectList}
                </Row>
            </Grid>
        );
    }
}

export default ProjectList;
