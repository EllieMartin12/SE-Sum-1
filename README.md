# Software Engineering Summative 1: The Development of an Inflight Meal Inventory Tracking App. 🍔✈️

<details>
<summary>User Documentation 📲</summary>
<br>
  
 ## Getting Started 🎬
 
  **Please Click [here](https://elliemartin12.github.io/SE-Sum-1/) To Access The Application**

  To log in, please use the following credentials:

  **Username: John_Smith**
  
  **Password: HelloBA123**

  How to use the app:
  1. Log in with the above credentials
  2. View current inventory of each meal type on the given flight
  3. When a customer orders a meal, click it to decrease its inventory
  4. Monitor stock levels via the colour-coded indicators.

  Please watch the GIF below for a demo: 
![GIF](https://github.com/EllieMartin12/SE-Sum-1/blob/main/assets/App%20Demo.gif)

  ## App Features 📱
  1. A User Log-in Page
  2. A Meal Inventory Tracker

 ## Requirements 📋
 When using the app, please ensure you're viewing on your desktop or mobile and have an internet connection. 

 ## Troubleshooting 🔫
 Problem: "The app layout looks broken!"
 Solution: Please ensure you're viewing on Google Chrome.

 ## FAQs 🤷🏼‍♀️
 **Q: Where can I give feedback?**
 A: Simply click on the feedback link in the app to log your comments. We'll respond shortly 😊

</details>



<details>
<summary>Technical Documentation 🔧</summary>
<br>

## Technical Stack 🧱
- JavaScript
- HTML (Hypertext Markup Language)
- CSS (Cascading Style Sheets)
- GitHub
- Visual Studio Code

## Project Structure 🏗
The repository comprises of the following key components:

- **`assets/`:** Directory containing all images and GIFs
  
**Login Page**
- **`index.html`:** HTML code

- **`index.css`:** CSS code

- **`index.js`:** JavaScript code

- **`index.test.js`:** JavaScript code to test functionality of login page

**Dashboard Page**
- **`dashboard.html`:** HTML code

- **`dashboard.css`:** CSS code

- **`dashboard.js`:** JavaScript code

- **`dashboard.test.js`** JavaScript code to test functionality of dashboard

  ## Set Up 🏕️

   **Prequisites**:
  - Node.js v16 or later
  - npm
  - Jest
    
  To set-up the project locally:

  1. **Clone the Repository**
     
     ```bash
     git clone https://github.com/EllieMartin12/SE-Sum-1.git
     ```
  2. **Install Dependencies**

     ```bash
     npm install
     npm install --save-dev jest
     ```
  

  ## Testing 🧪
  This project uses Jest for unit testing, specified in `package.json`. To run the unit tests:

  ```bash
  npm test
  ```
</details>



<details>
<summary>Project Introduction 📝 </summary>
<br>
  
The oligopolistic nature of the modern airline industry intensifies competition amongst its most dominant firms, making them interdependent on one another, and bringing the need for strategic behaviour. As various airlines fly the same routes, product differentiation can only occur via customer experience. Hence, it’s crucial to maintain high customer satisfaction (CSAT) to not only increase customer retention but to improve brand image, attracting new customers and increasing the airlines market power. Subsequently, establishing loyalty in customers enables a shift towards more inelastic prices, increasing revenue. 
  
One aspect of customer experience requiring improvement is catering. Whilst the meals themselves receive high feedback, the coordination of service on board is poor. Currently, cabin crew manually check the abundance of each meal on offer, creating opportunity for miscounts and miscommunication between colleagues. Too often are passengers promised meals which are out of stock, served cold food, or not had options explained clearly. 

Consequently, this project aims to develop an app that’ll enable crew to view and edit real-time meal inventory statuses. With stock levels available at a glance, the need to consult colleagues or rummage through trolleys is eliminated. This will empower them to offer meal choices with greater accuracy, ensuring they can uphold their commitments to passengers, and serve more people faster, boosting CSAT for the airline. 

</details>



<details>
<summary>Use of Agile Methods 🏃‍♀️‍➡️ </summary>
<br>
  
The agile philosophy was formally introduced by the Agile Manifesto, emphasising flexibility, collaboration and iterative progress.

Agile techniques are hugely successful in the software development industry, revolutionising project delivery. By fostering collaboration, adaptability and faster times-to-market, companies worldwide are experiencing enhanced productivity and CSAT, helping them establish a competitive edge.

Hence, I’ve embraced the agile framework to produce a more user-centric solution. Unlike the traditional waterfall approach, agiles iterative nature ensures incremental delivery of value, providing a simple, immediate solution that’ll be iteratively improved. Meanwhile, the value from a more linear approach is delayed until it’s end – a risk that could be costly as it’s often more beneficial to deliver some value quicker. This delay also increases the likelihood the final app has misaligned deliverables with stakeholders.

To implement agile principles, I've utilised GitHub's project management tools: 

## Issues 🔎
Workload has been broken down into manageable tickets called issues:
![Example Issue](https://github.com/user-attachments/assets/9f04db72-659d-4c4e-90cf-0745fa1779a8)
_**Figure 1:**_ An example issue, this one to build the user log in page for the app. Each issue has an acceptance criteria to help create a "definition of done". 

Issues are labelled according to their priority and SDLC phase: 

**Labels 🏷️**

<img width="683" alt="Screenshot 2025-01-16 at 19 35 42" src="https://github.com/user-attachments/assets/b4dae5c0-99e6-4c10-9edf-1c7339b50c36" />

_**Figure 2:** The strategic categorisation of issues enables team members to quickly identify critical tasks versus those that can be scheduled for later via Github's ability to filter issues by their label. It also provides some context to the task without having to read the entire issue (a useful tool for busy project managers in the workplace). Other methods of labelling could have included by effort (creating the ability to filter small tasks from big ones)._

## Sprints 🏃‍♂️‍➡️
These issues have been logged into sprints: 

![Sprint Planning](https://github.com/EllieMartin12/SE-Sum-1/blob/main/assets/Example%20Sprints.jpg)
_**Figure 3:** Example sprint planning. This lays out a clear project roadmap, allowing team members to visually see when issues will be worked on. By providing a clear, organised timeline for the project, I can ensure it stays focused whilst constantly delivering value to stakeholders._

## Kanban Board ✅

Additionally, a Kanban board tracks issues, providing a visual representation of task progression.

![Kanban Board](https://github.com/EllieMartin12/SE-Sum-1/blob/main/assets/Kanban%20Board.jpg)
_**Figure 4:** Use of a KanBan board to easily see the statuses of tasks at a glance. In a multi-disciplinary team, this acts as a vital tool to promote transparency towards the current state of the project, and clarity on who is working on what. From my experience, this allowed me to ensure I never took on too many tasks as once, whilst clearly seeing where energy should be focued. Issues yet to be addressed lie in the backlog, where they're then reprioritised and moved accordingly at the beginning of each sprint. These include tasks which may need additional refinement or blockers cleared. The 'Review' section contains tasks which have been finsihed, but require some additional checks._ 

</details>



<details>
<summary>Project Scoping Methods 🧐 </summary>
<br>
  
Design thinking is a user-centred approach to innovation that establishes effective business models by focusing on the needs of people. These methods allow developers a deep understanding to the needs and challenges their stakeholders face, sparking creative solutions in early stages of design, and resulting in a highly functional product. Adopting this approach for the meal inventory app ensures the design is supplemented by a mindset that’ll constantly assess its viability. 

In particular, design thinking involves empathising with stakeholders to understand their workflows, habits and frustrations. Hence, Figure 5 portrays an empathy map. This collaborative visualisation articulates our target user’s (cabin crew) environment, which can be mapped to formulate the requirements of the app: 

![Meal Inventory App - Project Scoping: EMPATHY MAP](https://github.com/user-attachments/assets/bb7bc84d-9c31-4929-a737-e8bec288d5a3)
_**Figure 5:** An empathy map created in Miro. As shown, the app’s target persona manages numerous responsibilities, from ensuring safety and security to delivering exceptional customer service, all within a tight, crowded workspace. The fast-paced, noisy environment, coupled with the pressure of customer demands, could easily overwhelm crew members, complicating tasks like meal inventory tracking or communicating with colleagues. A link to the Miro Board can be found here:_ [View Miro Board](https://miro.com/app/board/uXjVLyuCzXA=/?share_link_id=371914488981).

In the ideation phase, these pains and gains translate into the app's key requirements: it must be simple, intuitive and stress-free to use, seamlessly synchronising across devices to reduce reliance on verbal communication amongst staff. Insights from the empathy map further highlight the priority of these requirements, outlined in the diagram below: 

![Meal Inventory App - Project Scoping: PROJECT REQUIREMENTS](assets/Meal%20Inventory%20App%20-%20Project%20Scoping%20PROJECT%20REQUIREMENTS.jpeg)
_**Figure 6:** The functional and non-functional requirements of the project, as identified from the empathy map findings, prioritised (created in Miro). From this, we can conclude the highest priority is to deliver an app with a simple inventory view and editing functionalty. Next, focus should shift to enhancing the usability and accessibility through colour-coding, visualisations and multi-language support. In the long term, the app brings potential to expand its audience to caterers and managers in the airline, offering insights into product demand. This would enable the company to make informed decisions about supplier partnerships and meal loading quantities, better aligning onboard availability to passenger preferences. These improvements would not only minimise waste – supporting the airline's net carbon zero sustainability goal, but also enhance customer satisfaction and retention. A link to the Miro Board can be found here:_ [View Miro Board](https://miro.com/app/board/uXjVLyuCzXA=/?share_link_id=371914488981).

These requirements are structured using a 'Now, Next, Later' framework, offering clear expectations, success criteria, and a roadmap for the project’s future development. 

![Meal Inventory App - Project Scoping: NOW NEXT LATER](assets/Meal%20Inventory%20App%20-%20Project%20Scoping%20NOW%20NEXT%20LATER.jpeg)
_**Figure 7:** A 'Now, Next, Later' visual to portray how and when the prioritised requirements for the app will be met (created in Miro). This also helps shape the components of each sprint when project planning. A link to the Miro Board can be found here:_ [View Miro Board](https://miro.com/app/board/uXjVLyuCzXA=/?share_link_id=371914488981).
</details>



<details>
<summary>Designs & Prototypes 🎨</summary>
<br>
  
Design bridges the gap between conceptual ideas and functional application. Physical models like mock-ups and prototypes allow developers to visualise and test ideas before production, facilitating user feedback and mitigating the risk of investing extensive resources into a design that'll prove unsuccessful. 

## Low-fi Design: 🖍️ 

![Lo-fi Design](https://github.com/EllieMartin12/SE-Sum-1/blob/EllieMartin12-Prototype/LO-FI%20Design.jpg) 


_**Figure 8:** An initial, low fidelity sketch of the app. This isn't faithful to the look, feel and behaviour of the app, but rather focuses on granting a high-level, abstract view whilst design is still subject to change. As shown, the low-fi design indicates a clear, user-friendly design. Equipped with a straightforward login page, the app will then transition to an inventory tracker where meal counts are logically and visually shown. The use of colours helps differentiate between meals, enhancing usability, whilst pie charts allow data to be interpreted at a glance._

## High-fi Design: 🖌️
This interactive, digital prototype, enabled me to reach a high degree of precision that aligns with the functional objectives of the app. By stimulating user experience (UX), developers are provided with a clear vision of the end goal, whilst stakeholders can explore how the final product will behave and respond to their inputs, fostering a deeper understanding and stronger alignment with user expectations.

![Figma Screen](https://github.com/user-attachments/assets/af938082-93b7-4713-8d5a-4e42110211c1)
_**Figure 9:** A high fidelity prototype of the app, developed in Figma. As illustrated, multiple views have been designed to showcase the apps appearance and functionality, meeting many of the goals outlined above. A Link to this design can be found here:_ [View Figma Design ](https://www.figma.com/proto/4e4nEptFLp7OykTWSjwz27/SE-Summative-1?node-id=601-9&t=YuXhqKT2aP9C4IYl-1).


1. **Login Page:** Includes username and password fields, with serval variants to simulate how these will dynamically appear at different stages of the UX. Additionally, a “Change Language” button opens a language selector pop-up, catering for worldwide cabin crew. A link directs users to an issue-logging form (Figure 10):

<img width="529" alt="image" src="https://github.com/user-attachments/assets/2d5478dc-4fc2-4c1c-a570-d7e9fb1ede20" />

_**Figure 10:** To improve user experience, a form has been created where cabin crew can log issues they're experiencing, particularly with logging in. To view the form, click here:_ [View Issue Tracking Form](https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5yjSGYWQRBdPi8-BeaKCHhZURTUxT0EzQ0swODdGUEtSVkk4NzNTNkYzUS4u).

2. **Dashboard:** Provides an overview of meal inventory. Content is arranged in order of decreasing significance, guiding the viewers’ attention towards the most critical information so that they interpret data quickly (a key requirement for our ‘on-the-go’, busy persona). Meal buttons automatically subtract one from inventory when clicked, before displaying the new total in large, bold, colour-changing numbers.

3. **Accessible Dashboard:** A CVD mode, activated via the “CVD Friendly” button. This inclusivity ensures the app is usable and effective for all users, regardless of visual impairments. 

4. **Inventory Management:** Contains functionality for users to add inventory, catering for mistakes or addtional meals loaded. Here, users can also seamlessly switch between flights. Finally, a feedback form provides an avenue for crew to share their ideas, insights and criticisms, encouraging continuous improvement, and ensuring the app remains user-centric throughout its development (Figure 11). 

<img width="496" alt="image" src="https://github.com/user-attachments/assets/d79f447b-092c-4507-a331-d3dfdba0ba04" />

_**Figure 11:** A vital part of the iterative development process is continuous feeddback. Hence, the prototype includes a form where users can express their likes and dislikes on the product. To view the form, click here:_ [View Feedback Form](https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5yjSGYWQRBdPi8-BeaKCHhZUMldFRlVZUzdZTVBXMFI0S1MzUTdIRzBLTy4u).

### Prototype Demo: 📱 

![GIF](https://github.com/EllieMartin12/SE-Sum-1/blob/EllieMartin12-Prototype/Figma%20Design%20x1.5.gif)

_**Figure 12:** A GIF demonstration of the App's Prototype, displaying how the finished product will appear on mobiles. To view this in video form (which is also slightly slower), please click here:_ [DropBox Link to Video](https://www.dropbox.com/scl/fi/dmtddlj5gvi7umy6c5ta6/App-Prototype-Demo-Figma.mov?rlkey=ghj9ta90h2gkjdgs95zsftwl3&st=f7d4qckz&dl=0)

This prototype acts as a tangible platform for testing and refining functionality, setting a solid foundation for the successful launch of the application. Without which, we risk misaligned visions, poor usability, and wasted time and costs to the company. 

</details>



<details>
<summary>Building the MVP 🚀</summary>
<br>
  
  ### What is the MVP?  🧲
The minimum viable product is the **simplest** version of the app possible that’ll **attract users** and **add business value**. By leveraging insights gained through the empathy and project scoping phases above, the features of the MVP could be defined. Consequently, this would simply consist of a login page (with a company-wide login), with the ability to view and decrease inventory of meals on board a particular flight. In future iterations, the app will evolve to become more inclusive and insightful by scaling to more flights, storing data to be used for demand insights, and adding additional functionality as outlined by the "Next" and "Later" sections of the framework above.

### Coding Process: User Login Page 👨‍💻

Firstly, I wrote the CSS and HTML for the user login page. Each of these are foundational building blocks to any web app: HTML gives the structure and content of the view, whilst CSS makes the app more visually appealing by defining its style. Next, Javascript is used to make the app more dynamic and functional. Here, I added user authentication and user interaction handling (e.g., ensuring buttons are clickable and login details are processed). I chose a modular approach to ease the debugging and maintainability of the code: 

First, valid credentials are defined, and `addEventListener` handles the submission process, ensuring a smooth UX:
```
function setupLogin(formElement) {
  // Define valid credentials
  const validUsername = "John_Smith";
  const validPassword = "HelloBA123";

  formElement.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("Form submitted");
```

The code then trims any whitespace and logs the username and password for testing purposes:
```
/ Get user inputs, trimming any whitespace
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      console.log("Username:", username); // Log the username input
      console.log("Password:", password); // Log the password input
```

Next, a helper function ‘validateCredentials’ encapsulates the logic for checking the username and password against the predefined valid ones. This function returns a Boolean variable to indicate if the user entered the correct details, and an error message if necessary.
```
// Call the validate credentials function, along with the user inputs
      const validationResult = validateCredentials(username, password, validUsername, validPassword);
      
      // Log validation result
      console.log("Validation Result:", validationResult);
```

Error handling is a vital part of the development process to ensure clarity for the user: I used DOM manipulation to then display targeted error messages, and inform the user of a successful login. 
```
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
```

![Final Log in Page](https://github.com/user-attachments/assets/4f728530-d77c-47e2-8a93-fe0116352296)
_**Figure 13:** The Finished Log in Page For The MVP_.

### Coding Process: Inventory Tracker Page 👨‍💻

Once security was in place, focus shifted towards building a basic inventory tracker. Figure 14 indicates how several iterations of the interface were built. Again, a modular approach was taken to aid readability and foster potential collaboration. 
![image](https://github.com/user-attachments/assets/af5b979a-1f95-493e-9291-5e3398010aee)
_**Figure 14:** The incremental development of the dashboard view. The first version had several bugs including a fixed date and lack of styling, whilst the second version brought colour, better fulfilling the apps requirements. The final version builds upon the MVP by starting to include some 'Medium' priority requriements (e.g., a feedback form and colour-changing numbers)._

Firstly, `setCurrentDate` ensures the date is always displayed at the top of the page using the `toLocaleDateString()` method. 
```
function setCurrentDate(dateElement) {
    const currentDate = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-UK', options);
}
```

Next, an example meal inventory is hard coded (something that’ll need to be more robust when scaling to more flights)

```
let chickenCount = 6;
let spaghettiCount = 11;
```

`updateMealCount` then handles user interaction when clicking on a meal, ensuring the inventory decreases by 1. If the count reaches 0, the button is then disabled via `disableButton`:
```
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
        setColourBasedOnCount(countElement, count);

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
```

`setColourBasedOnCount` then adjusts the colour of the number dyanaimcally, using a gradient from green (to indicate high inventory) to red (low inventory). These colours give users a visual cue about how many meals are left, further improving UX. 

```
function setColourBasedOnCount(countElement, count) {
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
```

Finally, `initialiseDashboard` calls all functions, tieing everything together:

```
function initialiseDashboard(dateElement, chickenBtn, spaghettiBtn, chickenCountElement, spaghettiCountElement) {
    setCurrentDate(dateElement);

    // Set initial colors based on the initial counts
    setColourBasedOnCount(chickenCountElement, chickenCount);
    setColourBasedOnCount(spaghettiCountElement, spaghettiCount);

    chickenBtn.addEventListener('click', () => {
        console.log('Chicken button clicked'); // Debugging log
        updateMealCount('chicken', chickenCountElement, chickenBtn);
    });
    spaghettiBtn.addEventListener('click', () => {
        console.log('Spaghetti button clicked'); // Debugging log
        updateMealCount('spaghetti', spaghettiCountElement, spaghettiBtn);
    });
}
```
</details>



<details>
<summary>Testing 🧪</summary>
<br>
  
Testing is a critical phase of the SDLC, serving as the backbone for delivering high-quality, reliable and maintainable applications. It ensures the app performs as intended, aliging with both functional and non-functional requirements, whilst also checking the code is of high standard. This minimises risks of creating an inefficient app, wasting resources and harming the airline’s reputation. 

Utilising Test-Driven Development (TDD) principles using Jest enabled a more iterative and agile workflow. Hence, app development, unit test creation and refactoring formed a cycle that outputted a reliable and robust codebase, which can be smoothly scaled to house more flights in future iterations. 

Firstly, I conducted static analysis to eliminate unused variables, neaten syntax and add comments: all of which will enable the code to reach a higher degree of reusability and developer confidence. Next, I leveraged unit tests to simulate various real-world scenarios, ensuring functionality behaved as expected. By continuously running these tests, I could make incremental changes confidently, knowing existing features could remain unaffected. 

### Login Page Unit Tests 🎟️

1. A simple smoke test confirms Jest is operational:

```
test("basic test", () => {
    expect(2 + 6).toBe(8);
});
```

2. The following tests validate the functionality of the login page, ensuring the credential validation function adheres to expectations. Several combinations of usernames and passwords are tested to minimise future unexpected behaviour, as well as guarantee security assurance. As an airline, maintaining security is paramount.

```
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
```

### Dashboard Page Unit Tests 📊

1. Smoke test:
```
   test("basic test", () => {
    expect(2 + 6).toBe(8);
});
```

2. Validate `setCurrentDate`. An accurate, well displayed date boosts UX.
```
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
```

 3. Validate `updateMealCount`, which dynamically manages meal inventory. Here, I check the meal count decreases each time the functions triggered (when the button is clicked). It also checks the button is only disabled when count reaches 0, and that colours correctly change to grant visual feedback to users. 

```
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
```

## Running Tests ▶️

  This comprehensive testing strategy ensures the app's functionality is reliable and secure, producing a seamless UX. 
  
  ![Screenshot of tests](https://github.com/user-attachments/assets/34b1f627-546a-4bce-9722-577df808ae65)
  
  _**Figure 15:** Screenshot evidence of a fully passing set of test suites._

As the app continues development, several additional tests could be implemented to maintain its efficiency. E.g., stress and load testing to evaluate the apps performance during high traffic, as well as integration testing to establish the apps capability of live-updates. 

</details>



<details>
<summary> Evaluation & Next Steps 🪜 </summary>
<br>

The initial project proposal scoped out several functional and non-functional requirements of the app. When comparing to these, I am confident the first phase of release is a success. E.g., cabin crew can now digitally track meal inventory on board, enhancing efficiency and reducing manual errors. As for non-functional requirements, the utilisatison of Google Lighthouse has returned a positive webpage audit:

<img width="373" alt="Screenshot 2025-01-17 at 12 23 38" src="https://github.com/user-attachments/assets/d47b49cf-da45-40e4-b312-50f2f1d9f7de" />

_**Figure 16:** Here, both the login page and dashboard have scored highly in performance, accessbility, best practices and SEO (Search Enginge Optimisation)._

With accessibility scores of 91 and 90, the app is well-positioned for initial deployment, yet could possess higher contrasting colours to better comply with WCAG standards. To address this, a CVD friendly mode is planned for future sprints. 

Performance was another key requirement, for which Lighthouse has awarded a perfect score. However, ongoing testing will be essential as the app scales to accommodate more flights.

Project mangement tools has been instrumental in acheiving these results. Agile methodologies ensured challenges were addressed iteratively, creating steady progress. In the workplace, collaboration with stakeholders could enhance these efforts, further fostering alignment with user needs. Additonally, creating user stories would improve audience understanding. If working amongst a team, I would also conduct retrospectives to evaluate working habits, refine processes and improve collaboration along the way. 

To conclude, whilst the MVP is efficient in meeting the 'Now' section of the project scope, there is still significant potential to enhance functionality further. Features such as undoing changes, viewing multiple flights and selecting alternate languages will improve usability for cabin crew. Additionally, the app can deliver greater value to the company by incoprorating demand-tracking capabilities, which'll aid future desicion-making, boost CSAT and reduce waste. 

This project has built a strong foundation towards improving meal service on board; with continuous development, it can evolve into a centric tool that creates lasting business value. 

</details>
