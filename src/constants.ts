import CodeIcon from '@mui/icons-material/Code';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MessageIcon from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
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
