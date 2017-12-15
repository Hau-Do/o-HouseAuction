package com.bidhouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bidhouse.models.House;
import com.bidhouse.services.HouseService;

@RestController
public class HouseController {
	@Autowired
	private HouseService houseService;
	
	@GetMapping("/house/{name}")
	public ResponseEntity<House> house(@PathVariable("name") String name) {
		House house = houseService.findByName(name);
		if(house != null) {
			return new ResponseEntity<>(house, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	
	@GetMapping("/")
	public String index() {
		return "This is house service default page";
	}
}
