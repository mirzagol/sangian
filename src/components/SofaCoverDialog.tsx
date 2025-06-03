import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SofaCoverDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const SofaCoverDialog = ({
  isOpen,
  onClose,
  children,
}: SofaCoverDialogProps) => (
  <Dialog.Root
    open={isOpen}
    onOpenChange={(open) => !open && onClose()}
    size="cover"
    placement="center"
    motionPreset="slide-in-bottom"
  >
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>انتخاب سایز کاور</Dialog.Title>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Header>
          <Dialog.Body>
            {children || "جزئیات سایز کاور را اینجا اضافه کنید."}
          </Dialog.Body>
          <Dialog.Footer>
            <Button onClick={onClose}>بستن</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
);

export default SofaCoverDialog;
