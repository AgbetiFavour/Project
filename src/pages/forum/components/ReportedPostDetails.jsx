import {
  Avatar,
  Box,
  Button,
  Circle,
  HStack,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { RiMedalLine } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import CautionAlertDialog from '../../../components/common/CautionAlertDialog';
import baby from '../../../assets/images/baby.svg';
import { BiPurchaseTag } from 'react-icons/bi';
import LikeCommentShare from './LikeCommentShare';
import { format } from 'date-fns';

const ReportedPostDetails = ({ onClose,user,handleDelete,...props }) => {
  return (
		<Stack gap="2">
			<HStack justify="space-between" mb="3">
				<Circle p="5px" bg="#DEF3F4" cursor="pointer" onClick={onClose}>
					<IoIosArrowBack size={18} color="#19A5B0" />
				</Circle>
				<CautionAlertDialog
					onContinue={() => handleDelete(props._id)}
					cautionTitle="Are you sure you want to delete this reported post?"
					buttonProps={{
						size: "sm",
						background: "transparent",
						p: 0,
					}}
					button={<FiTrash2 size={18} color="rgba(251, 78, 78, 1)" />}
				/>
			</HStack>
			<HStack gap="3">
				<Avatar size="lg" src="" name={user.fullName} />
				<Stack>
					<Text as="h3">{user.fullName}</Text>
					<HStack m="0 !important">
						<Text>{user?.rolesDescription}</Text>
						<Text>
							{" "}
							{props?.createdAt &&
								format(new Date(props?.createdAt), "d-MM-yyyy")}{" "}
							ago
						</Text>
					</HStack>
				</Stack>
				<Box>
					<RiMedalLine className="medal" />
				</Box>
			</HStack>
			<Text as="h3">{props.title}</Text>
			<Text mt="0 !important">{props.content}</Text>
			<Img src={user.imageUrl} w="100%" />
			<Box py="8px">
				<Button
					bg="orange"
					w="100px"
					color="#fff"
					size="sm"
					borderRadius={"8"}
					leftIcon={<BiPurchaseTag size={18} />}
				>
					Feeding
				</Button>
			</Box>
			<LikeCommentShare {...props} />
		</Stack>
	)
};

export default ReportedPostDetails;
