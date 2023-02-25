import React from 'react'
import { useNavigate } from 'react-router';
import { CardActionArea, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { defaultDescription } from './CardProfile';

function CharacterCard({id, name, image, ext, description}) {

  const navigate = useNavigate()

  const checkDescription = () => {
    return !description || description == null ? description = defaultDescription : description
  }

  return (
    <Card 
      sx={{
        width: 345,
        minHeight: 525,
        margin: 1.5
      }}
      onClick={() => navigate(`/characters/${id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image + '.' + ext}
          alt="character"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {checkDescription()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CharacterCard

