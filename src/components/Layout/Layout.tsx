import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { PropsWithChildren, useState } from 'react';
import { NAV_ITEMS } from '../../constants';
import { DrawerNavigation } from './DrawerNavigation';

export function Layout({ children }: PropsWithChildren) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {NAV_ITEMS.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerNavigation
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Container maxWidth="lg" component="main">
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
}
