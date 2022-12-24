import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Button, Tooltip } from '@mui/material';
import { useRef, useState } from 'react';

const EMAIL = 'levente.uj.development@gmail.com';

export function CopyEmailField() {
    const [emailCopied, setEmailCopied] = useState(false);
    const timeout = useRef<undefined | NodeJS.Timeout>();

    const handleCopy = () => {
        clearTimeout(timeout.current);
        setEmailCopied(true);

        navigator.clipboard.writeText(EMAIL);
        timeout.current = setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <Tooltip title={emailCopied ? 'E-mail copied!' : 'Copy e-mail'}>
            <Button
                onClick={handleCopy}
                endIcon={emailCopied ? <CheckIcon /> : <ContentCopyIcon />}
                variant="outlined"
                sx={{
                    color: 'text.primary',
                    '& .MuiButton-endIcon': {
                        marginLeft: 3,
                    },
                }}
            >
                <Box
                    component="span"
                    sx={{
                        fontSize: {
                            xs: '12px',
                            sm: 'inherit',
                        },
                    }}
                >
                    {EMAIL}
                </Box>
            </Button>
        </Tooltip>
    );
}
