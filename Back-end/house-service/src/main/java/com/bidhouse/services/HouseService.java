package com.bidhouse.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bidhouse.models.Account;
import com.bidhouse.models.House;

@Service
public class HouseService {
	@Autowired
	private AccountService accountService;
	
	private List<House> houses;
	
	public HouseService() {
		this.houses = new ArrayList<>();
		this.init();
	}
	
	private void init() {
		this.houses.add(new House("baotoan", "baotoan"));
		this.houses.add(new House("thevinh", "thevinh"));
		this.houses.add(new House("haudo", "haudo"));
	}
	
	public House findByName(String name) {
		House house = this.houses.stream().filter(h -> h.getName().equalsIgnoreCase(name)).findFirst().get();
		if(house != null) {
			Account account = accountService.findByUsername(house.getUsername());
			house.setAccount(account);
			return house;
		} else {
			return null;
		}
	}
}
