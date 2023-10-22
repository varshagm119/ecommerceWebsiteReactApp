import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Counter = () => {
 return(
    <div>
        <Container className="mt-3">
            <Row>
                <Col xs={4}>
                <Card className="shadow-lg">
                    <Card.Body>
                        <p className="display-2">Count</p>
                        <Button variant="success" className="m-1">Increment</Button>
                        <Button variant="warning" className="m-1">Decrement</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
 )
};

export default Counter