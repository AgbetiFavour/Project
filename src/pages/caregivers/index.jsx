import { Box, Heading } from "@chakra-ui/react";
import "../../components/nav/index.css";
import { caregiversData } from "./components/caregivers";
import CaregiversCard from "./components/CaregiversCard";
import CaregiversTable from "./components/CaregiversTable";
import SearchArea from "./components/searchArea";


function Caregivers(props) {
  // const { SideBarActive, showSidebar, toggle } = props;
 return (
   <Box px={["20px", 0]}>
     <Heading as="h2" fontSize={["22px"]}>
       Caregivers
     </Heading>
     <Box mt="20px">
       <CaregiversCard />
     </Box>
     <Heading as="h3" fontSize={["18px"]} mt="30px">
       Caregivers List
     </Heading>
     <Box>
       <SearchArea />
     </Box>
     <CaregiversTable data={caregiversData} />
   </Box>
 );
}

export default Caregivers;
