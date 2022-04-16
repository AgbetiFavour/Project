import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import BarchartFilter from './BarchartFilter';
import {
  options,
  labels,
  caregiversData,
  doctorsAndSpecialistData,
} from './barChatData';

// defaults.global.title.align = 'left';
defaults.global.elements.rectangle.radius = 20;

const BarChat = () => {
  // const [width, setWidth] = useState(500);

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     console.log(window.innerWidth, 'innerwidth');
  //     setWidth(window.innerWidth);
  //   });
  //   return () => window.removeEventListener('resize');
  // }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Caregivers',
        borderSkipped: false,
        data: caregiversData,
        backgroundColor: 'rgba(25, 165, 176, 1)',
        barThickness: 10,
      },

      {
        label: 'Doctors/Specialists',
        data: doctorsAndSpecialistData,
        backgroundColor: 'rgba(234, 111, 6, 1)',
        barThickness: 10,
      },
    ],
  };

  return (
    <Box bg='#fff' p={['1', '4']} borderRadius={5} h={[410]} w={['100%']}>
      <HStack justify='space-between' mb={-8} pt='2'>
        <Text as='h2'>User Activity</Text>
        <BarchartFilter />
      </HStack>
      <Bar
        data={data}
        options={options}
        height={500}
        // w={width || 100}
      />
      ;
    </Box>
  );
};

export default BarChat;
