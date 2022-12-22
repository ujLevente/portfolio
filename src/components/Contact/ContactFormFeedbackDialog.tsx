import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

type ContactFormFeedbackDialogProps = {
    open: boolean;
    onClose: () => void;
};

export function ContactFormFeedbackDialog({
    onClose,
    open,
}: ContactFormFeedbackDialogProps) {
    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <DialogContent></DialogContent>
        </Dialog>
    );
}
