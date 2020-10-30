import time
from flask import Flask
from datetime import date

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    today = datetime.now()
    return {'time': today}
