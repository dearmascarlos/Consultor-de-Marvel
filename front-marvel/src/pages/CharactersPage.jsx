import React from 'react'
import { getMarvel } from '../services/apiMarvel'
import { infoContext } from '../App'
import { useContext } from 'react'
import Header from '../components/Header/Header'
import CardCharacterList from '../components/CardList/CardCharacterList'
import { Box, Button } from '@mui/material'
    
function CharactersPage() {
  const { info, setInfo } = useContext(infoContext)

  const getCharacters = async (q) => {
    const characters = await getMarvel('characters')
    setInfo(characters)
    return false
  }

  React.useEffect(() => {getCharacters()}, [])  
  return (
    <Box 
      className='box-page'
    >
      <Header/>
      <Box 
        className='box-container'
        sx={{
          mt: 30,
          padding: 2
        }}
        >
        <h1>Characters</h1>
        
        <CardCharacterList info={info}/>
        <Box 
          sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2}}
        >
          <Button
            sx={{
              display: 'flex',
              alignSelf:'center',
              justifySelf: 'center',
              maxWidth: '350px',
              borderRadius: '10px',
              boxShadow: '10px 5px 10px', 
              color: 'red', 
              fontSize: 20,
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
                opacity: '0.7'
              }
            }}
            href='https://www.marvel.com/comics/characters'
            target='_blank'
            >
            MORE CHARACTERS!!! BONUS
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
    
export default CharactersPage