import {
	Box,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CustomModal from "../../components/CustomModal"
import CreateTag from "./components/CreateTag"
import ReportedPostsTable from "./components/ReportedPostsTable"
import TagsTable from "./components/TagsTable"
import { getTags, getReportedPosts } from "./service"
import { MdAdd } from "react-icons/md"
import FullPageLoader from "../../components/fullPageLoader"

const Forum = () => {
	const [currentTab, setCurrentTab] = useState("")
	const userId = useSelector(state => state.auth?.adminId)
	const userType = useSelector(state => state.auth?.userType)
	const [tags, setTags] = useState([])
	const [reportedPosts, setReportedPosts] = useState([])
	const [loading, setLoading] = useState(false)
	const [updateTable, setUpdateTable] = useState({})


	useEffect((_id) => {
		getTags(userId, userType, setLoading, setTags)
		getReportedPosts(userType, setLoading, setReportedPosts)
	}, [updateTable])
	
	 return loading ? (
			<FullPageLoader />
		) : (
			<Box>
				<Tabs onChange={tabIndex => setCurrentTab(tabIndex)}>
					<TabList borderBottom="none" maxW="565px">
						{forumTableHead.map(tabHead => (
							<Tab
								{...tabStyle}
								_selected={{
									color: "blue",
									borderBottom: "4px solid",
									borderColor: "blue",
									borderBottomRadius: "3px",
								}}
								cursor="pointer"
							>
								{tabHead}
							</Tab>
						))}
						{currentTab === 1 && (
							<CustomModal
								title="Create tag"
								btn="Create tag"
								buttonProps={{
									leftIcon: <MdAdd size={20} />,
									bg: "blue",
									size: "sm",
									color: "#fff",
									mt: "auto",
									_hover: { opacity: 0.8 },
									mx: 10,
								}}
								size="xl"
							>
								<CreateTag
									updateTable={() => setUpdateTable({})}
									onClose={onclose}
								/>
							</CustomModal>
						)}
					</TabList>

					<TabPanels mt="5">
						<TabPanel>
							<ReportedPostsTable
								reportedPosts={reportedPosts}
								updateTable={() => setUpdateTable({})}
							/>
						</TabPanel>
						<TabPanel>
							<TagsTable
								tags={tags}
								userType={userType}
								userId={userId}
								updateTable={() => setUpdateTable({})}
							/>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		)
}

export default Forum

const tabStyle = {
	as: "h2",
	color: "#A0A4A8",
	padding: [3],
	mx: [0, 2, 5],
	_focus: { boder: "none" },
	fontSize: ["14px", "14px", "16px"],
}
const forumTableHead = ["Reported Posts", "Tags"]
