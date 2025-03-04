'use client';

import ClientLayout from '@/app/layouts/ClientLayout';
import RootLayout from '@/app/layouts/RootLayout';
import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavegationBar } from '../components/NavegationBar';

const Dashboard: React.FC = () => {
    return (
        <RootLayout>
            <ClientLayout>
                <NavegationBar></NavegationBar>
                <Container fluid className="mt-4" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title 1</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title 2</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card Title 3</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </ClientLayout>
        </RootLayout>
    );
};

export default Dashboard;