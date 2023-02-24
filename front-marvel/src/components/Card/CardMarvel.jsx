import React from 'react'
import { CardActionArea, Card, CardMedia, CardContent, Typography } from '@mui/material';

const defaultDescription  = 'We feel, at this time, for the selected character, we do not have a description.'

function CardMarvel({id, name, image, ext, description}) {

  const checkDescription = () => {
    return !description || description == null ? description = defaultDescription : description
  }

  

  return (
    <Card sx={{
      width: 345,
      minHeight: 525,
      margin: 1 
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image + '.' + ext}
          alt="green iguana"
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

export default CardMarvel

