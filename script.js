// Terminal Typewriter Effect
const text = "Initializing the system...";
let i = 0;
function typeEffect() {
    if (i < text.length) {
        document.getElementById("init-text").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            document.getElementById("loading-bar").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("terminal").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("terminal").style.display = "none";
                    document.getElementById("interface-box").style.animation = "expandBox 2s forwards";
                    setTimeout(() => {
                        document.getElementById("sidebar").style.opacity = "1"; // Fade in sidebar
                        document.getElementById("name-container").style.opacity = "1"; // Fade in name
                        startTypingEffect(); // Start typing effect
                    }, 2000);

                    // Expand Content Box after Interface Box
                    setTimeout(() => {
                        document.getElementById("content-box").style.animation = "expandContentBox 2s forwards";
                    }, 1000); // Triggers after interface-box animation

                    setTimeout(()=> {
                        document.getElementById("img-box").style.animation = "expandImgBox 2s forwards";
                    },1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
}
setTimeout(typeEffect, 500);

// Typing Effect for Roles
const roles = ["AI Developer", "Robotics Enthusiast", "Music Producer and Singer"];
let roleIndex = 0;
let charIndex = 0;
let typingText = document.getElementById("typing-text");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        typingText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 2000);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

function startTypingEffect() {
    setTimeout(typeRole, 500);
}

// -----------------------------------------
