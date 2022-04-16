import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useState } from 'react';
// import { caregiversData } from './caregivers';
import CaregiversTable from './DoctorsTable';
import SearchArea from './searchArea';

export default function DoctorsTabs({ data }) {
  const [state, setState] = useState('requests');
  return (
    <Tabs variant="line">
      <TabList borderBlock={"none"}>
        <Tab
          _focus={{ boxShadow: "none" }}
          color="#1A1A1A"
          _selected={{
            borderBottom: "4px solid #19a5b0",
            borderBottomRadius: "3px",
            fontWeight: "bold",
          }}
          onClick={() => setState("requests")}
        >
          Registration Requests
        </Tab>
        <Tab
          _focus={{ boxShadow: "none" }}
          color="#1A1A1A"
          _selected={{
            borderBottom: "4px solid #19a5b0",
            borderBottomRadius: "3px",
            fontWeight: "bold",
          }}
          onClick={() => setState("list")}
        >
          Doctors/Specialist List
        </Tab>
      </TabList>
      <Box>
        <SearchArea />
      </Box>
      <TabPanels>
        <TabPanel p="0 !important">
          <CaregiversTable data={data} state={state} />
        </TabPanel>
        <TabPanel p="0 !important">
          <CaregiversTable data={data} state={state} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
