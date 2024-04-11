import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

const TotalCampaignsChart = ({ totalCampaigns }) => {
  // Dados para o gráfico (uma fatia para o total de campanhas)
  const data = [{ name: 'Total de Campanhas', value: 5 }];

  // Cores para as fatias do gráfico
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
        <h6>Total de Campanhas</h6>
        <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
    </>

  );
};

export default TotalCampaignsChart;
