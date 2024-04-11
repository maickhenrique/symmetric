import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TotalAdTypesChart = () => {
  // Dados para o gráfico
  const data = [
    { month: 'Janeiro', value: 10 },
    { month: 'Fevereiro', value: 15 },
    { month: 'Março', value: 20 },
    { month: 'Abril', value: 18 },
    { month: 'Maio', value: 22 },
    { month: 'Junho', value: 25 },
    { month: 'Julho', value: 30 },
    { month: 'Agosto', value: 28 },
    { month: 'Setembro', value: 26 },
    { month: 'Outubro', value: 20 },
    { month: 'Novembro', value: 18 },
    { month: 'Dezembro', value: 15 },
  ];
  

  return (
    <>
     <h6>Total de Tipos de Anúncio</h6>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
};

export default TotalAdTypesChart;
