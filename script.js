document.addEventListener('DOMContentLoaded', function() {
    const ball = document.getElementById('ball');
    const shadow = document.getElementById('shadow');
    const pauseBtn = document.getElementById('pauseBtn');
    const slowBtn = document.getElementById('slowBtn');
    const normalBtn = document.getElementById('normalBtn');
    const restartBtn = document.getElementById('restartBtn');
    
    // Pause/Resume functionality
    pauseBtn.addEventListener('click', function() {
        ball.classList.toggle('paused');
        shadow.classList.toggle('paused');
        
        // Update button text
        if (ball.classList.contains('paused')) {
            pauseBtn.textContent = 'Resume Animation';
        } else {
            pauseBtn.textContent = 'Pause Animation';
        }
    });
    
    // Slow motion
    slowBtn.addEventListener('click', function() {
        ball.classList.remove('normal-speed');
        ball.classList.add('slow-motion');
        shadow.classList.remove('normal-speed');
        shadow.classList.add('slow-motion');
    });
    
    // Normal speed
    normalBtn.addEventListener('click', function() {
        ball.classList.remove('slow-motion');
        ball.classList.remove('paused');
        shadow.classList.remove('slow-motion');
        shadow.classList.remove('paused');
        pauseBtn.textContent = 'Pause Animation';
    });
    
    // Restart animation
    restartBtn.addEventListener('click', function() {
        // Remove animations
        ball.style.animation = 'none';
        shadow.style.animation = 'none';
        
        // Force reflow to restart animations
        void ball.offsetWidth;
        void shadow.offsetWidth;
        
        // Reapply animations
        ball.style.animation = 'ballPhysics 4s infinite cubic-bezier(0.33, 0, 0.67, 1)';
        shadow.style.animation = 'shadowPhysics 4s infinite cubic-bezier(0.33, 0, 0.67, 1)';
        
        // Remove any control classes
        ball.classList.remove('paused', 'slow-motion');
        shadow.classList.remove('paused', 'slow-motion');
        pauseBtn.textContent = 'Pause Animation';
    });
    
    // Add subtle random bounce on click for interactivity
    ball.addEventListener('click', function() {
        // Briefly change color to indicate interaction
        ball.style.background = 'radial-gradient(circle at 30px 15px, #ffffff, #ffb3b3 40%, #ff6666 70%, #cc0000)';
        
        // Reset color after a short delay
        setTimeout(() => {
            ball.style.background = 'radial-gradient(circle at 30px 15px, #ffffff, #a3d5ff 40%, #4da6ff 70%, #0066cc)';
        }, 300);
    });
});