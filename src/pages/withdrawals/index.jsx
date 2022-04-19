import {  Heading, Box } from "@chakra-ui/react";
import "../../components/nav/index.css";
import SearchArea from "./components/searchArea";
import WithdrawalTable from "./components/WithdrawalTable";
import { withdrawalData } from "./components/withdrawalData";
import { getWithdrawal } from "./service";
import { useEffect, useState } from "react";


function Withdrawals(props) {
 	// const [currentTab, setCurrentTab] = useState("")
	// const userId = useSelector(state => state.auth?.adminId)
	// const userType = useSelector(state => state.auth?.userType)
	const [withdrawal, setWithdrawal] = useState([])
	const [loading, setLoading] = useState(false)
	// const [updateTable, setUpdateTable] = useState({})


	useEffect(() => {
		getWithdrawal(setLoading,(data) => setWithdrawal(data))
  }, [])
  
  console.log({ withdrawal })

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
