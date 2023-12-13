# Shapely-Logos
This application will make your simple logo dreams come true! Once you enter in your information, this application will generate a new logo for you based on your responses!

### License: MIT

## Table of Contents
- [Description](#description)
- [Live Screen Recording of Application Functionality](#live-screen-recording-of-application-functionality)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)

## Description

This application enables freelance web developers to create simple logos for their clients and projects without relying on a graphic designer. It uses inquirer to prompt users within the command line for logo details, such as text content, text color, shape choice (triangle, square, or circle), and the color of the shape. Once the user answers all prompts, the application generates an SVG file representing the logo. This has made your life for logos that much easier!

### Live Screen Recording of Application Functionality
[Link to Screen Recording](https://drive.google.com/file/d/1PzrVTDdUa1pXKIKy05KZxdHyMVpudFAI/view)


### Screenshots
**Examples of Generated Logos:**

![example-logo1](./images/example2.png)
![example-logo2](./images/example3.png)
![example-logo3](./images/example4.png)


**Screenshots of application:**

![example-1](./images/example1.png)
![example-2](./images/example5.png)


## Technologies Used

This project is powered by Node.js v16, utilizes inquirer v9.2.12 (node package manager), and the file system module (node package manager). It also employs jest v29.7.0 (node package manager) for unit testing.


## Installation

1. Clone the repo: `git clone https://github.com/PotionSela/Shapely-Logos.git`
2. Open in VS Code. If you do not have VS Code, install it.
3. Using the terminal, install Node.js v16.
4. Once Node.js v16 is installed, in the terminal, run the command `npm init -y` to initialize and create a `package.json` where project files will be stored.
5. Next, use the terminal to run the command `npm i` to install the dependencies associated with this application. Developers may need to install inquirer and jest directly from the command line. To do so, the command for inquirer will be `npm i inquirer@9.2.12` to install v9.2.12 of inquirer, and `npm i jest` to install the latest version of jest.
6. To run the application, within the terminal, type the command `node index.js`.


## Features

Features of this application include the user's ability to generate logos quickly and easily through the use of SVG files, entirely from the command line. No UI (user interface) is needed, and no front-end tools are required.


## Usage Information

To run this application, use the command line to navigate to the directory of the application, install all dependencies (`npm i`), then type the command `node index.js`. You will then be taken through a series of questions. Once all questions have been answered properly, a message will display to the command line, telling you your logo has been generated. Find your new logo in the newly generated HTML and SVG file.

For unit testing instructions, navigate to the [Test Instructions](#test-instructions) section.