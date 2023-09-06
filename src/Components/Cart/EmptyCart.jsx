import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} height={'80vh'}>
        <Typography variant="h1">No Hay Items en el Carrito</Typography>
        <Link to={"/"}>
          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop:6,
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
            }}
          
          >
            Productos
          </Button>
        </Link>
      </Box>

  )
}

export default EmptyCart