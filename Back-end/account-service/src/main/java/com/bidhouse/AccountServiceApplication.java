package com.bidhouse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

import com.bidhouse.listener.CascadeSaveMongoEventListener;

@SpringBootApplication
@EnableEurekaClient
@EnableResourceServer
public class AccountServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(AccountServiceApplication.class, args);
	}
	
	@Bean
	public CascadeSaveMongoEventListener cascadeSaveMongoEventListener() {
	    return new CascadeSaveMongoEventListener();
	}
}
