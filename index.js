/* THIS JAVASCRIPT ADDS FUNCTIONALITY TO THE USER LOG IN PAGE OF THE WEB APP. */

/* 1. CREATE A FUNCTION TO DEFINE THE LOGGING IN PROCESS */
function setupLogin(formElement) {
  // Define valid credentials
  const validUsername = "John_Smith";
  const validPassword = "HelloBA123";

  formElement.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted"); // Log when the form is submitted

      // Get user inputs, trimming any whitespace
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      console.log("Username:", username); // Log the username input
      console.log("Password:", password); // Log the password input

      // Call the validate credentials function, along with the user inputs
      const validationResult = validateCredentials(username, password, validUsername, validPassword);
      
      // Log validation result
      console.log("Validation Result:", validationResult);

      // Clear previous error messages
      document.getElementById("usernameError").style.display = "none";
      document.getElementById("passwordError").style.display = "none";
      document.getElementById("credentialsError").style.display = "none";

      // Handle validation results:
      // If valid, alert the user 'login successful' and redirect to dashboard view
      if (validationResult.isValid) {
          alert("Login successful!");
          window.location.href = "dashboard.html"; // Redirect to dashboard
      } else {
          // If invalid, show the corresponding error message
          if (validationResult.errorMessage === "Invalid username") {
              document.getElementById("usernameError").innerText = validationResult.errorMessage;
              document.getElementById("usernameError").style.display = "block";
          } else if (validationResult.errorMessage === "Invalid password") {
              document.getElementById("passwordError").innerText = validationResult.errorMessage;
              document.getElementById("passwordError").style.display = "block";
          } else {
              document.getElementById("credentialsError").innerText = validationResult.errorMessage;
              document.getElementById("credentialsError").style.display = "block";
          }
          console.log(validationResult.errorMessage); // Log error message
      }
  });
}

/* 2. CREATE A FUNCTION TO PERFORM CREDENTIAL VALIDATION */
function validateCredentials(username, password, validUsername, validPassword) {
  // Initialize variables
  let isValid = true;
  let errorMessage = "";

  // Username Validation:
  // First, check if username field is empty, and give error message if so
  if (username === "") {
      errorMessage = "Username is required";
      isValid = false;
  // Next, check if username matches valid username
  } else if (username !== validUsername) {
      errorMessage = "Invalid Username or Password";
      isValid = false;
  }

  // Password Validation
  // Check if password field is empty
  if (password === "") {
      errorMessage = "Password is required";
      isValid = false;
  // Check if password matches valid password
  } else if (password !== validPassword) {
      errorMessage = "Invalid Username or Password";
      isValid = false;
  }

  // Return validation result
  return { isValid, errorMessage };
}

/* 3. INITIALIZE LOGIN SETUP AFTER PAGE LOAD */
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  setupLogin(loginForm);
});

/* 4. EXPORT FUNCTIONS FOR TESTING IN INDEX.TEST.JS */
module.exports = { setupLogin, validateCredentials };

