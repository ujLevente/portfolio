import { Email } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';
import { Field, FieldAttributes, Form, Formik, FormikHelpers } from 'formik';
import { TextField, TextFieldProps } from 'formik-material-ui';
import { useState } from 'react';
import * as Yup from 'yup';
import { axiosInstance } from '../../axios';
import { ContactFormFeedbackDialog } from './ContactFormFeedbackDialog';

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

export function ContactForm() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isRequestFailed, setIsRequestFailed] = useState(false);

    const handleSubmit = async (
        values: InitialValuesType,
        formikHelpers: FormikHelpers<InitialValuesType>
    ) => {
        try {
            await axiosInstance.post('/api/contact', values);
            formikHelpers.resetForm();
            setIsRequestFailed(false);
        } catch (error) {
            console.error(error);
            setIsRequestFailed(true);
        }
        setDialogOpen(true);
    };

    return (
        <>
            <ContactFormFeedbackDialog
                open={dialogOpen}
                error={isRequestFailed}
                onClose={() => setDialogOpen(false)}
            />
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
        </>
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
