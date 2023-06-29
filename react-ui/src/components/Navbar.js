import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () =>{

    return(
        
        <nav className="navbar">
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            Jeopardy
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            // onClick={handleOpenNavMenu}
                            color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Button
                            component={Link} to="/"
                            x={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                            <Button
                            component={Link} to="/signup"
                            x={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Sign Up
                            </Button>
                            <Button
                            component={Link} to="/login"
                            x={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Login
                            </Button>
                            <Button
                            component={Link} to="/newgame"
                            x={{ my: 2, color: 'white', display: 'block' }}
                            >
                                New Game
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );

}

export default Navbar;