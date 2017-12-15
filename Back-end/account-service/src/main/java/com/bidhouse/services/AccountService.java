package com.bidhouse.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.bidhouse.models.Account;

@Service
public class AccountService {
	private List<Account> accounts;
	
	public AccountService() {
		this.accounts = new ArrayList<>();
		this.init();
	}
	
	private void init() {
		this.accounts.add(new Account("baotoan", "1234"));
		this.accounts.add(new Account("thevinh", "1234"));
		this.accounts.add(new Account("haudo", "1234"));
	}
	
	public Account findByUsername(String username) {
		return accounts.stream().filter(acc -> acc.getUsername().equalsIgnoreCase(username)).findFirst().get();
	}
}
