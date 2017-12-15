package com.bidhouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bidhouse.models.Account;
import com.bidhouse.services.AccountService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class AccountController {
	@Autowired
	private AccountService accountService;
	
	@GetMapping("/")
	public String index() {
		return "This is account service default page";
	}
	
	@RequestMapping(value = "/accounts", method = RequestMethod.GET)
	public String abc() {
		return "abc";
	}
	
	@RequestMapping(value = "/account/{username}", method = RequestMethod.GET)
	public ResponseEntity<Account> accounts(@PathVariable("username") String username) {
		log.debug("Get by username");
		Account account = accountService.findByUsername(username);
		if(account != null) {
			return new ResponseEntity<>(account, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT); 
		}
	}
}
