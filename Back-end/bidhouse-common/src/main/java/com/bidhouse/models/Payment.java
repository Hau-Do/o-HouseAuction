package com.bidhouse.models;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "payments")
public class Payment {
	@Id
	private ObjectId id;
	@DBRef(db = "users")
	private User userId;
	@DBRef(db = "houses")
	private House houseId;
	private Date payTime;
}
