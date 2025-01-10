/* THIS JAVASCRIPT CODE CREATES THE FUNCTIONALITY FOR THE DASHBOARD VIEW OF THE WEBAPP. */

// 1. CREATE A FUNCTION TO SET THE DATW TO TODAY'S DATE 
function setCurrentDate() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    // Specify date format
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-UK', options);
}

// 2. HARD CODE MEAL INVENTORY (in later iterations of the app, users will have the ability to alter this themselves.)
let chickenCount = 6;
let spaghettiCount = 11;


// 3.  CREATE A FUNCTION TO UPDATE THE MEAL COUNT WITH EACH BUTTON CLICK 
function updateMealCount(mealType) {
    const countElementId = `${mealType}-remaining-number`;
    const buttonId = `${mealType}-btn`;
    let count = mealType === 'chicken' ? chickenCount : spaghettiCount;

    if (count > 0) {
        count--;
        document.getElementById(countElementId).textContent = count;

        // Update the count based on the meal type
        if (mealType === 'chicken') {
            chickenCount = count;
        } else {
            spaghettiCount = count;
        }

        // Disable button if count reaches zero
        if (count === 0) {
            disableButton(buttonId);
        }
    }
}

// 4. CREATE A FUNCTION TO DISABLE THE BUTTON WHEN THE MEAL COUNT REACHES ZERO. 
function disableButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.style.backgroundColor = '#ccc';
    button.style.cursor = 'not-allowed';
}

// 5. EVENT INITIALISATION 

// Event listeners for meal buttons
document.getElementById('chicken-btn').addEventListener('click', () => updateMealCount('chicken'));
document.getElementById('spaghetti-btn').addEventListener('click', () => updateMealCount('spaghetti'));
// Initialize the dashboard
function initializeDashboard() {
    setCurrentDate();
}
// Call the initialize function to set up the dashboard
initializeDashboard();
