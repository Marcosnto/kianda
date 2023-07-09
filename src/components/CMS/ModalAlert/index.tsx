import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type ModalAlertTypes = {
  isOpen: boolean;
  onClose: () => void;
  onEsc: () => void;
  content: string;
  title: string;
  btnLabel: string;
};

export function ModalAlert({
  isOpen,
  onClose,
  onEsc,
  content,
  title,
  btnLabel,
}: ModalAlertTypes) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onEsc={onEsc}
      blockScrollOnMount
      closeOnEsc
      closeOnOverlayClick={false}
      colorScheme="green"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{content}</ModalBody>

        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onClose}>
            {btnLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
