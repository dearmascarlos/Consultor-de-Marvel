import React from 'react'
import { getMarvel } from '../services/apiMarvel'
import Header from '../components/Header/Header'
import CardSeriesList from '../components/CardList/CardSeriesList'
import { Box } from '@mui/material'
    
function SeriesPage() {
  const [info, setInfo] = React.useState([])

  const getSeries = async (q) => {
    const series = await getMarvel('series')
    setInfo(series)
    return false
  }

  React.useEffect(() => {getSeries()}, [])  
  return (
    <Box 
      className='box-page'
    >
      <Header/>
      <Box 
        className='box-container'
        sx={{
          justifyContent: 'center',
          mt: 35,
          padding: 2
        }}
      >
        
        <CardSeriesList info={info}/>
      </Box>
        
    </Box>
  )
}

export default SeriesPage