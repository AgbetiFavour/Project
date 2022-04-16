import React from 'react';
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

export default function CautionAlertDialog({
  onContinue,
  loading,
  button,
  cautionTitle,
  agree,
  disagree,
  buttonProps,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const BTN = {
    _focus: { boxShadow: 'none' },
    color: 'white',
    _hover: {},
  };

  const handleClick = () => {
    onClose();
    onContinue(true);
  };

  return (
    <>
      <Button
        _focus={{ boxShadow: 'none' }}
        _hover={{ opacity: '0.8' }}
        onClick={onOpen}
        isLoading={loading && loading}
        color='#fff'
        {...buttonProps}
      >
        {button}
      </Button>

      <AlertDialog
        motionPreset='slideInBottom'
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        // size={'xs'}
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{cautionTitle}</AlertDialogHeader>

          <AlertDialogFooter>
            <Button
              colorScheme='red'
              ref={cancelRef}
              onClick={onClose}
              _focus={{ boxShadow: 'none' }}
            >
              {disagree || 'No'}
            </Button>
            <Button {...BTN} bg='blue' onClick={handleClick} ml={3}>
              {agree || 'Yes'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
