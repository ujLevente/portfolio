import { PanToolAlt } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { socialLinksContact } from '../../constants';
import { Social } from '../Hero/Social';
import { CopyEmailField } from './CopyEmailField';

export function ContactDescription() {
    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    mb: 5,
                    fontSize: '24px',
                    display: 'flex',
                    alignItems: 'start',
                }}
            >
                Get in touch
                <PanToolAlt
                    sx={{
                        color: '#b5afff',
                        ml: '6px',
                        fontSize: '32px',
                        transform: 'rotateY(180deg) rotate(180deg)',
                    }}
                />
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '18px' }}>
                I&apos;m always happy to hear about exciting opportunities, and
                build valuable connections. Let&apos;s connect! You can send an
                e-mail or fill out the form.
            </Typography>
            <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: '20px', color: '#f1f1f1' }}
            >
                Contact me via email
            </Typography>
            <CopyEmailField />
            <Typography
                variant="body1"
                sx={{
                    mb: 1,
                    mt: 4,
                    fontSize: '20px',
                    color: '#f1f1f1',
                }}
            >
                Check out my socials
            </Typography>
            <Social socialLinks={socialLinksContact} />
        </>
    );
}
