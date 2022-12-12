import MenuIcon from '@mui/icons-material/Menu';
import { Container, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { PropsWithChildren, useState } from 'react';
import { Footer } from '../Footer';
import { DesktopNavigation } from './DesktopNavigation';
import { DrawerNavigation } from './DrawerNavigation';

export function Layout({ children }: PropsWithChildren) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <NavigationAppbar position="static">
                <Container maxWidth="lg">
                    <Toolbar sx={{ px: { xs: 1 } }}>
                        <HamburgerMenu
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </HamburgerMenu>
                        <DesktopNavigation />
                    </Toolbar>
                </Container>
            </NavigationAppbar>
            <DrawerNavigation
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            <Container maxWidth="lg" component="main">
                <Box sx={{ px: 2 }}>{children}</Box>
            </Container>
            <Footer />
        </Box>
    );
}

const NavigationAppbar = styled(AppBar)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    background: theme.palette.background.default,
    boxShadow: 'none',
    zIndex: '2',
    paddingTop: theme.spacing(2),
}));

const HamburgerMenu = styled(IconButton)(({ theme }) => ({
    marginRight: 2,
    color: theme.palette.primary.light,
    '& svg': {
        fontSize: '36px',
    },

    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));
