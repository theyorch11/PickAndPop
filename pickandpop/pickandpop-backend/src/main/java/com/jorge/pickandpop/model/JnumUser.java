package com.jorge.pickandpop.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class JnumUser extends org.springframework.security.core.userdetails.User{
	
private static final long serialVersionUID = 1L;
	
	private com.jorge.pickandpop.model.User user;

	public JnumUser(String username, String password, boolean enabled, boolean accountNonExpired,
			boolean credentialsNonExpired, boolean accountNonLocked,
			Collection<? extends GrantedAuthority> authorities) {
		super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
	}

	public com.jorge.pickandpop.model.User getUser() {
		return user;
	}

	public void setUser(com.jorge.pickandpop.model.User user) {
		this.user = user;
	}



}
