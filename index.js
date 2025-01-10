// function setupLoginForm(formElement) {
//   // Define valid credentials
//   const validUsername = "John_Smith";
//   const validPassword = "HelloBA123";

//   formElement.addEventListener("submit", function (event) {
//       event.preventDefault();

//       const username = document.getElementById("username").value.trim();
//       const password = document.getElementById("password").value.trim();

//       let isValid = true;

//       // Username validation
//       if (username === "") {
//           document.getElementById("usernameError").style.display = "block";
//           isValid = false;
//       } else {
//           document.getElementById("usernameError").style.display = "none";
//       }

//       // Password validation
//       if (password === "") {
//           document.getElementById("passwordError").style.display = "block";
//           isValid = false;
//       } else {
//           document.getElementById("passwordError").style.display = "none";
//       }

//       // Credential validation
//       if (isValid && (username !== validUsername || password !== validPassword)) {
//           document.getElementById("credentialsError").style.display = "block"; // Show credentials error
//           isValid = false;
//       } else {
//           document.getElementById("credentialsError").style.display = "none"; // Hide credentials error
//       }

//       if (isValid) {
//           alert("Login successful!");
//           window.location.href = "dashboard.html"; // Redirect to dashboard
//       }
//   });

//   // Return valid credentials for testing
//   return { validUsername, validPassword };
// }

// module.exports = { setupLoginForm };

function setupLoginForm(formElement) {
  // Define valid credentials
  const validUsername = "John_Smith";
  const validPassword = "HelloBA123";

  formElement.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      const validationResult = validateCredentials(username, password, validUsername, validPassword);
      
      // Show or hide error messages based on validation result
      if (validationResult.isValid) {
          alert("Login successful!");
          window.location.href = "dashboard.html"; // Redirect to dashboard
      } else {
          // Here, you would handle showing error messages as needed
          console.log(validationResult.errorMessage);
      }
  });

  // Return valid credentials for testing
  return { validUsername, validPassword };
}

function validateCredentials(username, password, validUsername, validPassword) {
  let isValid = true;
  let errorMessage = "";

  // Username validation
  if (username === "") {
      errorMessage = "Username is required";
      isValid = false;
  } else if (username !== validUsername) {
      errorMessage = "Invalid username";
      isValid = false;
  }

  // Password validation
  if (password === "") {
      errorMessage = "Password is required";
      isValid = false;
  } else if (password !== validPassword) {
      errorMessage = "Invalid password";
      isValid = false;
  }

  return { isValid, errorMessage };
}

module.exports = { setupLoginForm, validateCredentials };
