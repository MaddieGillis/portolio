import React, { useState } from "react";

// MUI COMPONENTS
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Stack,
    Button,
    Container,
    Drawer,
    Box,
    List,
    ListItemButton,
    ListItemText,
    ListItem,
    Divider,
    ListItemIcon,
} from "@mui/material";

// ICONS
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphone from "@mui/icons-material/PhoneIphone";
import VolunteerActivism from "@mui/icons-material/VolunteerActivism";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";

// REACT ROUTER
import { Routes, Route, Link } from 'react-router-dom';

// ROUTES
import Home from '../routes/Home';
import About from '../routes/About';
import Community from '../routes/Community';
import Games from '../routes/Games';
import Support from "../routes/Support";
import Privacy from "../routes/Privacy";
import Tos from "../routes/Tos";

const NavigationBar = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    }

    const styles = {
        link: {
            color: '#fff',
            textDecoration: 'none'
        }
    }

    const drawerItems = (
        <Box
            sx={{ width: 250 }}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'About', 'Games'].map((text) => (
                    <ListItem
                        key={text}
                        disablePadding
                    >
                        <Link
                            to={text !== 'Home' ? text.toLowerCase() : '/'}
                            style={{ textDecoration: 'none', width: '100%' }}
                        >
                            <ListItemButton
                                sx={{
                                    color: 'black',
                                    textDecoration: 'none',
                                    width: '100%'
                                }}
                            >
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Contact Us', 'Support Us'].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                    >
                        <Link
                            to={`/${text.toLowerCase().split(" ")[0]}`}
                            style={{ textDecoration: 'none', width: '100%' }}
                        >
                            <ListItemButton
                                sx={{
                                    color: 'black',
                                }}
                            >
                                <ListItemIcon>
                                    {index === 0
                                        ? <PhoneIphone
                                            sx={{ color: '#d32f2f' }}
                                        />
                                        : <VolunteerActivism
                                            sx={{ color: '#d32f2f' }}
                                        />}
                                </ListItemIcon>
                                {index === 0
                                    ? <ListItemText primary={text} secondary='Ask a question' />
                                    : <ListItemText primary={text} secondary='Set up donations' />
                                }

                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box >)


    return (
        <>
            <AppBar
                sx={{
                    // bgcolor: '#02182B',
                    bgcolor: '#000000',
                }}
                // position='static'
                component='nav'
            >
                <Container
                    maxWidth='xl'
                >
                    <Toolbar
                        disableGutters
                    >
                        <Box
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <IconButton
                                size='lg'
                                edge='start'
                                color='inherit'
                                aria-label='open drawer'
                                onClick={toggleDrawer(true)}
                                sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                        <Box
                            sx={{ flexGrow: 1 }}
                        >
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <Typography
                                    variant='h6'
                                    component='div'
                                    fontWeight='bold'
                                    color='white'
                                    sx={{ textAlign: { xs: 'center', md: 'left' } }}
                                >
                                    Grim Vision Studios
                                </Typography>
                            </Link>
                        </Box>
                        <Stack
                            direction='row'
                            spacing={2}
                            sx={{
                                display: { xs: 'none', md: 'block' }
                            }}
                        >

                            <Link
                                style={styles.link}
                                to="/"
                            >
                                <Button color='inherit'>
                                    Home
                                </Button>
                            </Link>
                            <Link
                                style={styles.link}
                                to="/about"
                            >
                                <Button color='inherit'>
                                    About
                                </Button>
                            </Link>
                            <Link
                                style={styles.link}
                                to="/games"
                            >
                                <Button color='inherit'>
                                    Games
                                </Button>
                            </Link>
                            {/* <Link
                                style={styles.link}
                                to="/community"
                            >
                                <Button color='inherit'>
                                    Community
                                </Button>
                            </Link> */}
                            <Link
                                style={styles.link}
                                to="/support"
                            >
                                <Button
                                    color='error'
                                    variant='contained'
                                    endIcon={<VolunteerActivism />}
                                >
                                    Support Us
                                </Button>
                            </Link>
                            <IconButton>

                            </IconButton>
                        </Stack>
                        <Drawer
                            anchor='left'
                            variant='temporary'
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <Box>
                                <IconButton
                                    onClick={toggleDrawer(false)}
                                >
                                    <ChevronLeftRounded />
                                </IconButton>
                            </Box>
                            <Divider />
                            {drawerItems}
                        </Drawer>
                    </Toolbar>
                </Container>
            </AppBar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/grim-vision-studios' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/games' element={<Games />} />
                <Route path='/community' element={<Community />} />
                <Route path='/support' element={<Support />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/tos' element={<Tos />} />
            </Routes>
        </>
    );
}

export default NavigationBar;