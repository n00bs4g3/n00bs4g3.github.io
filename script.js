document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Debugging is like being the detective in a crime movie where you're also the murderer.",
        "Why write clean code when you can write code that works... sometimes?",
        "If you don't get errors, are you even coding?",
    ];

    let index = 0;
    setInterval(() => {
        console.log(phrases[index]);
        index = (index + 1) % phrases.length;
    }, 3000);
});
