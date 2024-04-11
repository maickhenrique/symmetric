import React from 'react';
import { Container, Row, Col}  from 'react-bootstrap';
import RevenueChartTotal from './RevenueChartTotal';
import TotalCampaignsChart from './TotalCampaignsChart';
import TotalAdTypesChart from './TotalAdTypesChart';
import './style.css';

const Charts = () => {

    return (
        <Container className='container-chart'>
            <Row>
                <Col xs={12} md={4}> 
                    < RevenueChartTotal />
                </Col>
                <Col xs={12} md={4}> 
                    <TotalCampaignsChart />
                </Col>
                <Col xs={12} md={4}> 
                    <TotalAdTypesChart />
                </Col>
            </Row>
        </Container>
    );
}

export default Charts;