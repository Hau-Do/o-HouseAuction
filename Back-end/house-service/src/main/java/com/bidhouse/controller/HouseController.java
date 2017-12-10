package com.bidhouse.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HouseController {
	@GetMapping("/")
	public String index() {
		return "House controller";
	}
}
