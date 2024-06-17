import { Button } from '@mui/material'
import React from 'react'


function CustomButton({ size, onClick, type = 'button', variant = 'outlined', fullWidth = true, ...props }) {
  return (
    <Button
    size={size}
    type={type}
    onClick={onClick}
    variant={variant}
    fullWidth={fullWidth}
    {...props}
    />
  )
}

export default CustomButton