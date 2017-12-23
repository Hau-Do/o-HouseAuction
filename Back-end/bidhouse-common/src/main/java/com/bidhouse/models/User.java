package com.bidhouse.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.bidhouse.annotation.CascadeSave;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
	@Id
	private ObjectId id;
	private String fullName;
	private String address;
	private String walletAddress;
	@DBRef(db = "accounts")
	@CascadeSave
	private Account account;
}
