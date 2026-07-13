// Mobile nav toggle
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

if (menuBtn){
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Typing text animation
const words = ["AI & ML Developer", "Full-Stack Developer", "Python Developer", "Data Scientist"];
const typingSpan = document.querySelector('.typing-text span');

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){
    const currentWord = words[wordIndex];

    if (!deleting){
        typingSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length){
            deleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typingSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0){
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(type, deleting ? 60 : 120);
}

if (typingSpan){
    type();
}

// Sync the "scan" label under the photo with the CSS scan-line animation (3.2s cycle)
const scanLabel = document.getElementById('scan-label');

if (scanLabel){
    const cycleMs = 3200;

    function runScanCycle(){
        scanLabel.textContent = 'analyzing…';
        setTimeout(() => {
            const confidence = (99 + Math.random()).toFixed(1);
            scanLabel.textContent = `Bilakshana Neupane — ${confidence}%`;
        }, cycleMs * 0.55);
    }

    runScanCycle();
    setInterval(runScanCycle, cycleMs);
}