import React from 'react'
import { getMarvel } from '../services/apiMarvel'
import { infoContext } from '../App'
import { useContext } from 'react'
import Header from '../components/Header/Header'
import CardSeriesList from '../components/CardList/CardSeriesList'
import { Box } from '@mui/material'
    
function SeriesPage() {
  const { info, setInfo } = useContext(infoContext)

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
          mt: 30,
          padding: 2
        }}
        >
        <h1>Series</h1>
        
        <CardSeriesList info={info}/>
      </Box>
        
    </Box>
  )
}

export default SeriesPage