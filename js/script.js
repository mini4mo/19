document.addEventListener('mousemove', function(event) {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.left = event.clientX + 'px'; 
    cursor.style.top = event.clientY + 'px'; 
});
