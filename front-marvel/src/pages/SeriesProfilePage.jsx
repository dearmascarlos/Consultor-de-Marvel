import React from 'react'
import { getSeriesById } from '../services/series.services'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { Box } from '@mui/material'

function SeriesProfilePage() {
  const [info, setInfo] = React.useState([])

  const { id } = useParams()

  const getOneSerie = async () => {
    const serie = await getSeriesById(id)
    console.log(serie)
  }

  getOneSerie()
    
  return (
    <Box>
      <Header/>
    </Box>
  )
}

export default SeriesProfilePage