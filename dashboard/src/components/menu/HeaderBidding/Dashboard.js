import React, { useState, useEffect } from 'react';
import KPIPanel from './KPIPanel';
import { Container}  from 'react-bootstrap';

const Dashboard = () => {
  // Supondo que você tenha as métricas disponíveis no estado local do componente
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [totalAdTypes, setTotalAdTypes] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [totalImpressions, setTotalImpressions] = useState(0);

  useEffect(() => {
    // Dados de exemplo para campanhas
    const campaignsData = [
      { campaign: 'Campanha 1', adType: 'Tipo A', revenue: 2500, clicks: 50, impressions: 1000 },
      { campaign: 'Campanha 2', adType: 'Tipo B', revenue: 1500, clicks: 75, impressions: 1500 },
      { campaign: 'Campanha 3', adType: 'Tipo A', revenue: 500, clicks: 100, impressions: 2000 },
    ];

    // Aqui você pode calcular as métricas com base nos dados disponíveis
    const campaigns = Object.values(campaignsData).flat();
    const uniqueCampaigns = [...new Set(campaigns.map(campaign => campaign.campaign))];
    const uniqueAdTypes = [...new Set(campaigns.map(campaign => campaign.adType))];
    const revenue = campaigns.reduce((total, campaign) => total + campaign.revenue, 0);
    const clicks = campaigns.reduce((total, campaign) => total + campaign.clicks, 0);
    const impressions = campaigns.reduce((total, campaign) => total + campaign.impressions, 0);
    const rate = (clicks / impressions) * 100; // Taxa de conversão em percentual

    setTotalRevenue(revenue);
    setTotalCampaigns(uniqueCampaigns.length);
    setTotalAdTypes(uniqueAdTypes.length);
    setTotalClicks(clicks);
    setConversionRate(rate);
    setTotalImpressions(impressions);
  }, []);

  return (
    <Container>
      <h1 className='title-revenue'>KPI</h1>
      <p className='text-rev'>KPI de receita total</p>
      <KPIPanel
        totalRevenue={totalRevenue}
        totalCampaigns={totalCampaigns}
        totalAdTypes={totalAdTypes}
        totalClicks={totalClicks}
        conversionRate={conversionRate}
        totalImpressions={totalImpressions}
      />
    </Container>
  );
};

export default Dashboard;
