# E-commerce Back End Starter Code

## Description

The aim of this project was to build the back end for an e-commerce site by taking a working Express.js API and configure it to use Seuqeulize to interact with a MySQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To use this application you need to have installed:
- Node.js
- Npm packages express, mysql2, dotenv, and sequelize

Start by cloning the repo into your system using the following command:
```
    $ git clone https://github.com/noah138/E-commerce-Back-End
```
Install dependencies using the following command:
```
    $ npm install
```
Create a .env file containing the following:
```
    DB_NAME='ecommerce_db'
    DB_USER='root'
    DB_PASSWORD='your_password'
```
Then create the schema in your MySQL shell:
```
    % mysql -uroot -p
    mysql source db/schema.sql
    mysql use ecommerce_db
```
Exit mysql and then seed the data:
```
    mysql exit
    npm run shell
```

## Usage

Run the server using the following command:
```
    npm run watch
```

The functionality can be demonstrated using Insoma:

[Click here to watch a video demonstration](https://drive.google.com/file/d/1aTIDmijxTBHMj_qvGa_siUL4a8xEt2vn/view)

## Credits

The wonderful team of instructors at the UW full-time online coding camp 2022.
