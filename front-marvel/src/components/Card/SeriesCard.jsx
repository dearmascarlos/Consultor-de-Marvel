import React from 'react'
import { useNavigate } from 'react-router';
import { CardActionArea, Card, CardMedia, CardContent, Typography } from '@mui/material';

const defaultDescription  = 'We feel, at this time, for the selected series, we do not have a description.'

function SeriesCard({id, title, image, ext, description}) {

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
      onClick={() => navigate(`/series/${id}`)}
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
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {checkDescription()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default SeriesCard
