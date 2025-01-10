/* THIS JAVASCRIPT TESTS THE FUNCTIONALITY OF THE USER LOG IN PAGE. */

/* 1. SIMPLE SMOKE TEST - ENSURES JEST IS IMPORTED AND WORKING AS EXPECTED */
test("basic test", () => {
    expect(2 + 6).toBe(8);
});

/* 2. TESTING THE DATE FUNCTION - dashboard.js should output todays date */

// Import the functions to test from dashboard.js
const { setCurrentDate, updateMealCount } = require('./dashboard');


describe("Dashboard Functions", () => {
    test("Correct Date Displayed", () => {
        // Create a mock element for the date
        const mockDateElement = { textContent: "" };
        // Call the function with the mocked element
        setCurrentDate(mockDateElement);

        // Get today's date in the expected format
        const currentDate = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const expectedDate = currentDate.toLocaleDateString('en-UK', options);

        // Validate if the date was returned correctly
        expect(mockDateElement.textContent).toBe(expectedDate);
    });

    /* 3. TESTING THE MEAL INVENTORY COUNTER - the count should decrease by 1 each time the corresponding button is clicked */

    test("Update Meal Count - Chicken", () => {
        // Mock elements for count and button
        const mockCountElement = { 
            textContent: "6", 
            style: {} // Add a style object here
        };
        const mockButtonElement = { 
            disabled: false, 
            style: { backgroundColor: "", cursor: "" } 
        };
    
        // Call the function with mocked elements
        updateMealCount('chicken', mockCountElement, mockButtonElement);
    
        // Verify the count is decremented
        expect(mockCountElement.textContent).toBe(5); // Note: textContent should be a string
        // Verify the button is still enabled
        expect(mockButtonElement.disabled).toBe(false);
    
        // Verify the color has been set based on the count
        expect(mockCountElement.style.color).toBe("rgb(170, 0, 0)"); // Adjust this value based on the expected color
    });
    
});
