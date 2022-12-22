import { Email, PanToolAlt } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid, styled, Typography } from '@mui/material';
import { Field, FieldAttributes, Form, Formik } from 'formik';
import { TextField, TextFieldProps } from 'formik-material-ui';
import * as Yup from 'yup';
import { axiosInstance } from '../../axios';
import { socialLinksContact } from '../../constants';
import { Section } from '../common/Section';
import { Social } from '../Hero/Social';
import { CopyEmailField } from './CopyEmailField';

type InitialValuesType = {
    name: string;
    replyTo: string;
    message: string;
};

const initialValues: InitialValuesType = {
    name: '',
    replyTo: '',
    message: '',
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    replyTo: Yup.string()
        .email('Invalid email')
        .required('This field is required'),
    message: Yup.string().required('This field is required'),
});

export function Contact() {
    const handleSubmit = async (values: InitialValuesType) => {
        const { data } = await axiosInstance.post('/api/contact', values);
    };

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
                    <Typography
                        variant="body1"
                        sx={{ mb: 4, fontSize: '18px' }}
                    >
                        I&apos;m always happy to hear about exciting
                        opportunities, and build valuable connections.
                        Let&apos;s connect! You can send an e-mail or fill out
                        the form.
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
                </Grid>
                <Grid item xs={12} md={5}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <MuiField name="name" label="Your name" />
                                <MuiField label="Your email" name="replyTo" />
                                <MuiField
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                />
                                <LoadingButton
                                    loading={isSubmitting}
                                    type="submit"
                                    sx={{
                                        alignSelf: 'flex-end',
                                        width: { xs: '100%', sm: 'initial' },
                                    }}
                                    variant="contained"
                                    startIcon={<Email />}
                                    color="secondary"
                                >
                                    Send message
                                </LoadingButton>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Section>
    );
}

const MuiField = styled((props: TextFieldProps & FieldAttributes<any>) => (
    <Field
        component={TextField}
        fullWidth
        variant="outlined"
        autoComplete="new-password"
        {...props}
    />
))(({ theme }) => ({
    marginBottom: theme.spacing(4),
    '& .MuiInputBase-root': {
        // for the error text
        marginBottom: theme.spacing(0.5),
    },
}));
