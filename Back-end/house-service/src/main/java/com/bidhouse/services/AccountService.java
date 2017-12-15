package com.bidhouse.services;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bidhouse.models.Account;

@FeignClient(name = "account-service")
public interface AccountService {
	@RequestMapping(value = "/account/{username}", method = RequestMethod.GET)
	public Account findByUsername(@PathVariable("username") String username);
}
