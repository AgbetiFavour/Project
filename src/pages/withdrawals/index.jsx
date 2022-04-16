import { Text, Heading, Flex, Box, Tabs, TabPanels, TabPanel, Select, Table } from "@chakra-ui/react";
import "../../components/nav/index.css";
import SearchArea from "./components/searchArea";
import WithdrawalTable from "./components/WithdrawalTable";
import { withdrawalData } from "./components/withdrawalData";


function Withdrawals(props) {
  const { SideBarActive, showSidebar, toggle } = props;

  return (
    <>
      <Heading as="h2" fontSize={["22px"]}>
        Withdrawal Requests
      </Heading>
      <Box>
        <SearchArea />
      </Box>
     <WithdrawalTable data={withdrawalData} />
    </>
  );
}

export default Withdrawals;
