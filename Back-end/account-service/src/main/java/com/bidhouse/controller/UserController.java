package com.bidhouse.controller;

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

import com.bidhouse.models.User;
import com.bidhouse.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("user")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Page<User>> users(@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "size", defaultValue = "10") int size) {
		log.debug("Get users page: {} - size: {}", page, size);
		Page<User> result = userRepository.findAll(new PageRequest(page, size));
		if (result.getContent().size() > 0) {
			return new ResponseEntity<Page<User>>(result, HttpStatus.OK);
		}
		return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
	}

	@RequestMapping(value = "/{userId}", method = RequestMethod.GET)
	public ResponseEntity<User> user(@PathVariable("userId") String userId) {
		User user = userRepository.findOne(userId);
		if(user != null) {
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(method = {RequestMethod.POST, RequestMethod.PUT})
	public ResponseEntity<Void> user(@RequestBody User user) {
		if(user.getId() == null) {
			// Add action
			log.debug("Add new a user");
			userRepository.save(user);
		} else {
			// Update action
			// Check user-name exist
			User exUser = userRepository.findOne(user.getId());
			if(exUser != null) {
				userRepository.save(user);
			} else {
				// User does not exist
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
		
		// Action successful
		log.debug("Action successful");
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
