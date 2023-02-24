import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router';
// import { searchContext } from '../../App';
// import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#919191'
    },
    secondary: {
      main: '#6e68df'
    }, 
    text: {
      main: '#ed1d24',
      constrast: '#a6aff3'
    }
  }
})

const pages = ['Characters', 'Comics', 'Series'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Header() {
//   const { search, setSearch } = useContext(searchContext)

  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOnChangeSearch = (e) => {
    // setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // navigate('/search')
    e.target.reset()
  }

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
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
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
                  my: 6, 
                  color: 'red', 
                  display: 'block' , 
                  fontSize: 22,
                  backgroundColor: 'white'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <form onSubmit={handleSubmit}> 
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search News"
              inputProps={{ 'aria-label': 'search' }}
            //   value={search}
              onChange={(e) => handleOnChangeSearch(e)}
            />
          </Search>
          </form>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
