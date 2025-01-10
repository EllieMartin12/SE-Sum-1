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
        count--; // Decrement the count

        // Update the count based on the meal type
        if (mealType === 'chicken') {
            chickenCount = count;
        } else {
            spaghettiCount = count;
        }

        // Update the text content of the count element
        countElement.textContent = count;

        // Set the color based on the count
        setColorBasedOnCount(countElement, count);

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

// Function to set the color based on the count
function setColorBasedOnCount(countElement, count) {
    // Define thresholds
    const maxCount = 15; // Maximum count

    // Calculate the color based on the count
    const green = Math.round((count / maxCount) * 255); // Calculate green value
    const red = Math.round(((maxCount - count) / maxCount) * 255); // Calculate red value
    const orange = Math.round(((count - 5) / 5) * 255); // Calculate orange value for mid count

    // Set the color based on the thresholds
    if (count > 10) { // Green
        countElement.style.color = `rgb(0, ${green}, 0)`; // Green to yellow
    } else if (count > 5) { // Orange
        countElement.style.color = `rgb(${red}, ${orange}, 0)`; // Orange
    } else { // Red
        countElement.style.color = `rgb(${red}, 0, 0)`; // Red
    }
}

// 5. EVENT INITIALIZATION
function initializeDashboard(dateElement, chickenBtn, spaghettiBtn, chickenCountElement, spaghettiCountElement) {
    setCurrentDate(dateElement);

    // Set initial colors based on the initial counts
    setColorBasedOnCount(chickenCountElement, chickenCount);
    setColorBasedOnCount(spaghettiCountElement, spaghettiCount);

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

