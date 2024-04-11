import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChartTotal = () => {
  const data = [
    { month: 'Jan', revenue: 100 },
    { month: 'Fev', revenue: 150 },
    { month: 'Mar', revenue: 200 },
    { month: 'Abr', revenue: 250 },
    { month: 'Mai', revenue: 300 },
    { month: 'Jun', revenue: 350 },
    { month: 'Jul', revenue: 400 },
    { month: 'Ago', revenue: 450 },
    { month: 'Set', revenue: 500 },
    { month: 'Out', revenue: 550 },
    { month: 'Nov', revenue: 600 },
    { month: 'Dez', revenue: 650 },
  ];

  return (
    <>
    <h6>Total de Receita</h6>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </>

  );
};

export default RevenueChartTotal;
