package com.bidhouse.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.bidhouse.models.User;

public interface UserRepository extends PagingAndSortingRepository<User, String> {

}
