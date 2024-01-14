import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export const ErrorModal = ({
  handleClose,
  openModal,
  message,
}: {
  handleClose: () => void
  openModal: boolean
  message: string | null
}) => {
  return (
    <Dialog open={openModal} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Oops!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
