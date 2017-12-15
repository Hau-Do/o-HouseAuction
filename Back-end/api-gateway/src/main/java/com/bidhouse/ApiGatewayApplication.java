package com.bidhouse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
//@EnableOAuth2Sso
public class ApiGatewayApplication {
	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}
	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.logout().and().antMatcher("/**").authorizeRequests()
//		.antMatchers("/login", "/auth/**").permitAll()
//		.anyRequest().authenticated().and().csrf().disable();
//	}
}
