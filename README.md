Andrew - routes and logins 
Abby - Handlebars HTML / Building models for contacts
Gwanju - Heroku Deployment/Stripe Integration


# UW_Project3_LeagueOfLegendsFriendTracker
## Overview
```
Projects have played a key role in your journey to becoming a full-stack web developer. As you apply for development jobs, your portfolio is absolutely vital to opening doors to opportunities. Your portfolio showcases high-quality deployed examples of your work, and you can use your finished projects for that very purpose.

This project is a fantastic opportunity to show employers your collaborative skills and coding abilities, especially in the context of a scalable, user-focused MERN app. Remember that employers want to see what you can do, but they also want to see how you work with other developers. The more examples of deployed collaborative work you have in your portfolio, the more likely you are to get an interview and a job.
```

### Link to Web App: 
<!-- LINK TO DEPLOYMENT HERE -->

### App Preview:
<!-- Replace with path to screenshot   ![My Password Generator Screenshot](./Assets/MyPasswordGeneratorScreenShot.PNG "My Password Generator Screenshot") -->

## Notes

<!-- Use this area to add personal notes on implementation, etc -->

## User Story

```
AS A league of legends player
I WANT a better way to notate who friends are
SO THAT I play with people more frequently and get better matchups for my game mode
```

## Acceptance Criteria

