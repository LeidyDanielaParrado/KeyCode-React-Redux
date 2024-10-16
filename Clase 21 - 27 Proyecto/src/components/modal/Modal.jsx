import React from "react";
import PropTypes from "prop-types";

import {
    Modal as ModalNextUi,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

const Modal = ({ children, btn_text, modal_title }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>{btn_text}</Button>

            <ModalNextUi
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{modal_title}</ModalHeader>
                            <ModalBody>{children}</ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Continuar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </ModalNextUi>
        </>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    btn_text: PropTypes.string.isRequired,
    modal_title: PropTypes.string.isRequired,
};

export default Modal;
