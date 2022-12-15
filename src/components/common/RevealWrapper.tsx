import { keyframes } from '@emotion/react';
import { Reveal, RevealProps } from 'react-awesome-reveal';

export const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export function RevealWrapper(props: RevealProps) {
    return (
        <Reveal
            triggerOnce
            duration={500}
            keyframes={customAnimation}
            {...props}
        />
    );
}
