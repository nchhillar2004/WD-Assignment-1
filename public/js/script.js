const words = ["React", "Python", "Java", "C Programming", "HTML, CSS, JavaScript"];
let wordIndex = 0;
let charIndex = 0;
let typingSpeed = 210;
let erasingSpeed = 80;

const textElement = document.getElementById("text");
const typewriterElement = document.getElementById("typewriter");

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    textElement.textContent = words[wordIndex].substring(0, charIndex + 1);
    charIndex++;
    typewriterElement.style.animation = 'typedjsBlink 0.7s infinite';
    setTimeout(typeWord, typingSpeed);
  } else {
    setTimeout(eraseWord, typingSpeed * 2);
  }
}

function eraseWord() {
  if (charIndex > 0) {
    textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    typewriterElement.style.animation = 'none';
    setTimeout(eraseWord, erasingSpeed / 2);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, erasingSpeed / 2);
  }
}

typeWord();
