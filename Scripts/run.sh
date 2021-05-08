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