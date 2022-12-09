import { createTheme } from '@mui/material';
import { components } from './components';
import { defaultTheme } from './default-theme';
import { typography } from './typography';

export const theme = createTheme({
    ...defaultTheme,
    components,
    typography,
});
