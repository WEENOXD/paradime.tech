/**
 * PARADIGM TECHNOLOGIES - MAIN JAVASCRIPT
 * Interactive features and animations
 */

// ==========================================
// MATRIX RAIN EFFECT
// ==========================================

const matrixRain = () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.15';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`アイウエオカキクケコサシスセソタチツテト01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = matrix.charAt(Math.floor(Math.random() * matrix.length));
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    };

    setInterval(draw, 35);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
};

document.addEventListener('DOMContentLoaded', matrixRain);

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
// RANDOM GLITCH ARTIFACTS
// ==========================================

const createGlitchArtifact = () => {
    const artifact = document.createElement('div');
    artifact.style.position = 'fixed';
    artifact.style.width = `${Math.random() * 200 + 50}px`;
    artifact.style.height = `${Math.random() * 3 + 1}px`;
    artifact.style.background = `rgba(${Math.random() > 0.5 ? '0, 255, 65' : '255, 0, 255'}, ${Math.random() * 0.5 + 0.3})`;
    artifact.style.left = `${Math.random() * 100}%`;
    artifact.style.top = `${Math.random() * 100}%`;
    artifact.style.pointerEvents = 'none';
    artifact.style.zIndex = '9999';
    artifact.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(artifact);

    setTimeout(() => {
        artifact.remove();
    }, Math.random() * 200 + 100);
};

// Create random glitch artifacts
setInterval(() => {
    if (Math.random() > 0.7) {
        createGlitchArtifact();
    }
}, 3000);

// ==========================================
// RANDOM SCREEN DISTORTION
// ==========================================

const screenDistortion = () => {
    if (Math.random() > 0.98) {
        document.body.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => {
            document.body.style.transform = 'translate(0, 0)';
        }, 50);
    }
};

setInterval(screenDistortion, 100);

// ==========================================
// RANDOM TEXT CORRUPTION
// ==========================================

const corruptText = () => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const elements = document.querySelectorAll('h1, h2, h3, .handwritten, .handwritten-large');

    if (Math.random() > 0.95 && elements.length > 0) {
        const randomEl = elements[Math.floor(Math.random() * elements.length)];
        const originalText = randomEl.getAttribute('data-original-text') || randomEl.textContent;

        if (!randomEl.getAttribute('data-original-text')) {
            randomEl.setAttribute('data-original-text', originalText);
        }

        // Corrupt a random character
        const chars = originalText.split('');
        const randomIndex = Math.floor(Math.random() * chars.length);
        chars[randomIndex] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        randomEl.textContent = chars.join('');

        setTimeout(() => {
            randomEl.textContent = originalText;
        }, 100);
    }
};

setInterval(corruptText, 2000);

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(`
%c██████╗  █████╗ ██████╗  █████╗ ██████╗ ██╗ ██████╗ ███╗   ███╗
%c██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║██╔════╝ ████╗ ████║
%c██████╔╝███████║██████╔╝███████║██║  ██║██║██║  ███╗██╔████╔██║
%c██╔═══╝ ██╔══██║██╔══██╗██╔══██║██║  ██║██║██║   ██║██║╚██╔╝██║
%c██║     ██║  ██║██║  ██║██║  ██║██████╔╝██║╚██████╔╝██║ ╚═╝ ██║
%c╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝ ╚═════╝ ╚═╝     ╚═╝

%call human-made creations that extend and change our abilities

%c[ SYSTEM ONLINE ]
%cInitializing cyberpunk protocol...
%cMatrix rain: ACTIVE
%cGlitch artifacts: ENABLED
%cChaos mode: MAXIMUM

%cEaster Eggs:
- Triple-click anywhere
- Press Shift + P
- Click the terminal
- Click moodboard cells
- Watch everything glitch

%c> EMBRACE THE CHAOS <
`,
'font-size: 10px; color: #00ff41; font-family: monospace;',
'font-size: 10px; color: #00ff41; font-family: monospace;',
'font-size: 10px; color: #00ff41; font-family: monospace;',
'font-size: 10px; color: #00ff41; font-family: monospace;',
'font-size: 10px; color: #00ff41; font-family: monospace;',
'font-size: 10px; color: #00ff41; font-family: monospace;',
'font-size: 14px; font-style: italic; color: #00f0ff;',
'font-size: 12px; color: #ff00ff;',
'font-size: 12px; color: #00ff41;',
'font-size: 12px; color: #ff00ff;',
'font-size: 12px; color: #00f0ff;',
'font-size: 12px; color: #ffff00;',
'font-size: 12px; color: #00f0ff;',
'font-size: 14px; color: #ff00ff; font-weight: bold;'
);
