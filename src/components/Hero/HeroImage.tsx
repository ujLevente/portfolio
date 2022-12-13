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
            <ImageFigureBox className="image-figure" />
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
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
    },
}));

const ImageBase = styled(Box)(({ theme }) => ({
    width: '336px',
    height: '400px',
    borderRadius: '23px',
    [theme.breakpoints.down('sm')]: {
        width: 'calc(336px * 0.7)',
        height: 'calc(400px * 0.7)',
    },
}));

const ImageContainerBox = styled(ImageBase)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    zIndex: 10,
    backgroundColor: '#EAE6FE',
    border: '2px solid #9389ff',
    [theme.breakpoints.up('sm')]: {
        '&:hover + .image-figure': {
            transform: 'rotate(-14deg)',
        },
    },
}));

const ImageFigureBox = styled(ImageBase)(({ theme }) => ({
    transition: 'transform 0.6s',
    transitionDelay: '0.05s',
    position: 'absolute',
    backgroundColor: '#7E74F1',
    transform: 'rotate(-9.55deg)',
    [theme.breakpoints.down('sm')]: {
        transform: 'rotate(-9.55deg)',
    },
}));
