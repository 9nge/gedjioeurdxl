document.addEventListener('DOMContentLoaded', () => {
    const playerCountElement = document.getElementById('player-count');
    
    function updateOnline() {
        const randomOnline = Math.floor(Math.random() * (75 - 45 + 1)) + 45;
        if (playerCountElement) {
            playerCountElement.textContent = randomOnline;
        }
    }

    setInterval(updateOnline, 15000);
});