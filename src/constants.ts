import { LinkedIn, GitHub, Mail } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MessageIcon from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { UpworkIcon } from './components/common/icons/UpworkIcon';
import { SectionType } from './utils';

type NavItem = {
    name: string;
    sectionId: SectionType;
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
};

export const NAV_ITEMS: NavItem[] = [
    { name: 'Experience', sectionId: 'experience', Icon: WorkIcon },
    { name: 'Projects', sectionId: 'projects', Icon: CodeIcon },
    { name: 'Skillset', sectionId: 'skillset', Icon: EqualizerIcon },
    { name: 'Contact', sectionId: 'contact', Icon: MessageIcon },
];

export const socialLinksHero = [
    {
        href: 'https://www.linkedin.com/in/%C3%BAj-levente/',
        Icon: LinkedIn,
    },
    {
        href: 'https://github.com/ujLevente',
        Icon: GitHub,
    },
    {
        href: 'https://www.upwork.com/freelancers/~01216b40a0ad9d5874',
        Icon: UpworkIcon,
    },
];

export const socialLinksContact = [
    ...socialLinksHero,
    {
        href: 'mailto:levente.uj.development@gmail.com',
        Icon: Mail,
    },
];
