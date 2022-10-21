import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const Snack = ({ isOpen, handleClose = Function.prototype }) => {
   return (
      <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
         <Alert severity='info'>Товар добавлен в корзину!</Alert>
      </Snackbar>
   )
}
