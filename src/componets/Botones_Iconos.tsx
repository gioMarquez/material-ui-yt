import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const Botones_Iconos = () => {
  return (
    <div>
        <Container>
            <h1 className='text-3xl'>Botones e Iconos</h1>
            <Typography
                variant="h3"
                color="primary"
            >
                H3 Titulo con MUI
            </Typography>
            <Button variant='contained'>Botón chulisimo</Button>
        </Container>
    </div>
  )
}

export default Botones_Iconos