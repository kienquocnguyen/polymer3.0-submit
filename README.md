# Polymer 3.0 Submit Form Example

#### Thanks to "Polymer App Toolbox - Starter Kit" demo

In my project i clone this demo to use it as an appereance of this project.
https://github.com/Polymer/polymer-starter-kit

#### WARNING: For better understanding about this project you should have knowledge about Nodejs and Xampp.

## Setup
Before run this project, you should also clone my api project
https://github.com/kienquocnguyen/nodejs-submitapi

### Install

After you clone "Polymer 3.0 Submit Form Example" as an demo you need to install it with yarn

    yarn install
    
    
## Overview

After install you need to run command yarn start to start the project.

    yarn start


#### In Source Code
![submit-post2](https://user-images.githubusercontent.com/33189395/74527751-1454b200-4f59-11ea-9d6b-782252012ab8.jpg)

#### In Browser
![submit-post1](https://user-images.githubusercontent.com/33189395/74527721-01da7880-4f59-11ea-8783-c50b7eaf9375.jpg)


## How It's Work

#### 1. API
In this project i've used my "Nodejs Submit API" and this is how the api look.

![submit-post5](https://user-images.githubusercontent.com/33189395/74528182-2be06a80-4f5a-11ea-9f2f-f3ba30efec5f.jpg)

This is the api for add new post.

![submit-post6](https://user-images.githubusercontent.com/33189395/74528344-a8734900-4f5a-11ea-97d2-2cd4703ebad7.jpg)

This is the api for upload image to server.

![submit-post7](https://user-images.githubusercontent.com/33189395/74528483-c3de5400-4f5a-11ea-896d-ccb8cee6d4c4.jpg)


#### 2. First i used iron-form components to build this form.
You can learn more about iron-form components in here:
https://www.webcomponents.org/element/@polymer/iron-form

iron-form in my project
![submit-post8](https://user-images.githubusercontent.com/33189395/74582290-a78af780-4fec-11ea-9088-db05670616ac.jpg)

To use iron-form I have to create a normal form inside of it to set the api and method.
![submit-post9](https://user-images.githubusercontent.com/33189395/74582722-d8b9f680-4ff1-11ea-9350-9af3fc614b6d.jpg)

First I created two paper-input for post_author and post_categories
![submit-post10](https://user-images.githubusercontent.com/33189395/74582762-7d3c3880-4ff2-11ea-82f3-1e05635f009d.jpg)

Then I used vaadin-upload to upload images to the server.
You can learn more about vaadin-upload in here:
https://www.webcomponents.org/element/vaadin/vaadin-upload

However to submit images name to the database, I have to create another paper-input inside vaadin-upload to get images name.
![submit-post11](https://user-images.githubusercontent.com/33189395/74582804-1cf9c680-4ff3-11ea-8493-43f55cd59ae4.jpg)

Then I created two more paper-input for post_date and post_title
![submit-post12](https://user-images.githubusercontent.com/33189395/74582871-c04adb80-4ff3-11ea-9c13-0399560e87cd.jpg)

Then I used poly-richtex components (This is a richtext components that I created by my own).
![submit-post13](https://user-images.githubusercontent.com/33189395/74582931-83cbaf80-4ff4-11ea-8a13-c1fc8c44b646.jpg)

Here is the link if you want to use it for your own app.
http://www.mediafire.com/file/mf6s8loz4gorktd/poly-richtext.zip

And here is what you need to install before you use this components

    npm install --save @polymer/paper-input
    npm install --save @polymer/paper-button
    npm install --save @polymer/iron-form
    npm i @vaadin/vaadin-upload --save
    npm install fontawesome-icon
    npm i fa-icons


