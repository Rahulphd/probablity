
document.addEventListener('DOMContentLoaded', (event) => {
    // Variables to keep track of counts
    let headsCount = 0;
    let tailsCount = 0;

    // Event listener for classical probability coin flip
    document.getElementById('coinFlipButton').addEventListener('click', () => {
        let result = Math.random() < 0.5 ? 'Heads' : 'Tails';
        document.getElementById('coinResult').textContent = result;
        if (result === 'Heads') {
            headsCount++;
            document.getElementById('headsCount').textContent = headsCount;
        } else {
            tailsCount++;
            document.getElementById('tailsCount').textContent = tailsCount;
        }
    });

    // Event listener for relative frequency coin flips
    document.getElementById('multiCoinFlipButton').addEventListener('click', () => {
        let multiHeadsCount = 0;
        let multiTailsCount = 0;

        // Flip the coin 100 times
        for (let i = 0; i < 100; i++) {
            let result = Math.random() < 0.5 ? 'Heads' : 'Tails';
            if (result === 'Heads') {
                multiHeadsCount++;
            } else {
                multiTailsCount++;
            }
        }

        // Calculate and display frequencies
        document.getElementById('headsFrequency').textContent = multiHeadsCount + "%";
        document.getElementById('tailsFrequency').textContent = multiTailsCount + "%";
    });
});
