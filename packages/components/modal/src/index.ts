import Modal from "./modal";
import ModalContent from "./modal-content";
import ModalHeader from "./modal-header";
import ModalBody from "./modal-body";
import ModalFooter from "./modal-footer";

// export types
export type {ModalProps} from "./modal";
export type {ModalContentProps} from "./modal-content";
export type {ModalHeaderProps} from "./modal-header";
export type {ModalBodyProps} from "./modal-body";
export type {ModalFooterProps} from "./modal-footer";

// export hooks
export {useModal} from "./use-modal";
export * from "@nextui-org/use-disclosure";

// export context
export * from "./modal-context";

// export components
export {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter};
