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
import Home from "../routes/Home";
import Portfolio from "../routes/Portfolio";
import Contact from "../routes/Contact";
import Resume from "../routes/Resume";

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
                {['Home', 'Portfolio', 'Contact', 'Resume'].map((text) => (
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
        </Box >)


    return (
        <>
            <AppBar
                sx={{
                    bgcolor: '#FCD3DE',
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
                                    Madeline Gillis Portfolio
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
                                    About Me
                                </Button>
                            </Link>
                            <Link
                                style={styles.link}
                                to="/portfolio"
                            >
                                <Button color='inherit'>
                                    Portfolio
                                </Button>
                            </Link>
                            <Link
                                style={styles.link}
                                to="/contact"
                            >
                                <Button color='inherit'>
                                    Contact
                                </Button>
                            </Link>
                            <Link
                                style={styles.link}
                                to="/resume"
                            >
                                <Button color='inherit'>
                                    Resume
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
                <Route path='/about' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </>
    );
}

export default NavigationBar;