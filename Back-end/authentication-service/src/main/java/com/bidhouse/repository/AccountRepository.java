package com.bidhouse.repository;

import org.bson.types.ObjectId;
import org.springframework.data.repository.CrudRepository;

import com.bidhouse.models.Account;

public interface AccountRepository extends CrudRepository<Account, ObjectId> {
	Account findByUsername(String username);
}
