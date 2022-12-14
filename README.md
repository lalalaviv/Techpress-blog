# Techpress Blog

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developersâ€™ posts as well. 


## Table of Contents
- [Techpress Blog](#techpress-blog)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Technology](#technology)
  - [Mock-Up](#mock-up)
  - [License](#license)
  - [Questions](#questions)
  - [Credits](#credits)


## Installation 

  Before attempting to use this application, you must have the follow programs installed to your computer: 

  - VS Code
  - Node.js
  
  In the terminal of VS Code please install the following npm packages: 
  ```bash
npm i
npm i bcrypt
npm i connect-session-sequelize
npm i dotenv
npm i express
npm i express-handlebars
npm i express-session
npm i mysql2
npm i sequelize
  ```

## Usage

 To use the application locally please clone the repo to your local environment.
 <br/>
 The application will be invoked by using the following command:

  ```bash
  node seeds/seed.js
  node server.js
  ```
  Then in your preferred browser open  http://localhost:3000

  Alternatively, click the following in the access the deployed application:
  https://lalalaviv.github.io/Techpress-blog/


## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creatorâ€™s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creatorâ€™s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Technology
 Visual Studio Code
* HTML
* CSS
* Javascript
* Express
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) 
* [express-session](https://www.npmjs.com/package/express-session)
* [bcrypt package](https://www.npmjs.com/package/bcrypt)
* [dotenv package](https://www.npmjs.com/package/dotenv)
* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)


## Mock-Up

The following image shows the web application's appearance and functionality:
![The Techpress homepage](./Assets/mockup.png)



## License 
![License](https://img.shields.io/github/license/lalalaviv/techpress-blog)

## Questions

  Feel free to reach out if you have any enquiries
  <br/>
  GitHub: [@lalalaviv](https://github.com/lalalaviv)
  Email: lalala.viv@hotmail.com


## Credits

  Vivian Lee