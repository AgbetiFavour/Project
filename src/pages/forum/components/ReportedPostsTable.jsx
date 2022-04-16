import { Box, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import ReportedTableRow from './ReportedTableRow';

const ReportedPostsTable = ({ reportedPosts, updateTable }) => {
	return (
		<Box w="100%" overflowX="auto">
			<Table variant="unstyled" borderRadius="5" p="3" bg="#fff">
				<Thead>
					<Tr borderBottom={"1px solid"} borderColor="gray.200">
						<Th py="5">S/N</Th>
						<Th>posts</Th>
						<Th>Account</Th>
						<Th>No of Reports</Th>
						{/* <Th></Th> */}
					</Tr>
				</Thead>
				<Tbody>
					{reportedPosts.map((reportedPost, index) => (
						<ReportedTableRow
							key={index}
							id={index}
							{...reportedPost}
							updateTable= {updateTable}
							
						/>
					))}
				</Tbody>
			</Table>
		</Box>
	)
}

export default ReportedPostsTable;
