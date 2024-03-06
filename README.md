# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# MY-CONTACT-APP

Brief description or overview of the project.

## Table of Contents

- [Project Setup](#project-setup)
- [Running the Project Locally](#running-the-project-locally)
- [Google Sheets Integration](#google-sheets-integration)
- [Additional Features and Customizations](#additional-features-and-customizations)
- [Code Structure and Comments](#code-structure-and-comments)

## Project Setup

To set up the project locally, follow these steps:

1. Clone this repository to your local machine:
   
   git clone <repository-url>
Navigate to the project directory:

cd <project-directory>

## Install project dependencies using npm or yarn:
npm install
or
yarn install

Running the Project Locally
To run the project on your local machine, use the following steps:

After installing dependencies, start the development server:
npm start
or
yarn start
Open your web browser and navigate to http://localhost:3000 to view the project.

## Google Sheets Integration
This project integrates with Google Sheets to store form submission data. Follow these steps to set up Google Sheets integration:

>Obtain Google Sheets API credentials by following the Google Sheets API documentation.
>Update the config.js file with your Google Sheets API credentials.
>Ensure proper authentication and authorization for accessing Google Sheets API endpoints.

## Additional Features and Customizations
This project includes the following additional features and customizations:

Reset Functionality: Implemented a reset button to clear all form fields.
Confirmation Modal: Added a confirmation modal to display a success message after form submission.
Email Validation: Implemented custom email validation to ensure that valid email addresses are entered into the form, providing error messages for invalid inputs.

## Code Structure and Comments
The codebase is structured as follows:

Components: Contains React components responsible for rendering UI elements.
Hooks: Contains custom React hooks for managing state and side effects.
The code is thoroughly commented to provide clarity and understanding. Comments are used to explain the purpose of functions, components, and any complex logic.