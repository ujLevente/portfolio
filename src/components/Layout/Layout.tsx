import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Link, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { PropsWithChildren, useState } from 'react';
import { NAV_ITEMS } from '../../constants';
import { Footer } from '../Footer';
import { DrawerNavigation } from './DrawerNavigation';

export function Layout({ children }: PropsWithChildren) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <AppBar
                component="nav"
                position="static"
                sx={{
                    position: 'absolute',
                    bgcolor: 'background.default',
                    boxShadow: 'none',
                    zIndex: '2',
                    pt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ px: { xs: 1 } }}>
                        <IconButton
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: { md: 'none' },
                                color: 'primary.light',
                            }}
                        >
                            <MenuIcon
                                sx={{
                                    fontSize: '40px',
                                }}
                            />
                        </IconButton>
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'flex',
                                    alignItems: 'center',
                                    width: '100%',
                                    position: 'relative',
                                },
                            }}
                        >
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item}
                                    sx={{
                                        color: '#f1f1f1',
                                        mr: 8,
                                        p: 1,
                                        fontWeight: 500,
                                    }}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Tooltip
                                title="Copy page url"
                                sx={{
                                    display: { sm: 'none', md: 'inline-flex' },
                                    position: 'absolute',
                                    right: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                }}
                            >
                                <IconButton
                                    onClick={() =>
                                        navigator.clipboard.writeText(
                                            window.location.origin
                                        )
                                    }
                                    color="primary"
                                >
                                    <LinkIcon
                                        sx={{ color: 'text.secondary' }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
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
