/* THIS JAVASCRIPT CODE CREATES THE FUNCTIONALITY FOR THE DASHBOARD VIEW OF THE WEBAPP. */

// 1. CREATE A FUNCTION TO SET THE DATE TO TODAY'S DATE
function setCurrentDate(dateElement) {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-UK', options);
}

// 2. HARD CODE MEAL INVENTORY
let chickenCount = 6;
let spaghettiCount = 11;

// 3. CREATE A FUNCTION TO UPDATE THE MEAL COUNT WITH EACH BUTTON CLICK
function updateMealCount(mealType, countElement, buttonElement) {
    let count = mealType === 'chicken' ? chickenCount : spaghettiCount;

    if (count > 0) {
        count--;
        countElement.textContent = count;

        // Update the count based on the meal type
        if (mealType === 'chicken') {
            chickenCount = count;
        } else {
            spaghettiCount = count;
        }

        // Disable button if count reaches zero
        if (count === 0) {
            disableButton(buttonElement);
        }
    }
}

// 4. CREATE A FUNCTION TO DISABLE THE BUTTON WHEN THE MEAL COUNT REACHES ZERO
function disableButton(buttonElement) {
    buttonElement.disabled = true;
    buttonElement.style.backgroundColor = '#ccc';
    buttonElement.style.cursor = 'not-allowed';
}

// 5. EVENT INITIALIZATION
function initializeDashboard(dateElement, chickenBtn, spaghettiBtn, chickenCountElement, spaghettiCountElement) {
    setCurrentDate(dateElement);

    chickenBtn.addEventListener('click', () => {
        console.log('Chicken button clicked'); // Debugging log
        updateMealCount('chicken', chickenCountElement, chickenBtn);
    });
    spaghettiBtn.addEventListener('click', () => {
        console.log('Spaghetti button clicked'); // Debugging log
        updateMealCount('spaghetti', spaghettiCountElement, spaghettiBtn);
    });
}

// 6. EXPORT FUNCTIONS FOR TESTING (if necessary)
module.exports = { setCurrentDate, updateMealCount, disableButton, initializeDashboard };
