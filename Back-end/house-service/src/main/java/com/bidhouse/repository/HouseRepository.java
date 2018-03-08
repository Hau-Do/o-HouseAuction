package com.bidhouse.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.bidhouse.models.House;

public interface HouseRepository extends PagingAndSortingRepository<House, String> {

}
