document.addEventListener('DOMContentLoaded', function () {
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
});