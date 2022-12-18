import { Email } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Grid, styled, Typography } from '@mui/material';
import { Field, FieldAttributes, Form, Formik, FormikHelpers } from 'formik';
import { TextField, TextFieldProps } from 'formik-material-ui';
import * as Yup from 'yup';
import { axiosInstance } from '../../axios';

import { Section } from '../common/Section';

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
    const handleSubmit = async (
        values: InitialValuesType,
        formikHelpers: FormikHelpers<InitialValuesType>
    ) => {
        const { data } = await axiosInstance.post('/api/contact', values);
        formikHelpers.setSubmitting(false);
    };

    return (
        <Section
            titleOne="Contact"
            titleTwo="Lets's work together"
            id="contact"
        >
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Typography
                                    variant="h4"
                                    sx={{ mb: 6, fontSize: '22px' }}
                                >
                                    Get in touch
                                </Typography>
                                <MuiField name="name" label="Your name" />
                                <MuiField label="Your email" name="replyTo" />
                                <MuiField
                                    label="Message"
                                    name="message"
                                    multiline
                                />
                                <LoadingButton
                                    loading={isSubmitting}
                                    type="submit"
                                    sx={{ alignSelf: 'flex-end' }}
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
                <Grid item xs={12} md={6}></Grid>
            </Grid>
        </Section>
    );
}

const MuiField = styled((props: TextFieldProps & FieldAttributes<any>) => (
    <Field
        component={TextField}
        fullWidth
        variant="outlined"
        autoComplete="off"
        {...props}
    />
))(({ theme }) => ({
    marginBottom: theme.spacing(4),
    '& .MuiInputBase-root': {
        // for the error text
        marginBottom: theme.spacing(0.5),
    },
}));
