export type SectionType = 'experience' | 'projects' | 'skillset';

export function scrollToSection(sectionId: SectionType) {
    const elem = document.getElementById(sectionId);

    if (!elem) {
        return;
    }

    elem.scrollIntoView({
        behavior: 'smooth',
    });
}
