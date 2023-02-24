import React from 'react'
import { getCharactersById } from '../services/characters.service'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { Box } from '@mui/material'

function CharactersProfilePage() {
  const [info, setInfo] = React.useState([])

  const { id } = useParams()

  const getOneCharacter = async () => {
    const character = await getCharactersById(id)
    console.log(character)
  }

  getOneCharacter()
    
  return (
    <Box>
      <Header/>
    </Box>
  )
}

export default CharactersProfilePage