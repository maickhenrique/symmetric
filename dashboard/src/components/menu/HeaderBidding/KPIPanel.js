import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { faBullhorn, faMoneyBillAlt, faAd, faMousePointer, faEye, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KPIPanel = ({ totalRevenue, totalCampaigns, totalAdTypes, totalClicks, conversionRate, totalImpressions }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} className='col-kpi'>
          <Card className='kpi-card'>
            <Card.Body>
              <Card.Title className='kpi-title'>Total de Receita</Card.Title>
              <Card.Text className='kpi-text'>
                {totalRevenue}
              </Card.Text>
              <Card.Text className='kpi-icon'>
                <FontAwesomeIcon icon={faMoneyBillAlt} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className='col-kpi'>
          <Card className='kpi-card'>
            <Card.Body>
              <Card.Title className='kpi-title'>Total de Campanhas</Card.Title>
              <Card.Text className='kpi-text'>
              {totalCampaigns}
              </Card.Text>
              <Card.Text className='kpi-icon'>
                <FontAwesomeIcon icon={faBullhorn} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className='col-kpi'>
          <Card className='kpi-card'>
            <Card.Body>
              <Card.Title className='kpi-title'>Total de Tipos de Anúncio</Card.Title>
              <Card.Text className='kpi-text'>
                {totalAdTypes}
              </Card.Text>
              <Card.Text className='kpi-icon'>
                <FontAwesomeIcon icon={faAd} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className='col-kpi'>
          <Card className='kpi-card'>
            <Card.Body>
              <Card.Title className='kpi-title'>Total de Cliques</Card.Title>
              <Card.Text className='kpi-text'>
                {totalClicks}
              </Card.Text>
              <Card.Text className='kpi-icon'>
                <FontAwesomeIcon icon={faMousePointer} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className='col-kpi'>
          <Card className='kpi-card'>
            <Card.Body>
              <Card.Title className='kpi-title'>Taxa de Conversão</Card.Title>
              <Card.Text className='kpi-text'>
                {conversionRate !== undefined ? `${conversionRate.toFixed(2)}%` : 'Carregando...'}
              </Card.Text>
              <Card.Text className='kpi-icon'>
                <FontAwesomeIcon icon={faChartLine} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xs={12} md={4} className='col-kpi'>
          <Card className='kpi-card'>
            <Card.Body>
              <Card.Title className='kpi-title'>Total de Impressões</Card.Title>
              <Card.Text className='kpi-text'>
                {totalImpressions}
              </Card.Text>
              <Card.Text className='kpi-icon'>
                <FontAwesomeIcon icon={faEye} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default KPIPanel;
