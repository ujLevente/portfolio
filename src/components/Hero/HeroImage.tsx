import { Box, styled } from '@mui/material';
import Image from 'next/image';

export function HeroImage() {
    return (
        <ContainerBox>
            <ImageContainerBox>
                <Image
                    src="/IMG_8040.jpg"
                    objectFit="contain"
                    alt="profil"
                    layout="fill"
                    style={{
                        left: '-12px',
                        top: '0px',
                        transform: 'scale(1.3)',
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
    borderRadius: '23px',
    width: '336px',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 10,
    backgroundColor: '#EAE6FE',
    border: '2px solid #9389ff',
    [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.7)',
    },
}));

const ImageFigureBox = styled(Box)(({ theme }) => ({
    borderRadius: '23px',
    width: '336px',
    height: '400px',
    position: 'absolute',
    backgroundColor: '#7E74F1',
    transform: 'rotate(-9.55deg)',
    [theme.breakpoints.down('sm')]: {
        transform: 'rotate(-9.55deg) scale(0.7)',
    },
}));
