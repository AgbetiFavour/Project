import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

export default function ImageModal({ img, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        color="#EA6F06"
        textDecoration={"underline"}
        cursor="pointer"
        onClick={onOpen}
      >
        View Uploaded Image
      </Text>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody width="100%">
            <Image width="100%" height="200px" src={img} alt="id card" />
          </ModalBody>      
        </ModalContent>
      </Modal>
    </>
  );
}
