import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import CSS styles for component
import './Honors.css';

// Import Icon Components
import { FaAward } from 'react-icons/fa';

function Honor(props) {
    return (
        <Row className='justify-content-md-center'>
            <Col xs='8'>
                <Row>
                    <Col xs='1'><FaAward className='icon' /></Col>
                    <Col xs='10'>
                        <p id='title'><strong> {props.title}</strong></p>
                        <p id='note'>{props.note}</p>
                    </Col>
                </Row>
            </Col>
            <Col xs='4'>
                <p id='date'>{props.date}</p>
            </Col>
        </Row>
    )
}

export default Honor;