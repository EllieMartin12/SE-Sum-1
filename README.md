# Software Engineering Summative 1: The Development of an Inflight Meal Inventory Tracking App.

## Introduction
The oligopolistic nature of the modern airline industry intensifies competition amongst its most dominant firms, making them interdependent on one another, and bringing about the need for strategic behaviour. As various airlines fly the same routes, product differentiation can only occur via customer experience. Hence, in such an environment, it’s crucial to maintain a high customer satisfaction (CSAT) to not only increase customer retention but to improve brand image, attracting new customers and increasing the airlines market power. Subsequently, establishing loyalty in customers enables a shift towards more inelastic prices, further increasing revenue (Siegert and Ulbricht, 2020). 

One aspect of customer experience requiring improvement is catering. Whilst the meals themselves consistently receive high feedback, the coordination of service on board is poor. Currently, cabin crew manually check which meals are on offer, and the abundance of each, creating opportunity for miscounting and miscommunication between colleagues. Too often are passengers promised meals which are out of stock, served cold food, or not had options explained clearly. 

Consequently, this project aims to develop an app that’ll enable cabin crew to view and edit real-time meal inventory statuses. With stock levels available at a glance, the need to consult colleagues or rummage through trolleys is eliminated. This will empower them to offer meal choices with greater accuracy, ensuring they can uphold their commitments to passengers, and serve more people faster, boosting CSAT for the airline. 

## Use of Agile Methods
The agile philosophy is the ability to create and respond to change. This approach was formally introduced in 2001 with the creation of the symbolic Agile Manifesto, which emphasises flexibility, collaboration and iterative progress (Highsmith, 2002). 

Agile techniques have been hugely successful in the software development industry, revolutionising project delivery. By fostering collaboration, adaptability and faster times-to-market, companies worldwide are experiencing enhanced productivity and customer satisfaction. This widespread adoption of the technique underscores agile’s effectiveness in driving innovation, helping companies establish a competitive edge (Hooda, et al., 2023). 

Hence, for this project, I’ll be embracing the agile framework to help produce a more user-centric solution, within a culture of teamwork and continuous user feedback. Unlike the traditional waterfall approach, agile’s iterative nature ensures incremental delivery of value, providing a simple, immediate solution that’ll be iteratively improved. Meanwhile, the value from a more linear approach is delayed until it’s end – a risk that could be costly if this final product has misaligned deliverables with the stakeholders (Mokhtar and Khayyat, 2022). 
To implement agile principles in the project, I have utilised GitHub as a project management tool. Here, project workload is broken down into manageable tasks called issues, which can be assigned to and viewed by all team members. These issues have then been logged into sprints, providing a structured timeline for the project. By planning value delivery at the end of each sprint, I can ensure the project remains focused. Issues are also tracked via KanBan boards, providing a visual representation of task progression. This maintains transparency and clarity across the team, allowing bottlenecks to be clearly identified and stakeholders to remain updated on the apps progress (Ashmore and Runyan, 2014). 

Below is an example of a retrospective carried out at the end of sprint 1.  This creates space to reflect on progress, discuss working habits and set targets for the next sprint. All of which continuously shape the team into more efficient software developers, and hence leads to the production of a more successful product (Derby, Larsen and Horowitz, 2024). 

## Project Scoping Methods
Design thinking is a user-centred approach to innovation that establishes effective business models by focusing on the needs of people. These methods allow developers a deep understanding to the needs and challenges their stakeholders face, sparking creative solutions in early stages of design, and resulting in a highly functional product. Adopting this approach for the meal inventory app ensures the design is supplemented by a mindset that’ll constantly assess its viability (Mueller-Roterberg, 2020). 

In particular, design thinking involves empathising with stakeholders to understand their workflows, habits and frustrations. Hence, following some user research, the image below portrays an empathy map. This collaborative visualisation articulates our target user’s (cabin crew) environment, which can be mapped to formulate the requirements of our app, and aid future decision making: 

