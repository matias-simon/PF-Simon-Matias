import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <Box>
        <Typography variant="h1">No Hay Item en el Carrito</Typography>
        <Link to={"/"}>
          <Button
            variant="contained"
            size="large"
            sx={{
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