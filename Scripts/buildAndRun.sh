#!/usr/bin/env bash
#
read -p 'This program requires python 3 (python), pip and npm installed. Press [Enter] to begin...'
#check if npm is installed
npm --version || read -p 'npm is not installed. Press [Enter] to terminate.' || exit
#check if python is installed
python --version || read -p 'Python is not installed. Press [Enter] to terminate.' || exit

cd ../myapp

echo 'bootstraping npm'
npm install react-bootstrap bootstrap

cd backend

echo 'installing flask'
pip install flask
echo 'installing flask-cors'
pip install flask-cors
echo 'installing axios'
npm install axios
echo 'installing pymongo'
pip install pymongo
echo 'installing dnspython'
pip install dnspython

export FLASK_APP=backend.py
export FLASK_ENV=development
echo 'STARTING BACKEND'
exec ../../Scripts/startBackend.sh &

cd ..

echo 'STARTING FRONTEND'
exec ../Scripts/startFrontend.sh &

wait
done