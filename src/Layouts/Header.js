import { Link } from 'react-scroll';
import Toggle from '../Components/Toggle';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const Header = () => {

    const pages = [{ name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: "experience" },
    { name: 'Skills', to: "skills" },
    { name: 'Projects', to: "projects" },
    { name: 'Education', to: "education" },
    { name: 'Achievements', to: "achievements" },
    { name: 'Contacts', to: "contacts" }
    ];

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static" sx={{ background: "var(--background-header)", color: "var(--font-color-header-footer)" }}>
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
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map((page, index) => {
                                   
                                    return <MenuItem key={index} sx={{ height: '30px', padding: '20px' }} className='hover:text-black hover:font-medium' onClick={handleCloseNavMenu}>
                                        <Link to={page.to} smooth={true} onClick={handleCloseNavMenu} className='m-3 hover:cursor-pointer'>{page.name}</Link>
                                    </MenuItem>
                                })}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', marginRight: '10px', fontWeight: 'bold' }}>
                            {pages.map((page, index) => (
                                <Link key={index} to={page.to} smooth={true} className='m-3 hover:text-hoverColor hover:cursor-pointer'>{page.name}</Link>
                            ))}
                        </Box>
                        <Toggle />
                    </Toolbar>         
                </Container>           
            </AppBar>
        </>
    )
}

export default Header;