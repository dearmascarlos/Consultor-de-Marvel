import React from 'react'
import CharacterCard from '../Card/CharacterCard'
import { Box } from '@mui/material'

function CardCharacterList( {info} ) {

  const renderCards = () => {
    return (
      info?.map((character, i) => {
        return (
          <CharacterCard
            key={i}
            id={character.id}
            name={character.name}
            image={character.thumbnail.path}
            ext={character.thumbnail.extension}
            description={character.description}
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

export default CardCharacterList