import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Form, Col, Row, Container } from 'react-bootstrap';
import './style.css';

const data = [
  {
    period: 'Janeiro',
    campaign: 'Campanha B',
    adType: 'Display',
    revenue: 1000,
  },
  {
    period: 'Fevereiro',
    campaign: 'Campanha A',
    adType: 'Imagem',
    revenue: 1200,
  },
  {
    period: 'Março',
    campaign: 'Campanha A',
    adType: 'Imagem',
    revenue: 1200,
  },
  {
    period: 'Abril',
    campaign: 'Campanha A',
    adType: 'Imagem',
    revenue: 1200,
  },
  {
    period: 'Maio',
    campaign: 'Campanha A',
    adType: 'Imagem',
    revenue: 1200,
  },
  {
    period: 'Junho',
    campaign: 'Campanha B',
    adType: 'Display',
    revenue: 1000,
  },
];

const RevenueReport = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Janeiro');
  const [selectedCampaign, setSelectedCampaign] = useState('Todas');
  const [selectedAdType, setSelectedAdType] = useState('Todas');
  const [filteredData, setFilteredData] = useState(data);
  const [filteredDataCampaign, setFilteredDataCampaign] = useState([{ value: 'Todas', label: 'Todas' }]);
  const [filteredDataAdType, setFilteredDataAdType] = useState([{ value: 'Todas', label: 'Todas' }]);

  useEffect(() => {
    const newData = data.filter(d => d.period === selectedPeriod);
    setFilteredData(newData);

    // Update options after initial data processing
    const campaignOptions = newData.map(d => ({ value: d.campaign, label: d.campaign }));
    setFilteredDataCampaign(campaignOptions.length > 0 ? campaignOptions : []);
  }, [selectedPeriod]);

  useEffect(() => {
    const newData = filteredData
      .filter(d => d.campaign === selectedCampaign)
      .map(d => ({ value: d.adType, label: d.adType }));
    setFilteredDataAdType(newData.length > 0 ? newData : [{ value: 'Todas', label: 'Todas' }]);
  }, [filteredData, selectedCampaign]);

  const columns = [
    {
      title: 'Período',
      dataIndex: 'period',
      key: 'period',
    },
    {
      title: 'Campanha',
      dataIndex: 'campaign',
      key: 'campaign',
    },
    {
      title: 'Tipo de anúncio',
      dataIndex: 'adType',
      key: 'adType',
    },
    {
      title: 'Receita',
      dataIndex: 'revenue',
      key: 'revenue',
    },
  ];

  const options = [
    { value: 'Janeiro', label: 'Janeiro' },
    { value: 'Fevereiro', label: 'Fevereiro' },
    { value: 'Março', label: 'Março' },
    { value: 'Abril', label: 'Abril' },
    { value: 'Maio', label: 'Maio' },
    { value: 'Junho', label: 'Junho' },
  ];

  const optionsCampaign = filteredDataCampaign.length > 0 ? filteredDataCampaign : [];
  const optionsAdType = filteredDataAdType.length > 0 ? filteredDataAdType : [];

  return (
    <Container>
      <h1 className='title-revenue'>Relatórios de receita</h1>
      <p className='text-rev'>Tabela com receita por período, campanha, tipo de anúncio</p>
      <Row>
        <Col xs={12} md={4}>
          <Form.Group controlId="periodSelect">
            <Form.Label className='label-rev'>Escolha o mês da campanha:</Form.Label>
            <Form.Select
              defaultValue={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group controlId="campaignSelect">
            <Form.Label className='label-rev'>Escolha o tipo de campanha:</Form.Label>
            <Form.Select
              defaultValue={selectedCampaign}
              onChange={(e) => setSelectedCampaign(e.target.value)}
            >
              {optionsCampaign.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group controlId="adTypeSelect">
            <Form.Label className='label-rev'>Escolha o tipo de Anúncio:</Form.Label>
            <Form.Select
              defaultValue={selectedAdType}
              onChange={(e) => setSelectedAdType(e.target.value)}
            >
              {optionsAdType.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={12}>
          <Table className='table-rev' striped bordered hover>
            <thead>
              <tr>
                {columns.map(col => (
                  <th key={col.key}>{col.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item.period}>
                  <td>{item.period}</td>
                  <td>{item.campaign}</td>
                  <td>{item.adType}</td>
                  <td>{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default RevenueReport;
