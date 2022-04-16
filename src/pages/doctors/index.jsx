import { Box, Heading } from "@chakra-ui/react";
import { doctorsData } from "./components/doctorsData";
import CaregiversCard from "./components/DoctorsCard";
// import CaregiversTable from "./components/DoctorsTable";
import DoctorsTabs from "./components/DoctorsTabs";
// import SearchArea from "./components/searchArea";


function Doctors(props) {

  return (
    <Box px={["20px", 0]}>
      <Heading as="h2" fontSize={["22px"]}>
        Doctors/Specialists
      </Heading>
      <Box mt="20px">
        <CaregiversCard />
      </Box>
      {/* <Heading as="h3" fontSize={["18px"]} mt="30px">
        Caregivers List
      </Heading> */}
      {/* <Box>
        <SearchArea />
      </Box> */}
      <Box mt="30px">
        <DoctorsTabs data={doctorsData} />
      </Box>
      {/* <CaregiversTable data={caregiversData} /> */}
    </Box>
  );
}

export default Doctors;
