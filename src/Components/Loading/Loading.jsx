import { Container, Typography } from '@mui/material'
import React from 'react'
import Logo from "./loader.gif"

const Loading = () => {
  return (
    <Container sx={{display: "grid", placeItems:'center', minHeight:'100vh'}}>
      <img src={Logo} alt="Loading" />
    <Typography variant='h5' sx={{textAlign:'center'}}>Loading....</Typography>
    </Container>
  )
}

export default Loading