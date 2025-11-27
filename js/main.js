/**
 * PARADIGM TECHNOLOGIES - MAIN JAVASCRIPT
 * Interactive features and animations
 */

// ==========================================
// TYPEWRITER EFFECT
// ==========================================

function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typewriter on page load
document.addEventListener('DOMContentLoaded', () => {
    const definition = document.getElementById('definition');
    const text = 'all human-made creations that extend and change our abilities';

    // Delay start for dramatic effect
    setTimeout(() => {
        typeWriter(definition, text, 60);
    }, 1000);
});

// ==========================================
// RIPPLE EFFECT
// ==========================================

document.addEventListener('click', (e) => {
    const rippleContainer = document.getElementById('ripple-container');
    const ripple = document.createElement('div');

    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.width = '20px';
    ripple.style.height = '20px';

    rippleContainer.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 800);
});

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    const noteElements = document.querySelectorAll('.note');
    noteElements.forEach(el => observer.observe(el));
});

// ==========================================
// EASTER EGG - FEAR DRAWING
// ==========================================

let clickCount = 0;
let clickTimer = null;

document.addEventListener('DOMContentLoaded', () => {
    const easterEgg = document.getElementById('fear-easter-egg');
    const closeButton = document.querySelector('.close-easter-egg');

    // Triple-click anywhere to reveal easter egg
    document.addEventListener('click', () => {
        clickCount++;

        if (clickTimer) {
            clearTimeout(clickTimer);
        }

        if (clickCount === 3) {
            easterEgg.classList.remove('hidden');
            easterEgg.style.display = 'flex';
            setTimeout(() => {
                easterEgg.style.opacity = '1';
            }, 10);
            clickCount = 0;
        }

        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 500);
    });

    // Close easter egg
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            easterEgg.style.opacity = '0';
            setTimeout(() => {
                easterEgg.classList.add('hidden');
                easterEgg.style.display = 'none';
            }, 300);
        });
    }
});

// ==========================================
// TERMINAL INTERACTIVE INPUT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const terminalBody = document.querySelector('.terminal-body');

    if (terminalBody) {
        terminalBody.addEventListener('click', () => {
            const newLine = document.createElement('p');
            newLine.classList.add('terminal-line', 'output');
            newLine.textContent = 'Paradigm shift initiated...';

            const cursorLine = terminalBody.querySelector('.terminal-line:last-child');
            terminalBody.insertBefore(newLine, cursorLine);
        });
    }
});

// ==========================================
// BLUEPRINT ANIMATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const blueprintLines = document.querySelector('.blueprint-lines');

    if (blueprintLines) {
        setInterval(() => {
            blueprintLines.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
        }, 3000);
    }
});

// ==========================================
// GRID MOVEMENT EFFECT
// ==========================================

let gridOffsetX = 0;
let gridOffsetY = 0;

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    gridOffsetX = (scrolled * 0.02) % 20;
    gridOffsetY = (scrolled * 0.02) % 20;

    const notesSection = document.querySelector('.notes-section');
    if (notesSection) {
        notesSection.style.backgroundPosition = `${gridOffsetX}px ${gridOffsetY}px`;
    }
});

// ==========================================
// HANDWRITTEN HOVER EFFECTS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const handwrittenElements = document.querySelectorAll('.handwritten');

    handwrittenElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const randomRotation = (Math.random() - 0.5) * 4;
            el.style.transform = `rotate(${randomRotation}deg) scale(1.05)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'rotate(-1deg) scale(1)';
        });
    });
});

// ==========================================
// MOODBOARD CELL RANDOMIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const moodCells = document.querySelectorAll('.mood-cell');

    moodCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const colors = ['#C9A882', '#5A7C7E', '#2C2C2C', '#6B6B6B', '#FFFFFF'];
            const color1 = colors[Math.floor(Math.random() * colors.length)];
            const color2 = colors[Math.floor(Math.random() * colors.length)];

            cell.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
        });
    });
});

// ==========================================
// COOKIE MONSTER ANIMATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const cookieSilhouette = document.querySelector('.cookie-silhouette');

    if (cookieSilhouette) {
        let rotation = 0;

        setInterval(() => {
            rotation += 1;
            cookieSilhouette.style.transform = `rotate(${rotation}deg)`;
        }, 50);
    }
});

// ==========================================
// PARALLAX EFFECT ON OCEAN SECTION
// ==========================================

window.addEventListener('scroll', () => {
    const oceanSection = document.querySelector('.ocean-section');

    if (oceanSection) {
        const scrolled = window.pageYOffset;
        const oceanOffset = oceanSection.offsetTop;
        const oceanHeight = oceanSection.offsetHeight;

        if (scrolled > oceanOffset - window.innerHeight && scrolled < oceanOffset + oceanHeight) {
            const parallax = (scrolled - oceanOffset) * 0.5;
            oceanSection.style.backgroundPositionY = `${parallax}px`;
        }
    }
});

// ==========================================
// CONCEPT MODULE STAGGER ANIMATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const conceptModules = document.querySelectorAll('.concept-module');

    conceptModules.forEach((module, index) => {
        module.style.animationDelay = `${index * 0.2}s`;
    });
});

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener('keydown', (e) => {
    // Press 'P' for Paradigm easter egg
    if (e.key === 'p' || e.key === 'P') {
        if (e.shiftKey) {
            const easterEgg = document.getElementById('fear-easter-egg');
            easterEgg.classList.remove('hidden');
            easterEgg.style.display = 'flex';
            setTimeout(() => {
                easterEgg.style.opacity = '1';
            }, 10);
        }
    }

    // Press 'Escape' to close easter egg
    if (e.key === 'Escape') {
        const easterEgg = document.getElementById('fear-easter-egg');
        easterEgg.style.opacity = '0';
        setTimeout(() => {
            easterEgg.classList.add('hidden');
            easterEgg.style.display = 'none';
        }, 300);
    }
});

// ==========================================
// SMOOTH SCROLL ENHANCEMENT
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// LOADING ANIMATION
// ==========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(`
%cPARADIGM TECHNOLOGIES
%call human-made creations that extend and change our abilities

%cEaster Eggs:
- Triple-click anywhere
- Press Shift + P
- Click the terminal
- Click moodboard cells
- Watch the blueprint rotate

%cMade with intention, not perfection.
`,
'font-size: 24px; font-weight: bold; letter-spacing: 0.3em;',
'font-size: 14px; font-style: italic; color: #6B6B6B;',
'font-size: 12px; color: #5A7C7E;',
'font-size: 10px; color: #C9A882; font-style: italic;'
);
