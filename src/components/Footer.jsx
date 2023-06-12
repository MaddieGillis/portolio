import React from "react";

import {
    PhoneAndroidRounded
} from "@mui/icons-material";
import {
    Grid,
    Container,
    Typography,
    Button,
    Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {

    const textStyles = {
        link: {
            color: '#fff',
            textDecoration: 'none'
        },
        redLink: {
            color: '#d32f2f',
            textDecoration: 'none'
        },
        footerHeading: {
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 10,
        },
        footerText: {
            color: '#f7f7f7'
        }
    }

    return (
        <>
            <Container
                maxWidth='xxl'
                sx={{
                    // bgcolor: '#02182B',
                    bgcolor: '#985277',
                    py: 10
                }}
            >
                <Container
                    maxWidth='xl'
                    sx={{ textAlign: { xs: 'center', md: 'left' } }}
                >
                    <Grid
                        container
                        spacing={{ xs: 5, md: 15 }}
                    >
                        <Grid
                            item
                            md={3}
                            xs={12}
                        >
                            <Typography
                                variant="h5"
                                style={textStyles.footerHeading}
                            >
                                Madeline Gillis Portfolio
                            </Typography>
                            
                        </Grid>
                        <Grid
                            item
                            md={3}
                            sm={6}
                            xs={12}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    variant='h5'
                                    style={textStyles.footerHeading}
                                >
                                    Explore
                                </Typography>
                                <Link
                                    to='/'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Home
                                </Link>
                                <Link
                                    to='/portfolio'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    to='/contact'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Contact
                                </Link>
                                <Link
                                    to='/resume'
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Resume
                                </Link>
                            </Stack>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            sm={6}
                            xs={12}
                        >
                            <Stack spacing={1}>
                                <Typography
                                    variant='h5'
                                    style={textStyles.footerHeading}
                                >
                                    Links
                                </Typography>
                                <Link
                                    to=''
                                    style={textStyles.link}
                                    variant='text'
                                >
                                    Github
                                </Link>

                            </Stack>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            xs={12}
                        >
                            <Stack spacing={1}>
                            <a href="mailto:madelinegillis@outlook.com">
                                 <Button
                                    variant='contained'
                                    color='success'
                                    endIcon={<PhoneAndroidRounded />}
                                    >
                                Contact Me
                                </Button>
                            </a>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </>
    );
}

export default Footer;