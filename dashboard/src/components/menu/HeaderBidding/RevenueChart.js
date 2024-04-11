import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Container } from 'react-bootstrap';

const campaignsData = {
  "Janeiro": [
    {
      "campaign": "Campanha Janeiro: Promoção Verão",
      "adType": "Display",
      "revenue": 1000
    },
    {
      "campaign": "Campanha Janeiro: Promoção Verão",
      "adType": "Social Media",
      "revenue": 500
    },
    {
      "campaign": "Campanha Janeiro: Rebranding",
      "adType": "Video",
      "revenue": 2000
    }
  ],
  "Fevereiro": [
    {
      "campaign": "Campanha Carnaval: Diversão garantida",
      "adType": "Display",
      "revenue": 1500
    },
    {
      "campaign": "Campanha Carnaval: Diversão garantida",
      "adType": "Influencer Marketing",
      "revenue": 1000
    },
    {
      "campaign": "Campanha Carnaval: Promoção de fantasias",
      "adType": "Search",
      "revenue": 3000
    }
  ],
  "Março": [
    {
      "campaign": "Campanha Dia da Mulher: Celebrando a força feminina",
      "adType": "Display",
      "revenue": 2000
    },
    {
      "campaign": "Campanha Dia da Mulher: Celebrando a força feminina",
      "adType": "Email Marketing",
      "revenue": 500
    },
    {
      "campaign": "Campanha Dia da Mulher: Descontos em produtos para mulheres",
      "adType": "Social Media",
      "revenue": 1500
    }
  ],
  "Abril": [
    {
      "campaign": "Campanha Páscoa: Chocolate para todos",
      "adType": "Display",
      "revenue": 1500
    },
    {
      "campaign": "Campanha Páscoa: Promoções em ovos de chocolate",
      "adType": "Search",
      "revenue": 2000
    }
  ],
  "Maio": [
    {
      "campaign": "Campanha Dia das Mães: Presenteie quem você ama",
      "adType": "Display",
      "revenue": 2500
    },
    {
      "campaign": "Campanha Dia das Mães: Descontos em produtos para mães",
      "adType": "Email Marketing",
      "revenue": 1000
    }
  ],
  "Junho": [
    {
      "campaign": "Campanha Dia dos Namorados: Amor em dobro",
      "adType": "Display",
      "revenue": 3000
    },
    {
      "campaign": "Campanha Dia dos Namorados: Promoções em presentes para casais",
      "adType": "Social Media",
      "revenue": 2000
    }
  ],
  "Julho": [
    {
      "campaign": "Campanha Férias de Julho: Diversão para toda a família",
      "adType": "Display",
      "revenue": 2000
    },
    {
      "campaign": "Campanha Férias de Julho: Pacotes de viagem com desconto",
      "adType": "Search",
      "revenue": 3500
    }
  ],
  "Agosto": [
    {
      "campaign": "Campanha Dia dos Pais: Homenagem aos heróis",
      "adType": "Display",
      "revenue": 2500
    },
    {
      "campaign": "Campanha Dia dos Pais: Descontos em presentes para pais",
      "adType": "Email Marketing",
      "revenue": 1500
    }
  ],
  "Setembro": [
    {
      "campaign": "Campanha Primavera: Floresça com alegria",
      "adType": "Display",
      "revenue": 1500
    },
    {
      "campaign": "Campanha Primavera: Promoções em produtos para o lar",
      "adType": "Social Media",
      "revenue": 1000
    }
  ],
  "Outubro": [
    {
      "campaign": "Campanha Outubro: Promoções especiais",
      "adType": "Display",
      "revenue": 2000
    },
    {
      "campaign": "Campanha Outubro: Ofertas imperdíveis",
      "adType": "Social Media",
      "revenue": 1500
    }
  ],
  "Novembro": [
    {
      "campaign": "Campanha Novembro: Descontos incríveis",
      "adType": "Display",
      "revenue": 1000
    },
    {
      "campaign": "Campanha Novembro: Novidades exclusivas",
      "adType": "Social Media",
      "revenue": 500
    },
    {
      "campaign": "Campanha Novembro: Promoções de fim de ano",
      "adType": "Video",
      "revenue": 2000
    }
  ],
  "Dezembro": [
    {
      "campaign": "Campanha Dezembro: Celebração do Natal",
      "adType": "Display",
      "revenue": 2000
    },
    {
      "campaign": "Campanha Dezembro: Ofertas de Natal",
      "adType": "Email Marketing",
      "revenue": 500
    },
    {
      "campaign": "Campanha Dezembro: Promoções de Ano Novo",
      "adType": "Social Media",
      "revenue": 1500
    }
  ]
};

const RevenueChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const totalRevenue = [];
    Object.values(campaignsData).forEach(monthData => {
      let total = 0;
      monthData.forEach(campaign => {
        total += campaign.revenue;
      });
      totalRevenue.push({ month: monthData[0].campaign.split(':')[0], totalRevenue: total });
    });
    setData(totalRevenue);
  }, []);

  const renderCustomAxisTick = ({ x, y, payload }) => {
    let path = '';

    switch (payload.value) {
      case 'Janeiro':
        path ="M662.528 451.584q10.24 5.12 30.208 16.384t46.08 31.744 57.856 52.736 65.024 80.896 67.072 115.2 64.512 154.624q-15.36 9.216-31.232 21.504t-31.232 22.016-31.744 15.36-32.768 2.56q-44.032-9.216-78.336-8.192t-62.976 7.68-53.248 16.896-47.616 19.968-46.08 16.384-49.664 6.656q-57.344-1.024-110.592-16.896t-101.376-32.256-89.6-25.088-75.264 4.608q-20.48 8.192-41.984 1.024t-38.912-18.432q-20.48-13.312-39.936-33.792 37.888-116.736 86.016-199.68t92.672-136.704 78.848-81.408 43.52-33.792q9.216-5.12 10.24-25.088t-1.024-40.448q-3.072-24.576-9.216-54.272l-150.528-302.08 180.224-29.696q27.648 52.224 53.76 79.36t50.176 36.864 45.568 5.12 39.936-17.92q43.008-30.72 80.896-103.424l181.248 29.696q-20.48 48.128-45.056 99.328-20.48 44.032-47.616 97.28t-57.856 105.472q-12.288 34.816-13.824 57.344t1.536 36.864q4.096 16.384 12.288 25.6z";
        break;
      case 'Fevereiro':
        path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
        break;
        case 'Março':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Abril':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Maio':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Junho':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Julho':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Agosto':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Setembro':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Outubro':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Novembro':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
        case 'Dezembro':
            path = 'M24.576 16.896q0-4.608 3.584-7.68t8.192-3.072h956.928q4.608 0 8.192 3.072t3.584 7.68q0 2.048-1.024 3.584l-478.72 872.448q-1.536 2.56-4.608 2.56t-4.096-2.56l-478.72-872.448q-1.024-1.024-1.024-3.584zM177.152 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM454.656 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192zM732.16 576h143.36q12.288 0 20.48-8.192t8.192-20.48v-262.144q0-12.288-8.192-20.48t-20.48-8.192h-143.36q-12.288 0-20.48 8.192t-8.192 20.48v262.144q0 12.288 8.192 20.48t20.48 8.192z';
            break;
      default:
        path = '';
    }

    return (
    <svg x={x - 12} y={y + 4} width={24} height={24} viewBox="0 0 1024 1024" fill="#666">
        <path d={path} />
    </svg>
    );
  };

  return (
    
    <Container className='container-revChart'>
        <p className='text-rev-chart'>Gráfico de linhas da receita total ao longo do tempo</p>
      <LineChart width={1000} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="totalRevenue" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" tick={renderCustomAxisTick} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Container>
  );
};

export default RevenueChart;
