function zoomImage(element) {
    element.classList.add('zoom-in'); // Add the zoom-in class to trigger the animation
    element.style.transform = 'scale(1.1)'; // Set the final state immediately

    // Remove the zoom-in class and reset the transform property after the animation completes
    setTimeout(function() {
        element.classList.remove('zoom-in');
        element.style.transform = 'scale(1)';
    }, 300); // Adjust the timing here to match the animation duration in CSS (0.3s = 300ms)
}
