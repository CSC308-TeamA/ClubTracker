#!/usr/bin/env bash
#
read -p 'This program requires python 3 (python), pip and npm installed. Press [Enter] to begin...'
#check if npm is installed
npm --version || read -p 'npm is not installed. Press [Enter] to terminate.' || exit
#check if python is installed
python --version || read -p 'Python is not installed. Press [Enter] to terminate.' || exit

cd ../myapp

cd backend

export FLASK_APP=backend.py
export FLASK_ENV=development
echo 'STARTING BACKEND'
exec ../../Scripts/startBackend.sh &

cd ..

echo 'STARTING FRONTEND'
exec ../Scripts/startFrontend.sh &

wait
done