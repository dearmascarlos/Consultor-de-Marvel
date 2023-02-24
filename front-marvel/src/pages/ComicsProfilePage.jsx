import React from 'react'
import { getComicsById } from '../services/comics.services'
import { infoContext } from '../App'
import { useContext } from 'react'
import Header from '../components/Header/Header'
import { useParams } from 'react-router'
import { Box } from '@mui/material'
import CardProfile from '../components/Card/CardProfile'

function ComicsProfilePage() {
  const { info, setInfo } = useContext(infoContext)

  const { id } = useParams()

  const getOneComic = async () => {
    const comic = await getComicsById(id)
    setInfo(comic)
    return false
  }

  React.useEffect(() => {getOneComic()}, [id])
  return (
    <Box>
      <Header/>
      <CardProfile info={info}/>
    </Box>
  )
}

export default ComicsProfilePage