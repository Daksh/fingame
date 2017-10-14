#!/usr/bin/env python

class userModel:
	interestRate = 6
	def __init__(self,initBalance,name):
		self.balance = initBalance
		self.name = name

	def withdraw(self, amt):
		if(self.balance - amt >= 0 ):
			self.balance -= amt
		return self.balance

	def deposit(self, amt):
		self.balance += amt
		return self.balance
