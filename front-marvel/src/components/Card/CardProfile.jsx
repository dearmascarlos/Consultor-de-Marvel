import React from 'react'
import { apikeyFilters } from '../../services/apiMarvel';
import { Box, Card, CardContent, CardMedia, Typography, Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const defaultDescription  = 'We feel, at this time, for the selected series, we do not have a description.'

function CardProfile( {info} ) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  const newInfo = {
    title: info[0].title,
    name: info[0].name,
    image: info[0].thumbnail.path + '.' + info[0].thumbnail.extension,
    description: info[0].description,
    url: info[0].urls.map(item => item.url),
  }

  const checkDescription = () => {
    return !newInfo.description ? newInfo.description = defaultDescription : newInfo.description
  }

  const checkTitle = () => {
    return !newInfo.title ? 'NAME' : 'TITLE'
  }

  const listUrl = () => {
    return newInfo.url.map((item, i) => {
      return (
        <Button
          key={i}
          href={item}
          target='_blank'
        >
          Link {i+1}
        </Button>
      )
    })
  }

  return (
    <Box 
        className='box-container'
        sx={{
          display:'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Card 
          sx={{
            mb: 2
          }}
        >
        <CardContent sx={{maxWidth: '510px'}}>
          <Typography variant="h4" component="div" >
            {newInfo.title || newInfo.name}
          </Typography>
          <CardMedia
          sx={{
            maxWidth: '510px',
            maxHeight: '560px'
          }}
          component="img"
          image={newInfo.image}
          />
          </CardContent>
          
        </Card>

      <Box
        sx={{
          ml: 2, mr:2, mb: 2,
          maxWidth: 800,
        }}
      >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <Typography sx={{ width: '60%', flexShrink: 0 }} variant='h5'>{checkTitle()}</Typography>
            <Typography sx={{ display: { xs: 'none', md: 'flex' }, color: 'text.secondary', mr: 4 }} variant='h6'>{newInfo.title || newInfo.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {newInfo.title || newInfo.name}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"sx={{
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <Typography sx={{ width: '60%', flexShrink: 0 }} variant='h5'>DESCRIPTION</Typography>
            <Typography sx={{ display: { xs: 'none', md: 'flex' }, color: 'text.secondary', mr: 4 }} variant='h6'>{checkDescription().slice(0,50)}...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {newInfo.description}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"sx={{
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            <Typography sx={{ width: '60%', flexShrink: 0 }} variant='h5'>+ INFO</Typography>
            <Typography sx={{ display: { xs: 'none', md: 'flex' }, color: 'text.secondary', mr: 4 }} variant='h6'>Other links web with more info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {listUrl()}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default CardProfile