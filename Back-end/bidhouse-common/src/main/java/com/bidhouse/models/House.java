package com.bidhouse.models;

import java.util.Date;
import java.util.List;

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
@Document(collection = "houses")
public class House {
	@Id
	private String id;
	private String address;
	private String owner;
	private double area;
	private double startPrice;
	private double endPrice;
	private boolean sessionEnd;
	private Date createdDate;
	private Date endDate;
	@DBRef(db = "bid_states")
	@CascadeSave
	private List<BidState> bidStates;
	
}
