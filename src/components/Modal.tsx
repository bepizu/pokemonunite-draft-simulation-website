import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { size } from '@material-tailwind/react/types/components/dialog';
import { ReactNode } from 'react';

type ModalProps = {
  show: boolean,
  toogleModal: () => void,
  size?: size,
  header: string | ReactNode,
  children: ReactNode,
  successButtonLabel?: string,
  successButtonAction?: Function,
  cancelButtonLabel?: string,
  cancelButtonAction?: Function,
}

export default function Modal(props: ModalProps) {

  const {
    show,
    size,
    toogleModal,
    header,
    children,
    successButtonLabel,
    successButtonAction,
    cancelButtonLabel,
    cancelButtonAction,
  } = props

  return (
    <Dialog size={size ? size : 'xl'} open={show} handler={toogleModal}>
      <DialogHeader>{header}</DialogHeader>
      <DialogBody divider>
        {children}
      </DialogBody>
      {(successButtonAction || cancelButtonAction) && (
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => {
              cancelButtonAction && cancelButtonAction()
              toogleModal()
            }}
            className="mr-1"
          >
            <span>{cancelButtonLabel || "Cancelar"}</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => {
            successButtonAction && successButtonAction()
            toogleModal()
          }}>
            <span>{successButtonLabel || "Confirmar"}</span>
          </Button>
        </DialogFooter>
      )}
    </Dialog>
  );
}