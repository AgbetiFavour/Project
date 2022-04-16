import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import RequestInfoFields from './RequestInfoFields';

export default function ChildrenProfile() {
  const data = useSelector(state=> state.userReducer?.user)
  return (
    <Box>
      <Box my="20px">
        <RequestInfoFields title={"Name Of Child"} details={data?.name} />
      </Box>
      <Box my="20px">
        <RequestInfoFields title={"Gender"} details={data?.sex} />
      </Box>
      <Box my="20px">
        <RequestInfoFields title={"Date Of Birth"} details={data?.dob} />
      </Box>
      <Box my="20px">
        <RequestInfoFields title={"Last Known Weight"} details={data?.weight} />
      </Box>
      <Box my="20px">
        <RequestInfoFields title={"Age At Last Known Weight"} details={data?.age} />
      </Box>
      <Box my="20px">
        <RequestInfoFields title={"Allergies"} details={data?.allergies} />
      </Box>
      <Box my="20px">
        <RequestInfoFields
          title={"Special Needs (i.e Mental or Physical Challenges)"}
          details={data?.specialNeeds}
        />
      </Box>
      <Box my="20px">
        <RequestInfoFields
          title={"Medical Conditions (i.e Diabetes, Asthma, etc.)"}
          details={data?.medCond}
        />
      </Box>
      <Box my="20px">
        <RequestInfoFields title={"Date Of Registration"} details={data?.dateOfReg} />
      </Box>
    </Box>
  );
}
