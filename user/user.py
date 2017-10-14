#!/usr/bin/env python

class userModel:
	def __init__(self,initBalance):
		self.balance = initBalance

	def withdraw(self, amt):
		if(self.balance - amt >= 0 ):
			self.balance -= amt
		return self.balance

	def deposit(self, amt):
		self.balance += amt
		return self.balance
