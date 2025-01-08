document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    let isValid = true;
  
    // Username validation
    if (username === "") {
      document.getElementById("usernameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("usernameError").style.display = "none";
    }
  
    // Password validation
    if (password === "") {
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("passwordError").style.display = "none";
    }
  
    if (isValid) {
      alert("Login successful!");
      // Proceed with login logic
    }
  });
  