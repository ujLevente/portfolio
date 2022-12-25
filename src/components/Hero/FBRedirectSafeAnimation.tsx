import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import { slideFadeInAnimation } from '../../animations';

export function FBRedirectSafeAnimation({ children }: PropsWithChildren) {
    return (
        <Box
            sx={{
                // background: 'red',
                position: 'absolute',
                top: 0,
                opacity: 0,
                animation: `${slideFadeInAnimation.name} 500ms linear 300ms forwards`,
            }}
        >
            {children}
        </Box>
    );
}
