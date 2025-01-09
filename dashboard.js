// Initial meal data
const mealData = {
    chicken: 6,
    spaghetti: 11
};

// Update meal remaining display
function updateRemaining(meal, elementId) {
    document.getElementById(elementId).textContent = `${mealData[meal]} Remaining`;
    if (mealData[meal] <= 0) {
        document.getElementById(`${meal}-btn`).disabled = true;
    }
}

// Button click handlers
document.getElementById('chicken-btn').addEventListener('click', () => {
    if (mealData.chicken > 0) {
        mealData.chicken -= 1;
        updateRemaining('chicken', 'chicken-remaining');
    }
});

document.getElementById('spaghetti-btn').addEventListener('click', () => {
    if (mealData.spaghetti > 0) {
        mealData.spaghetti -= 1;
        updateRemaining('spaghetti', 'spaghetti-remaining');
    }
});
