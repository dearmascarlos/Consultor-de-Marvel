import React from 'react'
import { getSeriesById } from '../services/series.services'
import { infoContext } from '../App'
import { useContext } from 'react'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { Box } from '@mui/material'
import CardProfile from '../components/Card/CardProfile'

function SeriesProfilePage() {
  const { info, setInfo } = useContext(infoContext)

  const { id } = useParams()

  const getOneSerie = async () => {
    const serie = await getSeriesById(id)
    setInfo(serie)
    return false
  }

  React.useEffect(() => {getOneSerie()}, [id])
  return (
    <Box 
      className='box-page'
    >
      <Header/>
      <Box 
        className='box-container'
        sx={{
          justifyContent: 'center',
          mt: 33,
        }}
      >
        <CardProfile info={info}/>
      </Box>
    </Box>
  )
}

export default SeriesProfilePage