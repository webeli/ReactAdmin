import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

class Content extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                        <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={4}>
                        <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col><Col xs={12} md={4}>
                    <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
                        <h3>Thumbnail label</h3>
                        <p>Description</p>
                        <p>
                            <Button bsStyle="primary">Button</Button>&nbsp;
                            <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} md={4}>
                        <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
                            <h3>Thumbnail label</h3>
                            <p>Description</p>
                            <p>
                                <Button bsStyle="primary">Button</Button>&nbsp;
                                <Button bsStyle="default">Button</Button>
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Content;