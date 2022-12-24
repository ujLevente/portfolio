import { CheckCircle, Error } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CopyEmailField } from './CopyEmailField';

type ContactFormFeedbackDialogProps = {
    open: boolean;
    onClose: () => void;
    error: boolean;
};

export function ContactFormFeedbackDialog({
    onClose,
    open,
    error,
}: ContactFormFeedbackDialogProps) {
    let title = 'Thank you for contacting me!';
    let description = 'I will respond soon.';
    let Icon = SuccessIcon;

    if (error) {
        title = 'An error has occured :(';
        description = 'Please write me manually to my e-mail address.';
        Icon = FailureIcon;
    }

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle sx={{ pt: 4 }}>
                {title}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography gutterBottom={error}>{description}</Typography>
                {error && <CopyEmailField />}
                <Icon />
            </DialogContent>
        </Dialog>
    );
}

const SuccessIcon = styled(CheckCircle)(({ theme }) => ({
    color: theme.palette.success.light,
    fontSize: '140px',
    margin: `32px auto 12px auto`,
    display: 'block',
}));

const FailureIcon = styled(Error)(({ theme }) => ({
    color: theme.palette.error.main,
    fontSize: '140px',
    margin: `32px auto 12px auto`,
    display: 'block',
}));
