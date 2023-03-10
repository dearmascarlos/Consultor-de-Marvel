import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router'
import { infoContext } from '../App'
import { getCharactersById } from '../services/characters.service'
import Header from '../components/Header/Header'
import CardProfile from '../components/Card/CardProfile'
import { Box } from '@mui/material'

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

export default CharactersProfilePage

