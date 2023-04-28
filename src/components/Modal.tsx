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
}

export default function Modal(props: ModalProps) {

  const { show, size, toogleModal, header, children} = props

  return (
    <Dialog size={size ? size : 'xl'} open={show} handler={toogleModal}>
      <DialogHeader>{header}</DialogHeader>
      <DialogBody divider>
        {children}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={toogleModal}
          className="mr-1"
        >
          <span>Cancelar</span>
        </Button>
        <Button variant="gradient" color="green" onClick={toogleModal}>
          <span>Confirmar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}