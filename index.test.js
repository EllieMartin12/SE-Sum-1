/* THIS JAVASCRIPT TESTS THE FUNCTIONALITY OF THE USER LOG IN PAGE. */

/* 1. SIMPLE SMOKE TEST - ENSURES JEST IS IMPORTED AND WORKING AS EXPECTED */
test("basic test", () => {
    expect(2 + 6).toBe(8);
});

/* 2. TESTING POSSIBLE INPUT USERNAMES AND PASSWORDS */

// Import the function to test from index.js
const { validateCredentials } = require("./index.js");

// Test 1: Ensure that the valid username and password work
test("Valid Username & Password", () => {
    const { isValid, errorMessage } = validateCredentials("John_Smith", "HelloBA123", "John_Smith", "HelloBA123");
    expect(isValid).toBe(true);
    expect(errorMessage).toBe("");
});

// Test 3: Check an invalid password doesn't work, despite the correct username
test("Invalid Username", () => {
    const { isValid, errorMessage } = validateCredentials("wrongUsername", "HelloBA123", "John_Smith", "HelloBA123");
    expect(isValid).toBe(false);
    expect(errorMessage).toBe("Invalid Username or Password");
});

// Test 3: Check an invalid password doesn't work, despite the correct username
test("Invalid Password", () => {
    const { isValid, errorMessage } = validateCredentials("John_Smith", "wrongPassword", "John_Smith", "HelloBA123");
    expect(isValid).toBe(false);
    expect(errorMessage).toBe("Invalid Username or Password");
});

// Test 4: Ensure that the credential validation is case sensitive
test("Lower Case Credentials", () => {
    const { isValid, errorMessage } = validateCredentials("john_smith", "HelloBA123", "John_Smith", "HelloBA123");
    expect(isValid).toBe(false);
    expect(errorMessage).toBe("Invalid Username or Password");
});
