import { Grid } from '@mui/material';
import { Section } from '../common/Section';
import { ContactDescription } from './ContactDescription';
import { ContactForm } from './ContactForm';

export function Contact() {
    return (
        <Section
            titleOne="Contact"
            titleTwo="Lets's work together"
            id="contact"
        >
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{ pr: { xs: 0, md: 5 }, mb: { xs: 6, md: 0 } }}
                >
                    <ContactDescription />
                </Grid>
                <Grid item xs={12} md={5}>
                    <ContactForm />
                </Grid>
            </Grid>
        </Section>
    );
}
