import { Stack, Text, Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoctorSpecialistDonought = () => {
  const data = {
    labels: [
      'Pediatricians',
      'Nutritionists',
      'Dermatologist',
      'General Practitioner',
      'Dentists',
      'Therapists',
      'Lactationists',
    ],

    datasets: [
      {
        data: [22, 55, 33, 63, 66, 83, 12],
        backgroundColor: [
          '#19A5B0',
          '#9AB82E',
          '#0C1DB5',
          '#19B03A',
          '#B02419',
          '#6F19B0',
          '#EA6F06',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 77,

    layout: {
      padding: {
        top: 20,
        bottom: 10,
      },
    },

    plugins: {
      legend: {
        padding: {
          top: 20,
        },
      },
    },

    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 10,
        padding: 15,
      },
    },
  };
  return (
    <Box h='330px' pos='relative'>
      <Doughnut data={data} options={options} width={20} height={20} />
      <VStack className='doctor-doughnut-number'>
        <Text fontSize={'24px'} fontWeight='600'>
          35%
        </Text>
        <Text fontSize={'16px'} m='0 !important'>
          Pedeatricains
        </Text>
      </VStack>
    </Box>
  );
};

export default DoctorSpecialistDonought;
