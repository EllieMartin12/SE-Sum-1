/* Smoke test to ensure Jest is working as expected */
test("basic test", () => {
    expect(2 + 2).toBe(4);
});


const { validateCredentials } = require("./index.js");

// Test to ensure that the username 'john_smith' does not work
test("Invalid Username", () => {
    const { isValid, errorMessage } = validateCredentials("john_smith", "HelloBA123", "John_Smith", "HelloBA123");
    expect(isValid).toBe(false);
    expect(errorMessage).toBe("Invalid username");
});

// Test to ensure that the valid username works
test("Valid Username", () => {
    const { isValid, errorMessage } = validateCredentials("John_Smith", "HelloBA123", "John_Smith", "HelloBA123");
    expect(isValid).toBe(true);
    expect(errorMessage).toBe("");
});

// Test to ensure that the valid password works
test("Valid Password", () => {
    const { isValid, errorMessage } = validateCredentials("John_Smith", "HelloBA123", "John_Smith", "HelloBA123");
    expect(isValid).toBe(true);
    expect(errorMessage).toBe("");
});

// Test to check an invalid password
test("Invalid Password", () => {
    const { isValid, errorMessage } = validateCredentials("John_Smith", "wrongPassword", "John_Smith", "HelloBA123");
    expect(isValid).toBe(false);
    expect(errorMessage).toBe("Invalid password");
});

