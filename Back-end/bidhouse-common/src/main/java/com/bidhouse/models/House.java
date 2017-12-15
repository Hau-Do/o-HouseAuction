package com.bidhouse.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class House {
	private String name;
	private String username;
	private Account account;
	
	public House(String name, String username) {
		this.name = name;
		this.username = username;
	}
}
