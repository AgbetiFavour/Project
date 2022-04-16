import React, { useRef, Children, isValidElement, cloneElement } from "react"
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
	Circle,
} from "@chakra-ui/react"
import { CustomButton } from "./CustomButton"
import { AiOutlineArrowLeft } from "react-icons/ai"

function DrawerModal({ btnTitle, btnIcon, title, children }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()
	const childrenWithProps = Children.map(children, child => {
		// Checking isValidElement is the safe way and avoids a TS error too.
		if (isValidElement(child)) {
			return cloneElement(child, { onClose })
		}

		return child
	})
	return (
		<>
			{/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				Open
			</Button> */}
			<CustomButton
				ref={btnRef}
				btnText={btnTitle}
				leftIcon={btnIcon}
				onClick={onOpen}
				
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="lg"
			>
				<DrawerOverlay />
				<DrawerContent bg="#E5E5E5">
					<DrawerHeader align="center" py={10}>
						<Circle
							p={3}
							size="3.5rem"
							bg="#DEF3F4"
							mr={3}
							onClick={onClose}
							cursor="pointer"
						>
							<AiOutlineArrowLeft color="#19A5B0" />
						</Circle>
						<b>{title}</b>
					</DrawerHeader>

					<DrawerBody>{childrenWithProps}</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default DrawerModal
