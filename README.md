# ClubTracker
## Team Members
Jacob Burianek, Tammy Chau, Isaiah Kroeker, Steven Ngo, Jenisa Nguyen

## Travis CI Build Status
[![Build Status](https://travis-ci.com/CSC308-TeamA/ClubTracker.svg?branch=main)](https://travis-ci.com/CSC308-TeamA/ClubTracker)

## Acceptance Tests
Here is a link to our original acceptance test document: https://docs.google.com/document/d/1Tvu6fH-OcDuaEhUeSDayKiv9yg5H1vwU9JO8CJpLHGg/edit?usp=sharing

The criteria in the document do not actually reflect our final acceptance tests, rather what we have in myapp/cypress/integration
better indicates what the main features of our site are. Below is a screenshot of all our acceptance tests passing.
![image](https://user-images.githubusercontent.com/17805409/121474274-b1bacd00-c978-11eb-9293-686dfc85342f.png)
Cypress last ran and updated: June 9, 2021, 23:16

Here is a link to our Cypress runs dashboard: https://dashboard.cypress.io/projects/2drixm/runs

Due to the time crunch and the nature of how cookies do not work with our deployed Heroku site (non-verified account), the 
acceptance tests can only be done locally and therefore are not yet automated. We did at least start the steps if to do so, as
seen with our Cypress dashboard being set up.

## Code Coverage
You should have the following python packages: pytest, coverage (plus all other packages required by the backend).
You should also be in a python virtual environment (venv).

**Commands to get coverage measurements of our backend:**
`cd myapp/backend`
`coverage run --source=. -m pytest backend_test.py backend.py`
`coverage report -m`

Here is a sample of a coverage report:
![image](https://user-images.githubusercontent.com/17805409/121275756-3676ef80-c882-11eb-8523-ce034a6740a0.png)
Coverage last ran and updated: June 8, 2021, 17:52

We do have at least 50% coverage of backend.py, which includes our primary data processing and backend-contained logic, and 
the rest are mostly code that deal with external interfaces (i.e., requests library, MongoDB). For example, our entire User
class is mostly MongoDB accessing/interfacing.

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
