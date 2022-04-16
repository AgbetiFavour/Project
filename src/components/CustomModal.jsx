import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure, 
  Button,
} from "@chakra-ui/react"


import { Children, isValidElement, cloneElement, useRef } from "react"
import { useSelector } from "react-redux"

export default function CustomModal({
  btn,
  buttonProps,
  title,
  children,
  lgModal,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const childrenWithProps = Children.map(children, child => {
		if (isValidElement(child)) {
			return cloneElement(child, { onClose })
		}
		return child
	})

  return (
		<>
			<Button
				bg="transparent"
				_focus={{ border: "none" }}
				_hover={{ bg: "none" }}
				ref={btnRef}
				onClick={onOpen}
				{...buttonProps}
			>
				{btn}
			</Button>

			<ChakraModal
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				isCentered
				size={lgModal ? "xl" : "md"}
			>
				<ModalOverlay />
				<ModalContent py={1} bg="#F8F8F8">
					<ModalHeader textAlign="center">
						<b>{title}</b>
					</ModalHeader>
					{/* <ModalCloseButton _focus={{ borderBox: "none" }} /> */}
					{/* <Divider /> */}
					<ModalBody px={8}>{childrenWithProps}</ModalBody>
				</ModalContent>
			</ChakraModal>
		</>
	)
}
