from flask import Flask, render_template

from markupsafe import escape

app = Flask(__name__, template_folder='/templates')
app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')


@app.route("/introducing-co-pilot")
def introducing_copilot():
    return render_template('introducing-co-pilot.html')


@app.route("/results")
def results():
    return render_template('results.html')


@app.route("/user-dashboard")
@app.route("/user/<username>")
def user(username=""):
    return render_template('user-dashboard.html', username=username)
