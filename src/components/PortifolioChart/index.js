import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function PortfolioChart({ chartData, total }) {
  const [displayLegend, setDisplayLegend] = useState(true);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        display: displayLegend,
      },
    },
  };

  return (
    <ChartContainer>
      <DoughnutContainer>
        <Doughnut data={chartData} options={chartOptions} />
      </DoughnutContainer>
      <ArrowIcon onClick={() => setDisplayLegend(!displayLegend)}>
        {displayLegend ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </ArrowIcon>
      <p>{'Valor da carteira: R$ ' + total}</p>
    </ChartContainer>
  );
}

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`;

const DoughnutContainer = styled.div`
  width: 20rem;
  height: 20rem;
`;

const ArrowIcon = styled.div`
  font-size: 2rem;
  margin: 0.5rem 0;
`;