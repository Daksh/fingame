from flask import Flask,render_template,url_for,request,session,escape,jsonify
import datetime
import time
import os
from user.user import userModel
from threading import Timer

app = Flask(__name__)
app.secret_key="MadeByViresh"
port = int(os.getenv('VCAP_APP_PORT', 8080))

du = {}     # This is a dictionary of users

def getOtherPlayer(name):
    for x in du:
        if(x!=name):
            return x
    return None

def incrementIncome():
    for x in du:
        du[x].incomeInit = du[x].incomeInit * 1.1
    Timer(180, incrementIncome).start()

def incomeChange():
    print("Incremented.")
    for x in du:
        du[x].balance = du[x].balance + du[x].incomeInit
    Timer(15, incomeChange).start()

@app.route('/')
def home():
    return render_template('index.html',amnt=0)

@app.route('/numUsers')
def numU():
    return str(len(du))

@app.route('/getOtherPlayer/<Name>')
def otherPl(Name):
    y = getOtherPlayer(Name)
    if(y!=None):
        return jsonify(other=y,balance=du[y].balance)
    return jsonify(error="No other User")

@app.route('/<Name>')
def omg(Name):
    return render_template('index.html',amnt=du[Name].balance)

@app.route('/endpointS')
def hello():
    return jsonify(resp="Hello World")

@app.route('/createUser/<Name>')
def makeUser(Name):
    u = userModel(1200000,Name)
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

@app.route('/getIncome/<Name>')
def retInc(Name):
    return str(du[Name].income)

@app.route('/getEvents/<Name>')
def retOut(Name):
    return jsonify(du[Name].output)

@app.route('/addEvent/<Name>/<EName>')
def addOut(Name,EName):
    du[Name].addEvent(str(EName))
    return jsonify(status="done")

@app.route('/getWinner/<Name>')
def checkWinner(Name):
    winner = None
    for x in du:
        if(winner==None):
            winner = x
        elif du[winner].balance < du[x].balance :
            winner = x
    return jsonify(winner=x)


if __name__ == '__main__':
    Timer(180.0,incrementIncome).start()
    Timer(15.0,incomeChange).start()
    app.run(host='0.0.0.0',port=port)

