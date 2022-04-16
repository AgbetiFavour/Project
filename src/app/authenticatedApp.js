import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Redirect, Route, Switch } from "react-router";
import { PROTECTED_PATHS } from "./constants";
import { Navigation } from "../components/nav";
import SideBar from "../components/layout/sidebar";
import Forum from "../pages/forum";
import BankingRequests from "../pages/bookingRequests";
import Withdrawals from "../pages/withdrawals";
// import BookingSchedule from "../pages/bookings/components/BookingSchedule";
// import BookVirtual from "../pages/bookings/components/BookVirtual";
import Dashboard from "./../pages/dashboard/index";
import Setups from "../pages/setups";
import Doctors from "../pages/doctors";
import Children from "../pages/children";
import Caregivers from "../pages/caregivers";

const AuthenticatedApp = () => {
  const [toggleSide, setToggleSide] = useState(false);
  const [showSidebar] = useState(true);
  const [isMobileScreen] = useMediaQuery("(max-width: 600px)");

  const {
    DASHBOARD,
    FORUMS,
    BANKING_REQUESTS,
    WITHDRAWALS,
    CHILDREN,
    CAREGIVERS,
    DOCTORS_SPECIALISTS,
    SETUPS
  } = PROTECTED_PATHS;

  const handleToggle = () => {
    setToggleSide((initial) => !initial);
  };

  useEffect(() => {
    if (isMobileScreen) {
      setToggleSide((initial) => !initial);
    }
  }, [isMobileScreen]);
  return (
		<Box className="App" display="flex" bg="#f2f2f2">
			<Box w="100%" h="100%">
				<Navigation
					toggle={handleToggle}
					SideBarActive={toggleSide}
					showSidebar={showSidebar}
				/>
				<Box className={`app-container`}>
					<Box
						className="app-sidebar"
						display={`${toggleSide ? "none" : "block"}`}
					>
						{showSidebar ? <SideBar toggle={handleToggle} /> : ""}
					</Box>
					{/* app right */}

					<Box
						width="100%"
						maxWidth="100%"
						padding={["5px", "10px", "30px"]}
						textAlign="left"
						mt="80px"
					>
						<Switch>
							{/* <Route
                path={FORUM}
                exact
                render={(props) => (
                  <Forum
                    {...props}
                    toggle={handleToggle}
                    SideBarActive={toggleSide}
                    showSidebar={showSidebar}
                  />
                )}
              /> */}
							<Route path={DASHBOARD} exact component={Dashboard} />
							<Route path={FORUMS} exact component={Forum} />
							<Route
								path={BANKING_REQUESTS}
								exact
								component={BankingRequests}
							/>

							<Route path={WITHDRAWALS} exact component={Withdrawals} />
							<Route path={CHILDREN} exact component={Children} />
							<Route path={CAREGIVERS} exact component={Caregivers} />
							<Route path={DOCTORS_SPECIALISTS} exact component={Doctors} />
							<Route path={SETUPS} exact component={Setups} />
							<Redirect from="/*" to={DASHBOARD} />
						</Switch>
					</Box>
				</Box>
			</Box>
		</Box>
	)
};

export default AuthenticatedApp;
