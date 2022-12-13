import CloseIcon from '@mui/icons-material/Close';
import { IconButton, styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';
import { NAV_ITEMS } from '../../constants';

type DrawerNavigationProps = {
    drawerOpen: boolean;
    handleDrawerToggle: () => void;
};

export function DrawerNavigation({
    drawerOpen,
    handleDrawerToggle,
}: DrawerNavigationProps) {
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
                <CloseIconButton edge="end" onClick={handleDrawerToggle}>
                    <CloseIcon />
                </CloseIconButton>
                <Box
                    onClick={handleDrawerToggle}
                    sx={{ textAlign: 'center', m: 'auto 0' }}
                >
                    <List>
                        {NAV_ITEMS.map((item, i) => (
                            <ListItem key={item} disablePadding>
                                <NavItem>
                                    <span>{`0${i + 1}. `}</span>
                                    <Typography>{item}</Typography>
                                </NavItem>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </StyledDrawer>
        </Box>
    );
}

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
    '& .MuiDrawer-paper': {
        background: '#1a2026',
        boxSizing: 'border-box',
        width: 'min(75vw, 400px)',
        margin: 'auto 0',
    },
}));

const CloseIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    left: theme.spacing(2),
    top: theme.spacing(2),
    '& svg': {
        fontSize: '36px',
        color: theme.palette.primary.main,
    },
}));

const NavItem = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 2,
    '& span:first-of-type': {
        color: theme.palette.secondary.light,
        lineHeight: '17px',
        fontSize: '14px',
    },
    '& .MuiTypography-root': {
        fontWeight: 500,
        fontSize: '18px',
    },
}));
