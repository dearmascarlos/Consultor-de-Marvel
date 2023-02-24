import { Box } from '@mui/material'
import React from 'react'
import ComicsCard from '../Card/ComicsCard'

function CardComicsList( {info} ) {

  const renderCards = () => {
    return (
      info?.map((comic, i) => {
        return (
          <ComicsCard
            key={i}
            id={comic.id}
            title={comic.title}
            image={comic.thumbnail.path}
            ext={comic.thumbnail.extension}
            description={comic.description}
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

export default CardComicsList