import { Box } from '@mui/material'
import React from 'react'
import CardMarvel from '../Card/CardMarvel'

function CardSeriesList( {info} ) {

  const renderCards = () => {
    return (
      info?.map((series, i) => {
        return (
          <CardMarvel
            key={i}
            id={series.id}
            name={series.title}
            image={series.thumbnail.path}
            ext={series.thumbnail.extension}
            description={series.description}
          />
        )
      })
    )
  }

  // React.useEffect(() => {renderCards()}, [])
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