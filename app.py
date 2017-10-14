from flask import Flask,render_template,url_for,request,session,escape,jsonify
import datetime
import time
import os
from user.user import userModel

app = Flask(__name__)
app.secret_key="MadeByViresh"
port = int(os.getenv('VCAP_APP_PORT', 8080))

u = userModel(10000)

@app.route('/')
def omg():
    return render_template('index.html',amnt=u.balance)

@app.route('/endpointS')
def hello():
    return jsonify(resp="Hello World")

@app.route('/withdraw', methods=['POST'])
def withdr():
    if request.method != 'POST':
        return jsonify(error="Unknown")
    amt = int(request.form['amt'])
    bef = u.balance
    t = u.withdraw(amt)
    if(t == bef):
        return jsonify(error="Insufficient Funds")
    return jsonify(error="none",balance=t)

@app.route('/deposit', methods=['POST'])
def deposit():
    if request.method != 'POST':
        return jsonify(error="Unknown")
    amt = int(request.form['amt'])
    bef = u.balance
    t = u.deposit(amt)
    if(t == bef):
        return jsonify(error="Unknown Error Ocurred")
    return jsonify(error="none",balance=t)


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=port)

