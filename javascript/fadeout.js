window.addEventListener('scroll', function () {
    var button = document.getElementById('smoothHero');
    var scrollPosition = window.scrollY;

    // Distance over which the button fades out (px)
    var fadeStart = 10;      // where fade begins
    var fadeEnd = 150;      // where it should be fully invisible

    // Calculate opacity
    var opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);

    // Clamp between 0 and 1
    opacity = Math.max(0, Math.min(1, opacity));

    button.style.opacity = opacity;
});