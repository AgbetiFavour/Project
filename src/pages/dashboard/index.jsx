import { Flex, Grid, GridItem, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import '../../components/nav/index.css';
import AnalyticsCard from './components/AnalyticsCard';
import BarChat from './components/BarChat';
import DoctorsSpecialistStatus from './components/DoctorsSpecialistStatus';
import UserStatusDoughnut from './components/UserStatusDoughnut';
import { getAnalytics, getStatistics } from './service';
import FullPageLoader from './../../components/fullPageLoader';
import { useSelector } from 'react-redux';

function Dashboard() {
  const [analytics, setAnalytics] = useState([])
  const [loading, setLoading] = useState(false)
  const [statistics, setStatistics] = useState([])
  const userType = useSelector(state => state.auth?.userType)
  
  // console.log(userType, "userTy")
  
  
  useEffect(() => {
    getAnalytics(userType, setLoading, setAnalytics)
    getStatistics(userType, setLoading, setStatistics)
  }, [])
  console.log(statistics, "sjff")

  const cardData = [
		{
			title: "Registered Caregivers",
			amount: analytics?.registeredCaregivers,
		},
		{
			title: "Active Caregivers",
			amount: analytics?.activeCaregivers,
		},
		{
			title: "Registered Doctors/Specialists",
			amount: analytics?.registeredDoctors,
		},
		{
			title: "Active Doctors/Specialists",
			amount: analytics.activeDoctors,
		},
		{
			title: "Total Consultations Completed",
			amount: analytics?.totalConsultations,
		},
		{
			title: "Pending Booking Requests",
			amount: analytics?.pendingBookings,
		},
	]
  
  return loading ? (
		<FullPageLoader />
	) : (
		<Flex
			w={["100%", "100%", "calc(100% - 250px)", "100%"]}
			h="100vh"
			gridGap={8}
			p="2"
			direction={["column", "column", "column", "row"]}
		>
			<Stack flex={7}>
				<Grid
					templateColumns={[
						"repeat(1, 1fr)",
						"repeat(2, 1fr)",
						"repeat(2, 1fr)",
						"repeat(3, 1fr)",
					]}
					gap={[5, 4, 5]}
					mb="5"
				>
					{cardData.map(card => (
						<GridItem key={card.title}>
							<AnalyticsCard title={card.title} amount={card.amount} />
						</GridItem>
					))}
				</Grid>

				<BarChat />
			</Stack>
			<Flex
				flex={3}
				justify={["space-between", "flex-start", "space-between", "start"]}
				direction={["column", "column", "row", "column"]}
			>
				<UserStatusDoughnut statistics={statistics} />
				<DoctorsSpecialistStatus />
			</Flex>
		</Flex>
	)
}


export default Dashboard;

