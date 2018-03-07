package com.bidhouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bidhouse.models.House;
import com.bidhouse.repository.HouseRepository;

import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin(origins = "*")
@RequestMapping("house")
public class HouseController {
	@Autowired
	private HouseRepository houseRepository;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Page<House>> houses(
			@ApiParam(name = "page", defaultValue = "0", value = "Current page") @RequestParam(value = "page", defaultValue = "0") int page,
			@ApiParam(name = "size", defaultValue = "10", value = "Number of items per page") @RequestParam(value = "size", defaultValue = "10") int size) {
		log.debug("Get accounts page: {} - size: {}", page, size);
		Page<House> result = houseRepository.findAll(new PageRequest(page, size));
		if (result.getContent().size() > 0) {
			return new ResponseEntity<Page<House>>(result, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
		}
	}

	@RequestMapping(value = "/{houseId}", method = RequestMethod.GET)
	public ResponseEntity<House> house(@PathVariable("houseId") String houseId) {
		House account = houseRepository.findOne(houseId);
		if (account != null) {
			return new ResponseEntity<>(account, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@RequestMapping(method = { RequestMethod.POST, RequestMethod.PUT })
	public ResponseEntity<Void> house(@RequestBody House house) {
		if (house.getId() == null) {
			// Add action
			houseRepository.save(house);
		} else {
			// Update action
			House exAccount = houseRepository.findOne(house.getId());
			if (exAccount != null) {
				houseRepository.save(house);
			} else {
				// User does not exist
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}

		// Action successful
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
