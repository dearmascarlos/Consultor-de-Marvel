import React from 'react'
import { getMarvel } from '../services/apiMarvel'
import { infoContext } from '../App'
import { useContext } from 'react'
import Header from '../components/Header/Header'
import CardComicsList from '../components/CardList/CardComicsList'
import { Box } from '@mui/material'

function ComicsPage() {

  const { info, setInfo } = useContext(infoContext)
  
  const getComics = async (q) => {
    const comics = await getMarvel('comics')
    setInfo(comics)
    return false
  }

  React.useEffect(() => {getComics()}, [])  
  return (
    <Box 
      className='box-page'
    >
      <Header/>
      <Box 
        className='box-container'
        sx={{
          justifyContent: 'center',
          mt: 30,
          padding: 2
        }}
        >
        <h1>Comics</h1>
        <CardComicsList info={info}/>
      </Box>
        
    </Box>
  )
}

export default ComicsPage