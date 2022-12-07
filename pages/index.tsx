import { Box } from '@mui/material';
import { Experience } from '../src/components/Experience';
import { Hero } from '../src/components/Hero';

export default function Main() {
    return (
        <>
            <Hero />
            <Experience />
            <Box height={240}></Box>
        </>
    );
}
