# TeamProject
## Team Members
Jacob Burianek, Tammy Chau, Isaiah Kroeker, Steven Ngo, Jenisa Nguyen

## Travis CI Build Status
[![Build Status](https://travis-ci.com/CSC308-TeamA/ClubTracker.svg?branch=main)](https://travis-ci.com/CSC308-TeamA/ClubTracker)



# How To Setup
**All of these start in myapp folder.**

## Setup npm
**Run commands:**
`npm install`
`npm audit fix`


## Setup Python venv
**1. Create virtual environment. [How To](https://docs.python.org/3/tutorial/venv.html)**

**2. Activate virtual environment. (Same link as above)**

**3. Run following command:**
`[pip/pip3] install -r requirements.txt`



# How to Lint (Both require you've set up the environments)
**To use ESLint on a file:**
`npx eslint <filename>`

**To use pylint on a file:**
`python -m pylint <filename>`



# How to run app
**Running Backend (This is only in development when you are locally running):**
`cd backend`
`[export/set] FLASK_APP=backend.py`
`[export/set] FLASK_ENV=development`
`[python/python3] -m flask run`

**Running Frontend:**
`npm start`



# Documentation on Dependencies

## JavaScript Linter
Our team uses **ESLint** for our JavaScript code. Documentation found [here.](https://eslint.org/docs/user-guide/getting-started)

### Setting up ESLint via command line using npm
**1. Install ESLint using npm**

`npm install eslint --save-dev`

**2. Set up a config file**

`npx eslint --init`

### Running ESLint on any file or directory
`npx eslint file.js` or `npx eslint ./directory`


## Python Linter
Our team uses **PyLint** for our Python code. Documentation found [here.](http://pylint.pycqa.org/en/latest/intro.html)

### Install PyLint via command line using pip3
`pip3 install pylint` or `pip install pylint` depending on the user's development set up.

### Running PyLint on any file 
`python3 -m pylint file.py` or `python -m pylint file.py` depending on the user's development set up.


## Docs with current user stories
https://docs.google.com/document/d/1C4KBDniZPT1sQi7r3yUmNqxwI4CXx2FawUzMEpAc-MM/edit
