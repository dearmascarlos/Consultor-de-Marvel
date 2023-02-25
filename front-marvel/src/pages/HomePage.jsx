import React from 'react'
import Header from '../components/Header/Header'
import { Box, Typography } from '@mui/material'

function HomePage() {
  return (
    <Box 
      className='contain-page'
      
    >
      <Header/>
      <Box
        sx={{
          mt: 32,
          width:'100%',
          maxHeight: '680px',
          display: 'flex',
          flexDirection:  'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <div 
            className='home-top'
        >
          <Typography 
            sx={{
              padding: 2,
              maxWidth: '800px',
              color: 'white'
            }}
            variant='h3'
          >
            WELCOME CONSULTOR
          </Typography>

        </div>
        <div 
            className='home-medium'
        >
          <Typography 
            sx={{
              padding: 2,
              maxWidth: '800px',
              color: 'black'
            }}
            variant='h5'
          >
            Marvel Comics was born in 1939 as a superhero comic book publisher founded by Martin Goodman, 
            then 31 years old. At first, it was a secondary project of the entrepreneur, 
            who already had another publishing house specializing in novels set in the American West.
              <br></br>
              <br></br>
            This website has been created as a testing exercise, establishing connections with the Marvel API
          </Typography>

        </div>
        <div 
            className='home-bottom'
        >
          

        </div>
      </Box>
    </Box>
  )
}

export default HomePage