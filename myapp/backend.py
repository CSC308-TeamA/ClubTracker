from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!';

@app.route("/about")
def AboutPage():
   return "Don't know, but About Page!!!";

@app.route("/contact")
def ContactPage():
   return "We'll probably put something here like \"links to contact\" and \"email API\"";
