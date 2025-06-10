import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { colors } from '@mui/material';

export default function AdminPage() {
  const [highlightedItem, setHighLightedItem] = React.useState(null);


    const [items, setItems] = useState([]);
  

  return (
    <Stack
    
      direction={{ xs: 'column', md: 'row' }}
      spacing={1}
      sx={{ width: '100%' }}
    >
      <BarChart
        {...barChartsProps}
        highlightedItem={highlightedItem}
        onHighlightChange={setHighLightedItem}
   
      />
      <PieChart
        {...pieChartProps}
        highlightedItem={highlightedItem}
        onHighlightChange={setHighLightedItem}
        
      />


      
    

    </Stack>



  );
}

const barChartsProps = {
  series: [
    {
      data: [3, 4, 1, 6, 5],
      id: 'sync',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{ data: ['PETS', 'BIRDS', 'FISH', 'FOODS', 'PRODUCTS'] }],
  height: 400,
  hideLegend: true,
};

const pieChartProps = {
  series: [
    {
      id: 'sync',
      data: [
        { value: 3, label: 'PETS', id: 'A' },
        { value: 4, label: 'BIRDS', id: 'B' },
        { value: 1, label: 'FISH', id: 'C' },
        { value: 6, label: 'FOODS', id: 'D' },
        { value: 5, label: 'PRODUCTS', id: 'E' },
      ],
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  height: 200,
  hideLegend: true,



};
