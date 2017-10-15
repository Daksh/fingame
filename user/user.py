#!/usr/bin/env python

class userModel:
	interestRate = 6
	incomeInit = 80000
	def __init__(self,initBalance,name):
		self.balance = initBalance
		self.name = name
		self.income = self.incomeInit
		self.output=[]

	def withdraw(self, amt):
		if(self.balance - amt >= 0 ):
			self.balance -= amt
		return self.balance

	def deposit(self, amt):
		self.balance += amt
		return self.balance

	def addEvent(self, stringX):
		self.output.append(stringX)