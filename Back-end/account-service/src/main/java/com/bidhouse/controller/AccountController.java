package com.bidhouse.controller;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bidhouse.models.Account;
import com.bidhouse.repository.AccountRepository;

import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("account")
public class AccountController {
	@Autowired
	private AccountRepository accountRepository;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Page<Account>> accounts(
			@ApiParam(name = "page", defaultValue = "0", value = "Current page") @RequestParam(value = "page", defaultValue = "0") int page,
			@ApiParam(name = "size", defaultValue = "10", value = "Number of items per page") @RequestParam(value = "size", defaultValue = "10") int size) {
		log.debug("Get accounts page: {} - size: {}", page, size);
		Page<Account> result = accountRepository.findAll(new PageRequest(page, size));
		if (result.getContent().size() > 0) {
			return new ResponseEntity<Page<Account>>(result, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
		}
	}

	@RequestMapping(value = "/{accountId}", method = RequestMethod.GET)
	public ResponseEntity<Account> account(@PathVariable("accountId") ObjectId accountId) {
		Account account = accountRepository.findOne(accountId);
		if (account != null) {
			return new ResponseEntity<>(account, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(method = { RequestMethod.POST, RequestMethod.PUT })
	public ResponseEntity<Void> account(@RequestBody Account account) {
		if (account.getId() == null) {
			// Add action
			// Check user-name exist
			Account exAccount = accountRepository.findByUsername(account.getUsername());
			if (exAccount == null) {
				accountRepository.save(account);
			} else {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
		} else {
			// Update action
			Account exAccount = accountRepository.findOne(account.getId());
			if (exAccount != null) {
				accountRepository.save(account);
			} else {
				// User does not exist
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}

		// Action successful
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
