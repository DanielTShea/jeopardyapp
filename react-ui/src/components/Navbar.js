import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';



const accountPages = [{"id":"01", "title": "Sign Up", "address": "/signup"}, { "id":"02", "title": "Login", "address":"/login"}, ];
const gamePages = [{"id":"03", "title": "Home", "address":"/"}, {"id":"04", "title": "New Game", "address":"/newgame"}];

const Navbar = () =>{
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return(
        
        <nav className="navbar">
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
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
                            {gamePages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                <Typography component={Link} to={page.address} textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{mr: 2, 
                        display: { xs: 'flex', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                            Jeopardy
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {gamePages.map((page) => (
                            <Button
                            component={Link} 
                            to={page.address}
                            key={page.id}
                            x={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Button>

                           ))} 
                        </Box>
                        <Box>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleOpenUserMenu}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                        >
                        {accountPages.map((accountPage) => (
                        <MenuItem key={accountPage.id} onClick={handleCloseUserMenu}>
                            <Typography component={Link} to={accountPage.address}textAlign="center">{accountPage.title}</Typography>
                        </MenuItem>
                        ))}
                        </Menu>
                        </ Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );

}

export default Navbar;