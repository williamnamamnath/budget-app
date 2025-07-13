import React from 'react';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Signup = () => {
  return (
    <>
    <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <Card.Title className="my-3 fs-1 text-center">Sign Up</Card.Title>

              <p className='my-5 fs-5 fw-bold text-center'>Create an account to start saving effectively.</p>

              <Form>
                <Form.Group className="mb-4" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 my-3">
                  Create Account
                </Button>
                <a class="p-1 rounded" href="/login">Already have an account? Click here to log in</a>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Signup;