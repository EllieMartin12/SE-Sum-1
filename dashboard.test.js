/* THIS JAVASCRIPT TESTS THE FUNCTIONALITY OF THE USER LOG IN PAGE. */

/* 1. SIMPLE SMOKE TEST - ENSURES JEST IS IMPORTED AND WORKING AS EXPECTED */
test("basic test", () => {
    expect(2 + 6).toBe(8);
});

/* 2. TESTING THE DATE FUNCTION - dashboard.js should output todays date */

// Import the function to test from dashboard.js
const { setCurrentDate } = require('./dashboard');

test("Correct Date Displayed", () => {
    // Mock a DOM element for the date
    const mockDateElement = { textContent: "" };

    // Call the function with the mocked element
    setCurrentDate(mockDateElement);

    // Get today's date in the expected format
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const expectedDate = currentDate.toLocaleDateString('en-UK', options);

    // Check if the date was set correctly
    expect(mockDateElement.textContent).toBe(expectedDate);
});
