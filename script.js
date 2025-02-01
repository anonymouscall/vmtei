document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.getElementById('no-button');

    // GSAP Background Animation
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        const duration = 5 + Math.random() * 5; // Random duration between 5 and 10 seconds
        const delay = Math.random() * 5; // Random delay up to 5 seconds

        gsap.to(circle, {
            x: window.innerWidth * Math.random(),
            y: window.innerHeight * Math.random(),
            scale: 2 + Math.random() * 3,
            opacity: 0,
            duration: duration,
            delay: delay,
            repeat: -1, // Infinite loop
            yoyo: true, // Reverse animation
            ease: 'power1.inOut',
        });
    });

    // Make the No button move away when the cursor gets close
    document.addEventListener('mousemove', (e) => {
        const cursorX = e.clientX;
        const cursorY = e.clientY;

        const buttonRect = noButton.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        const distance = Math.sqrt(
            Math.pow(cursorX - buttonCenterX, 2) + Math.pow(cursorY - buttonCenterY, 2)
        );

        // If the cursor is within 100px of the button, move the button
        if (distance < 100) {
            moveNoButton();
        }
    });

    // Function to move the No button to a random position
    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        gsap.to(noButton, {
            x: x - noButton.getBoundingClientRect().left,
            y: y - noButton.getBoundingClientRect().top,
            duration: 0.5,
            ease: 'power2.out',
        });
    }

    // Prevent the No button from being clicked
    noButton.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the link from working
    });
});
