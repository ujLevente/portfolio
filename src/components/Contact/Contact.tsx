import { Email } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { axiosInstance } from '../../axios';

import { Section } from '../common/Section';

type InitialValuesType = {
    name: string;
    email: string;
    message: string;
};

const initialValues: InitialValuesType = {
    name: '',
    email: '',
    message: '',
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('This field is required'),
    message: Yup.string().required('This field is required'),
});

export function Contact() {
    const handleSubmit = async (
        values: InitialValuesType,
        formikHelpers: FormikHelpers<InitialValuesType>
    ) => {
        const { data } = await axiosInstance.post('/api/contact', values);
        formikHelpers.setSubmitting(false);
    };

    return (
        <Section
            titleOne="titleOne"
            titleTwo="Lets's work together"
            id="contact"
        >
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        // validationSchema={validationSchema}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Typography
                                    variant="h4"
                                    sx={{ mb: 6, fontSize: '22px' }}
                                >
                                    Get in touch
                                </Typography>
                                <Field
                                    name="name"
                                    label="Your name"
                                    component={TextField}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mb: 4 }}
                                />
                                <Field
                                    label="Your email"
                                    name="email"
                                    component={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    sx={{ mb: 4 }}
                                />
                                <Field
                                    label="Message"
                                    name="message"
                                    multiline
                                    component={TextField}
                                    variant="outlined"
                                    required
                                    sx={{ mb: 4 }}
                                    fullWidth
                                />
                                <LoadingButton
                                    loading={isSubmitting}
                                    type="submit"
                                    sx={{ alignSelf: 'flex-end' }}
                                    variant="contained"
                                    size="small"
                                    startIcon={<Email />}
                                    // disabled={!values.note}
                                >
                                    Üzenet küldése
                                </LoadingButton>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Section>
    );
}
