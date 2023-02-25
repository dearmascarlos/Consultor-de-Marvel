import React from 'react'
import SeriesCard from '../Card/SeriesCard'
import { Box } from '@mui/material'

function CardSeriesList( {info} ) {

  const renderCards = () => {
    return (
      info?.map((series, i) => {
        return (
          <SeriesCard
            key={i}
            id={series.id}
            title={series.title}
            image={series.thumbnail.path}
            ext={series.thumbnail.extension}
            description={series.description}
          />
        )
      })
    )
  }

  return (
    <Box 
      className='list-box'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {renderCards()}
    </Box>
  )
}

export default CardSeriesList