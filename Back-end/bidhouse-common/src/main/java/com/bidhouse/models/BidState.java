package com.bidhouse.models;

import java.util.Date;

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
@Document(collection = "bid_states")
public class BidState {
	@Id
	private String id;
	private Date bidTime;
	@DBRef(db = "users")
	@CascadeSave
	private ObjectId user;
	private double biddingPrice;
}
