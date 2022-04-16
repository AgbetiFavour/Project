import { Circle, Flex, Td, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { BsEye } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';
import CautionAlertDialog from '../../../components/common/CautionAlertDialog';
import CustomDrawer from '../../../components/common/CustomDrawer';
import ReportedPostDetails from './ReportedPostDetails';
import { deletePost } from "../service"

const ReportedTableRow = ({ id,updateTable, ...props }) => {
	const user = props.caregiverId || props.doctorId
		const { isOpen, onOpen, onClose } = useDisclosure()
	
		const handleDelete = _id => {
			deletePost(_id,  onClose).then(() => updateTable())
		}
	return (
		<Tr bg={id % 2 !== 0 ? "rgba(25, 165, 176, 0.03)" : "#fff"}>
			<Td>{id + 1}</Td>
			<Td isTruncated maxW={["120px", "150px", "200px"]}>
				{props?.content}
			</Td>
			<Td color="blue" fontWeight={"600"}>
				{user?.fullName}
			</Td>
			<Td>{props?.reportPost?.length}</Td>

			<Td py={2}>
				<Flex align="center">
					<CustomDrawer
						buttonProps={{ size: "xs" }}
						btn={
							<Circle p="3px" bg="rgba(25, 165, 176, 0.2)">
								<BsEye color="rgba(25, 165, 176, 0.8)" />
							</Circle>
						}
					>
						<ReportedPostDetails {...props} user={user} handleDelete={handleDelete} />
						
						
					</CustomDrawer>

					<CautionAlertDialog
						onContinue={() => handleDelete(props._id)}
						cautionTitle="Are you sure you want to delete this post?"
						buttonProps={{
							size: "sm",
							background: "transparent",
							p: 0,
						}}
						button={<FiTrash2 size={18} color="rgba(251, 78, 78, 1)" />}
					/>
				</Flex>
			</Td>
		</Tr>
	)
}
export default ReportedTableRow;
