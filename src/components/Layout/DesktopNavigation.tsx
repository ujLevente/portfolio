import LinkIcon from '@mui/icons-material/Link';
import { Link, styled, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { NAV_ITEMS } from '../../constants';

export function DesktopNavigation() {
    return (
        <ContainerBox>
            {NAV_ITEMS.map((item) => (
                <NavItem key={item}>{item}</NavItem>
            ))}
            <CopyUrlTooltip title="Copy page url">
                <IconButton
                    onClick={() =>
                        navigator.clipboard.writeText(window.location.origin)
                    }
                    color="primary"
                >
                    <LinkIcon sx={{ color: 'text.secondary' }} />
                </IconButton>
            </CopyUrlTooltip>
        </ContainerBox>
    );
}

const ContainerBox = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const NavItem = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.light,
    marginRight: theme.spacing(8),
    padding: theme.spacing(1),
    fontWeight: 500,
}));

const CopyUrlTooltip = styled(Tooltip)(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
