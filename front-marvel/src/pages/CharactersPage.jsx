import React from 'react'
import getMarvel from '../services/apiMarvel'
import Header from '../components/Header/Header'
import CardCharacterList from '../components/CardList/CardCharacterList'
import { Box } from '@mui/material'
    
function CharactersPage() {
  const [info, setInfo] = React.useState([])

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
          justifyContent: 'center',
          mt: 35,
          padding: 2
        }}
      >
        
        <CardCharacterList info={info}/>
      </Box>
        
    </Box>
  )
}
    
export default CharactersPage