package com.jorge.pickandpop.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface JnumUserDetailsService extends UserDetailsService{
	public UserDetails loadUserById(String userId);
}
