import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { cloneElement, Children, isValidElement, useRef } from 'react';

export default function CustomDrawer({ btn, children, btnIcon, buttonProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { onClose });
    }
    return child;
  });

  return (
    <>
      <Button
        bg='transparent'
        _focus={{ border: 'none' }}
        _hover={{ bg: 'none' }}
        ref={btnRef}
        onClick={onOpen}
        {...buttonProps}
      >
        {btn}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent bg='bgGlobal' px='2' py='5'>
          <DrawerBody>{childrenWithProps}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
