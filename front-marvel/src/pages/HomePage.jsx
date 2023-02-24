import React from 'react'
import Header from '../components/Header/Header'
import { Box } from '@mui/material'

function HomePage() {
  return (
    <Box className='contain-page'>
      <Header/>
      <Box 
          sx={{
              position: 'static',
              backgroundImage: 'url(https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Library-Sites-EMPSharedLibrary/default/dwe169dcbd/100151_MT_Marvel.jpg?sw=768)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              width: '100%' ,
              height: '100%',
              opacity: '0.7'
          }}
      >

      </Box>

    </Box>
  )
}

export default HomePage