from flask import Flask, render_template
from app import app

@app.route("/")
def index():
    if True:
        return render_template("index.html")