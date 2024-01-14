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
}: {
  handleClose: () => void
  openModal: boolean
}) => {
  return (
    <Dialog open={openModal} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">Oops!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          An error occured when trying to fetch user data, please try again!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  )
}
