import { Contact } from '../src/components/Contact';
import { Experience } from '../src/components/Experience';
import { Hero } from '../src/components/Hero';
import { Projects } from '../src/components/Projects';
import { Skills } from '../src/components/Skills';

export default function Main() {
    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}
