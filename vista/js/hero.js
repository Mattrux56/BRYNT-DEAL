document.addEventListener('DOMContentLoaded', () => {
    const words = ['medible.', 'trazable.', 'accionable.'];
    const highlightElement = document.querySelector('.highlight-gold');

    if (!highlightElement) {
        return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    let wordIndex = 0;
    let characterIndex = words[wordIndex].length;
    let isDeleting = true;

    const typeNextWord = () => {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            characterIndex -= 1;
            highlightElement.textContent = currentWord.slice(0, characterIndex);

            if (characterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            characterIndex += 1;
            highlightElement.textContent = words[wordIndex].slice(0, characterIndex);

            if (characterIndex === words[wordIndex].length) {
                isDeleting = true;
                setTimeout(typeNextWord, 2200);
                return;
            }
        }

        setTimeout(typeNextWord, isDeleting ? 75 : 95);
    };

    setTimeout(typeNextWord, 2200);
});
