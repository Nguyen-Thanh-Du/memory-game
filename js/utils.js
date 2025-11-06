// --------------------------------------------------
// utils.js — Helper functions for general utilities
// --------------------------------------------------

/**
 * Shuffle an array in place using the Fisher–Yates algorithm.
 * @param {Array} array - Array to shuffle
 * @returns {Array} The same array, shuffled
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Export globally
window.shuffle = shuffle;

