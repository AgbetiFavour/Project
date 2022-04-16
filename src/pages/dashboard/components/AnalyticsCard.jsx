import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

// use a global 14px font-size
const AnalyticsCard = ({ title, amount }) => {
  return (
    <Stack
      bg='white'
      p={['4', '3']}
      borderRadius={'10px'}
      w={['100%', '225px', '235px']}
    >
      <Text fontWeight='600'>{title}</Text>
      <Text fontSize='24px' color='blue' fontWeight='700' py='2px'>
        {amount}
      </Text>
    </Stack>
  );
};

export default AnalyticsCard;
