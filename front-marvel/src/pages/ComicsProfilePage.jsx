import React from 'react'
import { getComicsById } from '../services/comics.services'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { Box } from '@mui/material'

function ComicsProfilePage() {
  const [info, setInfo] = React.useState([])

  const { id } = useParams()

  const getOneComic = async () => {
    const comic = await getComicsById(id)
    console.log(comic)
  }

  getOneComic()
    
  return (
    <Box>
      <Header/>
    </Box>
  )
}

export default ComicsProfilePage