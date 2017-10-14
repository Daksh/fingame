from flask import Flask,render_template,url_for,request,session,escape,jsonify
import datetime
import time
import os
from user.user import userModel

app = Flask(__name__)
app.secret_key="MadeByViresh"
port = int(os.getenv('VCAP_APP_PORT', 8080))

du = {}     # This is a dictionary of users

@app.route('/')
def home():
    return render_template('index.html',amnt=0)

@app.route('/<Name>')
def omg(Name):
    return render_template('index.html',amnt=du[Name].balance)

@app.route('/endpointS')
def hello():
    return jsonify(resp="Hello World")

@app.route('/createUser/<Name>')
def makeUser(Name):
    u = userModel(10000,Name)
    du[Name] = u
    return jsonify(balance=u.balance,status="done")

@app.route('/withdraw/<Name>/<Amt>')
def withdr(Name,Amt):
    amt = int(Amt)
    u = du[Name]
    bef = u.balance
    t = u.withdraw(amt)
    if(t == bef):
        return jsonify(error="Insufficient Funds")
    return jsonify(error="none",balance=t)

@app.route('/deposit/<Name>/<Amt>')
def deposit(Name,Amt):
    amt = int(Amt)
    u = du[Name]
    bef = u.balance
    t = u.deposit(amt)
    if(t == bef):
        return jsonify(error="Unknown Error Ocurred")
    return jsonify(error="none",balance=t)

@app.route('/getBal/<Name>')
def retBal(Name):
    return str(du[Name].balance)


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=port)

