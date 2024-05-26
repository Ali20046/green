import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FeaturedServices = () => {
    return (
        <div>
            <Container className='featured-services section-bg'>
                <Row className='no-gutters'>
                    <Col lg='4' md='6'>
                        <div className="icon-box">
                            <div className="icon"><i className="bi bi-laptop"></i></div>
                            <h4 className="title"><a href="#">Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                    </Col>
                    <Col lg='4' md='6'>
                        <div className="icon-box">
                            <div className="icon"><i className="bi bi-briefcase"></i></div>
                            <h4 className="title"><a href="#">Dolor Sitema</a></h4>
                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                    </Col>
                    <Col lg='4' md='6'>
                        <div className="icon-box">
                            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                            <h4 className="title"><a href="#">Sed ut perspiciatis</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trade stravi</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FeaturedServices