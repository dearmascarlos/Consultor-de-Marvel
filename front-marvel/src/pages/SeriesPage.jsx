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

  console.log(info)

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