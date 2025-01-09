// Set the current date in the "date" element
const dateElement = document.getElementById('date');
const currentDate = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
dateElement.textContent = currentDate.toLocaleDateString('en-UK', options);

// Meal counts
let chickenCount = 6;
let spaghettiCount = 11;

// Update the count on button click
document.getElementById('chicken-btn').addEventListener('click', () => {
    if (chickenCount > 0) {
        chickenCount--;
        document.getElementById('chicken-remaining-number').textContent = chickenCount;
    }
    if (chickenCount === 0) {
        disableButton('chicken-btn');
    }
});

document.getElementById('spaghetti-btn').addEventListener('click', () => {
    if (spaghettiCount > 0) {
        spaghettiCount--;
        document.getElementById('spaghetti-remaining-number').textContent = spaghettiCount;
    }
    if (spaghettiCount === 0) {
        disableButton('spaghetti-btn');
    }
});

// Disable button when count is zero
function disableButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.style.backgroundColor = '#ccc';
    button.style.cursor = 'not-allowed';
}
