import { Email } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
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
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            name="name"
                            label="Your name"
                            component={TextField}
                            variant="outlined"
                            required
                        />
                        <Field
                            label="Your email"
                            name="email"
                            component={TextField}
                            variant="outlined"
                            required
                        />
                        <Field
                            label="Message"
                            name="message"
                            multiline
                            component={TextField}
                            variant="outlined"
                            required
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
        </Section>
    );
}
