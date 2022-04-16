import { PROTECTED_PATHS } from "../../../../app/constants"

import { RiDashboardLine } from "react-icons/ri"
import {
  AiOutlineMedicineBox,
  AiOutlineSetting,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai"
import { HiOutlineUserGroup } from "react-icons/hi"
import { BsBell, BsStack, BsChatRightQuote } from "react-icons/bs";
import { FiUser, FiUsers } from "react-icons/fi"
import { GiComputing } from "react-icons/gi"
import { MdOutlineForum, MdOutlinePersonalInjury } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5"
import { MdOutlineDashboard } from "react-icons/md"
import naira from "../assets/naira.png"
import { Image } from "@chakra-ui/react";
import { FaBaby } from "react-icons/fa";

const {
  DASHBOARD,
  FORUMS,
  BANKING_REQUESTS,
  WITHDRAWALS,
  CHILDREN,
  CAREGIVERS,
  DOCTORS_SPECIALISTS,
  SETUPS,
  
} = PROTECTED_PATHS

export const ADMIN = [
  {
    title: "Dashboard",
    to: DASHBOARD,
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Forums",
    to: FORUMS,
    icon: <MdOutlineForum />,
  },
  {
    title: "Booking-Requests",
    to: BANKING_REQUESTS,
    icon: <BsChatRightQuote />,
  },

  {
    title: "Withdrawals",
    to: WITHDRAWALS,
    // icon: <IoTimeOutline />,
    icon: <Image src={naira} boxSize="16px" alt="currency sign" />,
  },
  {
    title: "Children",
    to: CHILDREN,
    icon: <FaBaby />,
  },
  {
    title: "Caregivers",
    to: CAREGIVERS,
    icon: <FiUser />,
  },
  {
    title: "Doctors/Specialists",
    to: DOCTORS_SPECIALISTS,
    icon: <MdOutlinePersonalInjury />,
  },
  {
    title: "SetUps",
    to: SETUPS,
    icon: <BsStack />,
  },
];
