from flask import Flask, render_template
from app import app

@app.route("/")
def index():
    if True:
        return render_template("index.html")

@app.route("/en")
def index_en():
    if True:
        return render_template("index_en.html")

@app.route("/userlist", methods=["GET", "POST"])
def userlist():
	return "Load TEST!!"