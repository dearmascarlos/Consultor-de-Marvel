import React from 'react'
import { getCharactersById } from '../services/characters.service'
import { infoContext } from '../App'
import { useContext } from 'react'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { Box } from '@mui/material'
import CardProfile from '../components/Card/CardProfile'

function CharactersProfilePage() {
  const { info, setInfo } = useContext(infoContext)

  const { id } = useParams()

  const getOneCharacter = async () => {
    const character = await getCharactersById(id)
    setInfo(character)
    return false
  }
  
  
  React.useEffect(() => {getOneCharacter()}, [id] )
  return (
    <Box>
      <Header/>
      <CardProfile info={info}/>
      
    </Box>
  )
}

export default CharactersProfilePage