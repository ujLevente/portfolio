import { Reveal, RevealProps } from 'react-awesome-reveal';
import { slideFadeInAnimation } from '../../animations';

export function RevealWrapper(props: RevealProps) {
    return (
        <Reveal
            triggerOnce
            duration={500}
            keyframes={slideFadeInAnimation}
            {...props}
        />
    );
}
