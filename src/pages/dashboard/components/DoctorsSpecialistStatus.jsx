import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import DoctorSpecialistDonought from './DoctorSpecialistDonought';

const DoctorsSpecialistStatus = () => {
  return (
    <Stack
      bg='#fff'
      borderRadius={'5'}
      px='4'
      h='410px'
      w={['100%', '270px']}
      py='3'
    >
      <Text as='h3'>Doctors/Specialist Status</Text>
      <DoctorSpecialistDonought />
    </Stack>
  );
};

export default DoctorsSpecialistStatus;
