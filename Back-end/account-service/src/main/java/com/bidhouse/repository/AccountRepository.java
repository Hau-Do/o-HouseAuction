package com.bidhouse.repository;

import org.bson.types.ObjectId;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.bidhouse.models.Account;

public interface AccountRepository extends PagingAndSortingRepository<Account, ObjectId> {
	Account findByUsername(String username);
}
