import CloseIcon from '@mui/icons-material/Close';

import {
    Container,
    IconButton,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Toolbar,
} from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { NAV_ITEMS } from '../../constants';
import { scrollToSection, SectionType } from '../../utils';

type DrawerNavigationProps = {
    drawerOpen: boolean;
    handleDrawerToggle: () => void;
};

export function DrawerNavigation({
    drawerOpen,
    handleDrawerToggle,
}: DrawerNavigationProps) {
    const handleNavItemTouched = (sectionId: SectionType) => {
        handleDrawerToggle();
        // call scrollToSection after drawer close animation finished
        setTimeout(() => scrollToSection(sectionId));
    };

    return (
        <Box component="nav">
            <StyledDrawer
                variant="temporary"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ px: { xs: 1 } }}>
                        <IconButton edge="start" onClick={handleDrawerToggle}>
                            <CloseIcon
                                sx={{ fontSize: '36px', color: 'primary.main' }}
                            />
                        </IconButton>
                    </Toolbar>
                    <List>
                        {NAV_ITEMS.map(({ name, sectionId, Icon }) => (
                            <ListItem key={name} disablePadding>
                                <ListItemButton
                                    sx={{ paddingLeft: 1 }}
                                    onClick={() =>
                                        handleNavItemTouched(sectionId)
                                    }
                                >
                                    <ListItemIcon
                                        sx={{ color: 'primary.main' }}
                                    >
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </StyledDrawer>
        </Box>
    );
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
    '& .MuiDrawer-paper': {
        background: '#282551e3',
        boxSizing: 'border-box',
        width: 'min(75vw, 400px)',
        padding: `${theme.spacing(2)} 0`,
    },
}));