![Meal Inventory App - Project Scoping: EMPATHY MAP](https://github.com/user-attachments/assets/bb7bc84d-9c31-4929-a737-e8bec288d5a3)
_Figure 1: An empathy map created in Miro. A link to the Miro Board can be found here:_ [View Miro Board](https://miro.com/app/board/uXjVLyuCzXA=/?share_link_id=371914488981)

As shown, the app’s target persona manages numerous responsibilities, form ensuring safety and security to delivering exceptional customer service, all within a tight, crowded workspace. The fast-paced, noisy environment, coupled with the pressure of customer demands, could easily overwhelm crew members, complicating such tasks like meal inventory tracking or communicating with colleagues. 

In the ideation phase, these pains and gains translate into key requirements for the app: it must be simple, intuitive and stress-free to use, seamlessly synchronising across devices to reduce reliance on verbal communication amongst staff. Insights from the empathy map further highlight the priority of these requirements, outlined in the diagram below: 

![Meal Inventory App - Project Scoping: PROJECT REQUIREMENTS](https://github.com/user-attachments/assets/a6263310-1a45-4ff3-a446-39dfe15d7635)
_Figure 2: The functional and non-functional requirements of the project, as identified from the empathy map findings, prioritised (created in Miro). A link to the Miro Board can be found here:_ [View Miro Board](https://miro.com/app/board/uXjVLyuCzXA=/?share_link_id=371914488981)

We can conclude the highest priority is to deliver an app with a simple inventory view, and editing functionality. Next, the focus should shift to enhancing the usability and accessibility through colour coding, visualisations and multi-language support. In the long term, the app brings potential to expand its audience to include caterers and managers in the airline, offering insights into product demand. This would enable the company to make informed decisions about supplier partnerships and meal loading quantities, better aligning onboard availability to passenger preferences. These improvements would not only minimise waste – supporting the airlines et carbon zero sustainability goal, but also enhance customer satisfaction and retention. 

These requirements are structured using a Now, Next, Later framework, offering clear expectations, success criteria, and a roadmap for the project’s future development (Brereton, 2022). This also helps shape the components of each sprint when project planning: 

![Meal Inventory App - Project Scoping: NOW NEXT LATER](https://github.com/user-attachments/assets/a26bd1d6-c29d-4fe2-99a1-1f1bb2fc7f17)
_Figure 3: A 'Now, Next, Later' visual to portray how and when the  prioritised requirements for the app will be met (created in Miro). A link to the Miro Board can be found here:_ [View Miro Board](https://miro.com/app/board/uXjVLyuCzXA=/?share_link_id=371914488981)

## Designs & Prototypes
Design bridges the gap between conceptual ideas and functional application. Hence, physical models such as mock-ups and prototypes allow developers to visualise and test their ideas before building the final product. This not only facilitates valuable user feedback, but also mitigates the risk of investing extensive resources into a design that may prove unsuccessful (Korsakoff, et al., 2020). 
Therefore, I first took initial ideas and sketched a low-fidelity prototype. This isn’t faithful to details of the look, feel and behaviour of the app, but rather gives a high-level abstract view of the intended design, which (at this point) is subject to change: 

![Lo-fi Design](https://github.com/EllieMartin12/SE-Sum-1/blob/EllieMartin12-Prototype/LO-FI%20Design.jpg) 


_Figure 4: An initial, low fidelity sketch of the app_

As shown, the low-fi design indicates a clear, user-friendly design. Equipped with a straightforward login page, the app will then transition to an inventory tracker where meal counts are logically and visually shown. The use of colours helps differentiate between meals, enhancing usability, whilst pie charts allow data to be interpreted at a glance (Hartson and Pyla, 2019). 

After presenting this sketch to stakeholders and receiving positive feedback, I progressed to creating a more high-fidelity wireframe using Figma (Figure 5). This tool delivers an interactive, digital prototype, enabling designers to reach a high degree of precision that aligns with the functional objectives of the project. By stimulating user experience (UX), developers are provided with a clear vision of the end goal throughout the coding process, whilst stakeholders can explore and evaluate how the final product will behave and respond to their inputs, fostering a deeper understanding and stronger alignment with user expectations (Salvendy and Karwowski, 2021). 

![Figma Screen](https://github.com/user-attachments/assets/af938082-93b7-4713-8d5a-4e42110211c1)
_Figure 5: A high fidelity prototype of the app, developed in Figma. A Link to this design can be found here:_ [View Figma Design ](https://www.figma.com/proto/4e4nEptFLp7OykTWSjwz27/SE-Summative-1?node-id=601-9&t=YuXhqKT2aP9C4IYl-1)

As illustrated, multiple views have been designed to showcase the apps appearance and functionality, meeting many of the goals outlined in the now, next, later framework above. 

The login page includes fields for the username and password, with serval variants to simulate how these text boxes will dynamically appear at different stages of the UX. Additionally, the login page features a “Change Language” button which, when clicked, opens a language selector pop-up, catering for the worldwide placement of cabin crew. For users encountering login difficulties, a call-to-action button directs them to a form to report issues (Figure 6). 

![Form 1](https://github.com/user-attachments/assets/95e777b9-d8ea-4176-8908-ee71d6e50682)
_Figure 6: To improve user experience, a form has been created where cabin crew can log issues they're having, particularly with logging in. To view the form, click here:_ [View Isue Tracking Form](https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5yjSGYWQRBdPi8-BeaKCHhZURTUxT0EzQ0swODdGUEtSVkk4NzNTNkYzUS4u)

Upon logging in, the dashboard provides an intuitive overview of meal inventory, aligned with common reading habits. Content is arranged in order of decreasing significance, guiding the viewers’ attention towards the most critical information, and hence allowing crew to easily scan and interpret the data quickly (a key requirement for our ‘on-the-go’, busy persona) (Schwabish, 2012). E.g., key information such as date and flight number are prominently displayed at the top, allowing crew to ensure the app is up-to-date and that they’re viewing the correct data. The rest of the content includes example meal options such as “Chicken & Rice” and “Spaghetti & Meatballs” which’ll be expressed as clickable buttons to automatically subtract one from inventory. Inventory levels are then displayed in large, bold numbers, with a green-red colour scheme that visually reflects remaining quantities.

To enhance accessibility, the dashboard includes a colour vision deficiency (CVD) mode, activated via the “CVD Friendly” button (Nichols, n.d.). This inclusivity ensures the app is usable and effective for all users, regardless of visual impairments. 

Building on the low-fi design, this prototype introduces a third view, containing functionality for users to add inventory, addressing the scenario in which additional meals are loaded unexpectedly, or crew mistakenly miscount inventory. On this page, users will also be able to seamlessly switch between flights (updating the app with each shift). Finally, a feedback link at the bottom provides an avenue for crew to share their ideas, insights and criticisms, fostering continuous improvement, and ensuring the app remains user-centric throughout its development (utilising the design thinking approach) (Figure 7). 

![Form 2](https://github.com/user-attachments/assets/2bfc3c84-c466-4289-aed1-a032af2dc4f1)
_Figure 7: A vital part of the iterative development process is continuous feeddback. Hence, the prototype includes a form where users can express their likes and dislikes on the product. To view the form, click here:_ [View Feedback Form](https://forms.office.com/Pages/ResponsePage.aspx?id=gcLuqKOqrk2sm5o5i5IV5yjSGYWQRBdPi8-BeaKCHhZUMldFRlVZUzdZTVBXMFI0S1MzUTdIRzBLTy4u)

Using Figma’s previewing ability, the following video demonstrates the app prototype, displaying how the final product will appear on mobiles: 


![GIF](https://github.com/EllieMartin12/SE-Sum-1/blob/EllieMartin12-Prototype/Figma%20Design%20x1.5.gif)

_Figure 8: A GIF demonstration of the Apps Prototype. To view this iin video form (which is also slightly slower), please click here:_ [DropBox Link to Video](https://www.dropbox.com/scl/fi/dmtddlj5gvi7umy6c5ta6/App-Prototype-Demo-Figma.mov?rlkey=ghj9ta90h2gkjdgs95zsftwl3&st=f7d4qckz&dl=0)

This prototype acts as a tangible platform for testing and refining functionality, setting a solid foundation for the successful launch of the application. Without which, we risk misaligned visions, poor usability, and wasted time and costs to the company. 




