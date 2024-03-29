import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogConfirm(props) {

    const setOpen = props.setOpen;
    const open = props.open;
    const handleClickConfirm = props.handleClickConfirm;
    const title = props.title;
    const message = props.message;


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleClickConfirm} autoFocus>
            Confirmar
            </Button>
        </DialogActions>
        </Dialog>
    );
}