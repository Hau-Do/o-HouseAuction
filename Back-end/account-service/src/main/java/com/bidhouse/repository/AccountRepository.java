package com.bidhouse.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.bidhouse.models.Account;

public interface AccountRepository extends PagingAndSortingRepository<Account, String> {
	Account findByUsername(String username);
}
