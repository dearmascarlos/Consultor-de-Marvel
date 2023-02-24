import React from 'react'
import { CardActionArea, Card, CardMedia, CardContent, Typography } from '@mui/material';

function CardMarvel() {
  return (
    <Card sx={{
      maxWidth: 345,
      margin: 1 
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardMarvel

