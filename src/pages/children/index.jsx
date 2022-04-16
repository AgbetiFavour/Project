import { Heading, Box } from "@chakra-ui/react";
import "../../components/nav/index.css";
import SearchArea from "./components/searchArea";
import { childrenData } from "./components/childrenData";
import ChildrenTable from "./components/ChildrenTable";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getChildren } from "./service";


function Children(props) {
    const [loading, setLoading] = useState(false)
		const [children, setChildren] = useState([])
  const userType = useSelector(state => state.auth?.userType)
  
   useEffect(() => {
			getChildren(userType, setLoading, setChildren)
   }, [])
  console.log(children, "sjff")
  return (
    <>
      <Heading as="h2" fontSize={["22px"]}>
        Children
      </Heading>
      <Box>
        <SearchArea />
      </Box>
      <ChildrenTable {...children} />
    </>
  );
}

export default Children;
