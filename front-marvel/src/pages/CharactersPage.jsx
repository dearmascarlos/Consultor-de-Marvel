import React from 'react'
import Header from '../components/Header/Header'
import { Box } from '@mui/material'
    
function CharactersPage() {
  return (
    <Box 
      className='box-page'
    >
      <Header/>
      <Box 
        className='box-container'
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          mt: 35,
          padding: 2
        }}
      >
        

      </Box>

    </Box>
  )
}
    
export default CharactersPage