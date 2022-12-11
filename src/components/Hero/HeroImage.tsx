import { Box, styled } from '@mui/material';
import Image from 'next/image';

export function HeroImage() {
    return (
        <ContainerBox>
            <ImageContainerBox>
                <Image
                    src="/profil.png"
                    objectFit="contain"
                    alt="profil"
                    layout="fill"
                    style={{
                        left: '-63px',
                        top: '34px',
                        transform: 'scale(1.4)',
                    }}
                />
            </ImageContainerBox>
            <ImageFigureBox />
        </ContainerBox>
    );
}

const ContainerBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        marginBottom: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
    },
}));

const ImageContainerBox = styled(Box)(({ theme }) => ({
    borderRadius: '16px',
    width: '336px',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 10,
    backgroundColor: '#EAE6FE',
    [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.7)',
    },
}));

const ImageFigureBox = styled(Box)(({ theme }) => ({
    borderRadius: '16px',
    width: '336px',
    height: '400px',
    position: 'absolute',
    backgroundColor: '#7E74F1',
    transform: 'rotate(-9.55deg)',
    [theme.breakpoints.down('sm')]: {
        transform: 'rotate(-9.55deg) scale(0.7)',
    },
}));
