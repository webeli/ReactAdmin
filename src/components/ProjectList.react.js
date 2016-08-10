import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

class ProjectList extends Component {

    render() {
        console.log(this.props);
        let projectList = this.props.data.map(project => {
            return (
                <Col key={project.key} xs={12} md={4}>
                    <Thumbnail src="https://s-media-cache-ak0.pinimg.com/564x/cd/05/0a/cd050aa0ef2b25c93249e0a25857d222.jpg" alt="242x200">
                        <h3>{project.val.pName}</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Edit</Button>&nbsp;
                            <Button bsStyle="default">Open</Button>
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
