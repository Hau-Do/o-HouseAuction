package com.bidhouse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.bidhouse.listener.CascadeSaveMongoEventListener;

@SpringBootApplication
@EnableDiscoveryClient
public class AccountServiceApplication {
//	discovery-service
//	configuration-service
//	api-gateway
//	house-service
//	account-service

	public static void main(String[] args) {
		SpringApplication.run(AccountServiceApplication.class, args);
	}
	
	@Bean
	public CascadeSaveMongoEventListener cascadeSaveMongoEventListener() {
	    return new CascadeSaveMongoEventListener();
	}
}
