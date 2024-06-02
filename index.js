document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Roses Are Red", "Violed Are Blue", "Unexpected '}'", "On line 32"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 30;
    const erasingSpeed = 30;
    const newTextDelay = 800;
    const typingText = document.getElementById('typing-text');

    function type() {
        if (charIndex < texts[index].length) {
            typingText.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            index++;
            if (index >= texts.length) index = 0;
            setTimeout(type, typingSpeed + 1100);
        }
    }

    setTimeout(type, newTextDelay + 250);
});

Splitting();