### Project Requirements
Your group will use everything you’ve learned throughout this course to create a MERN stack single-page application that works with real-world data to solve a real-world challenge, with a focus on data and user demand. This project will provide you with the best opportunity to demonstrate your problem-solving skills, which employers will want to see during interviews. Once again, the user story and acceptance criteria will depend on the project that you create, but your project must fulfill the following requirements:
* Use React for the front end.
* Use GraphQL with a Node.js and Express.js server.
* Use MongoDB and the Mongoose ODM for the database.
* Use queries and mutations for retrieving, adding, updating, and deleting data.
* Be deployed using Heroku (with data).
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Include authentication (JWT).
* Protect sensitive API key information on the server.
* Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).
* Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
#### CSS Styling
Instead of using a CSS library like Bootstrap, consider one of the following suggestions:
* Look into the concept of CSS-in-JS, which abstracts CSS to the component level, using JavaScript to describe styles in a declarative and maintainable way. Some popular libraries include [styled-components](https://styled-components.com/) and [Emotion](https://emotion.sh/docs/introduction).
* Try using a component library, such as [Semantic UI](https://semantic-ui.com/), [Chakra UI](https://chakra-ui.com/), or [Ant Design](https://ant.design/).
* Create all the CSS for your application just using CSS.
Ultimately, it doesn't matter which of these options you choose&mdash;it just needs to look professional and be mobile-friendly.
#### Payment Platform
Consider integrating the Stripe payment platform. Even if you don’t create an e-commerce application, you could set up your site to accept charitable donations.
#### Bonus
Although this is not a requirement for your project, see if you can also implement functionality to meet the minimum requirements of a PWA:
* Uses a web manifest
* Uses a service worker for offline functionality
* Is installable
### Presentation Requirements
Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following:
* Elevator pitch: a one minute description of your application
* Concept: What is your user story? What was your motivation for development?
* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
* Demo: Show your stuff!
* Directions for Future Development
* Links to the deployed application and the GitHub repository. Use the [Guide to Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) on The Full-Stack Blog if you need a reminder on how to deploy to Heroku.






















<!-- SUBMITTED PROJECT IDEA -->
<!-- 
Application Name
League of Legends Friend Tracker
-----
Application Description
Track friends in League of Legends; allow to add notes regarding positions played, game modes, etc; Have personal note section where you can leave a blurb about how you know a player
"Stretch Goals": Allow for integration with other games, connect users with steam, discord, and other supported platforms
-----
User Story
AS A league of legends player
I WANT a better way to notate who friends are
SO THAT I play with people more frequently and get better matchups for my game mode
-----
Market Research and Competitors
While there used to be a site that kind of did a low-scale version of what we want to do (you could enter 2 usernames and it would find the last game they played together), that site used their web accessible info and has been offline since Riot switched that information to full API with no web services. That site never reconfigured the way it got data and just shut down services instead.
Other than that, there are small features on things like op.gg that tell you who you've recently played with and the stats you have with said players, but the data is very recent and doesn't solve the overall problem of knowing who the people on your friends list are.
Especially as Riot pushes towards more co-op game modes like Clash, this ability to search and sort your friends will be very useful.
-----
Mongo Models Outline
User Model
Username *
Password
Email
Game Account Model - League of Legends
League of Legends Username
UniqueID - generated to connect multiple accounts owned by same person
List Username - For the user who added them to their friend list *
ThisIsMe - If this is their Account
Game Data - League of Legends:
     Notes - User entered notes
     Modes:
          TFT
          ARAM
          Unranked Rift
          Ranked Solo/Duo
          Ranked Flex
          Clash
          Rotating Game Mode
     Positions:
          Top
          Jungle
          Mid
          Bottom/ADC
          Support
-----
New Technology
We are considering adding a stripe integration to allow for donations, but otherwise have not decided on what new technology to use.

 -->

<!-- ORIGINAL PROJECT README -->
<!-- 
# 24 Final Project: MERN Stack Single-Page Application

Projects have played a key role in your journey to becoming a full-stack web developer. As you apply for development jobs, your portfolio is absolutely vital to opening doors to opportunities. Your portfolio showcases high-quality deployed examples of your work, and you can use your finished projects for that very purpose.

This project is a fantastic opportunity to show employers your collaborative skills and coding abilities, especially in the context of a scalable, user-focused MERN app. Remember that employers want to see what you can do, but they also want to see how you work with other developers. The more examples of deployed collaborative work you have in your portfolio, the more likely you are to get an interview and a job.

## Project Requirements

Your group will use everything you’ve learned throughout this course to create a MERN stack single-page application that works with real-world data to solve a real-world challenge, with a focus on data and user demand. This project will provide you with the best opportunity to demonstrate your problem-solving skills, which employers will want to see during interviews. Once again, the user story and acceptance criteria will depend on the project that you create, but your project must fulfill the following requirements:

* Use React for the front end.

* Use GraphQL with a Node.js and Express.js server.

* Use MongoDB and the Mongoose ODM for the database.

* Use queries and mutations for retrieving, adding, updating, and deleting data.

* Be deployed using Heroku (with data).

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Include authentication (JWT).

* Protect sensitive API key information on the server.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).

* Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

### CSS Styling

Instead of using a CSS library like Bootstrap, consider one of the following suggestions:

* Look into the concept of CSS-in-JS, which abstracts CSS to the component level, using JavaScript to describe styles in a declarative and maintainable way. Some popular libraries include [styled-components](https://styled-components.com/) and [Emotion](https://emotion.sh/docs/introduction).

* Try using a component library, such as [Semantic UI](https://semantic-ui.com/), [Chakra UI](https://chakra-ui.com/), or [Ant Design](https://ant.design/).

* Create all the CSS for your application just using CSS.

Ultimately, it doesn't matter which of these options you choose&mdash;it just needs to look professional and be mobile-friendly.

### Payment Platform

Consider integrating the Stripe payment platform. Even if you don’t create an e-commerce application, you could set up your site to accept charitable donations.

### Bonus

Although this is not a requirement for your project, see if you can also implement functionality to meet the minimum requirements of a PWA:

* Uses a web manifest

* Uses a service worker for offline functionality

* Is installable

## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing) to address the following:

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to the deployed application and the GitHub repository. Use the [Guide to Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) on The Full-Stack Blog if you need a reminder on how to deploy to Heroku.

## Grading Requirements

> **Note**: If a project submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This project is graded based on the following criteria:

### Technical Acceptance Criteria: 25%

* Satisfies the following code requirements:

  * Application uses React for the front end.

  * Application has a GraphQL API with a Node.js and Express.js server, and uses queries and mutations for retrieving, adding, updating, and deleting data.

  * Application uses MongoDB and the Mongoose ODM for the database and protects sensitive API key information on the server.

  * Application includes user authentication using JWT.

### Concept 10%

* Application should be a unique and novel idea.

* Your group should clearly and concisely articulate your project idea.

### Deployment: 20%

* Application deployed at live URL on Heroku and loads with no errors.

* Application GitHub URL submitted.

### Repository Quality: 10%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class and id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README file with description, screenshot, and link to deployed application.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application is responsive.

### Presentation 10%

* Your group should present using a slide deck.

* Every group member should speak during the presentation.

* Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing).

### Collaboration 10%

* There are no major disparities in the number of GitHub contributions between group members.

### Bonus

Fulfilling all three of the following requirements to turn your app into a PWA will add 10 points to your grade. Note that the highest grade you can achieve is still a 100:

* Uses a web manifest

* Uses a service worker for offline functionality

* Is installable

## How to Submit Your MERN Stack Single-Page Application

**Each member of your group** is required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved. -->
