import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, IconButton,Typography, Menu, Container, Button, MenuItem }  from '@mui/material';
import { createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d45959'
    },
    secondary: {
      main: '#6e68df'
    }, 
    text: {
      main: '#ffffff',
      constrast: '#a6aff3'
    }
  }
})

const pages = ['Characters', 'Comics', 'Series'];

function Header() {

  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      theme={theme} 
      position="fixed" 
      sx={{
        height: '250px',
        justifyContent: 'center',
        backgroundImage: 'url(https://as01.epimg.net/meristation/imagenes/2021/03/12/reportajes/1615546576_319724_1615546812_noticia_normal.jpg)'
        // opacity: '0.7'
      }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography
            className='logo'
            variant="h3"
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
          <div className='logo'></div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              theme={theme}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='text'
              sx={{
                boxShadow: '10px 5px 10px',
                backgroundColor: 'white',
                color: 'red',
                  '&:hover': {
                    backgroundColor: 'red',
                    color: 'white',
                    opacity: '0.7'
                  }
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center" onClick={(e) => navigate(`/${page}`)}>{page}</Typography>

                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
            }}
          >
          <div className='logo'></div>
          </Typography>
          <Box 
            className= 'pagination-group'
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              ml: 5, mr: 5, 
              justifyContent: 'space-around',
              maxWidth: '900px',
            }}>
            {pages.map((page) => (
              <Button className='btn-pagination'
                key={page}
                // onClick={handleCloseNavMenu}
                onClick={(e) => navigate(`/${page}`)}
                sx={{
                  borderRadius: '10px',
                  boxShadow: '10px 5px 10px', 
                  my: 6, 
                  color: 'red', 
                  display: 'block' , 
                  fontSize: 22,
                  backgroundColor: 'white',
                  '&:hover': {
                    backgroundColor: 'red',
                    color: 'white',
                    opacity: '0.7'
                  }
                  
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
