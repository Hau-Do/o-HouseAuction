package com.bidhouse.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bidhouse.models.Account;
import com.bidhouse.models.BidHouseUserDetails;
import com.bidhouse.repository.AccountRepository;

import lombok.extern.slf4j.Slf4j;

@Service("userDetailsService")
@Slf4j
public class BidHouseUserDetailsService implements UserDetailsService {
	@Autowired
	private AccountRepository accountRepository;

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		log.debug("Authenticating {}", username);
		Account account = accountRepository.findByUsername(username);
		if (account == null) {
			throw new UsernameNotFoundException("User not found");
		}
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
		account.getRoles().forEach(role -> {
			grantedAuthorities.add(new SimpleGrantedAuthority(role));
		});
		return new BidHouseUserDetails(account.getUsername(), account.getPassword(), grantedAuthorities);
	}

}
