package com.jorge.pickandpop.web;

/**
 * The Class Token.
 */
public class Token {

	/** The jwt token. */
	String jwtToken;

	/** The authorities. */
	String authorities;

	/**
	 * Gets the jwt token.
	 *
	 * @return the jwt token
	 */
	public String getJwtToken() {
		return jwtToken;
	}

	/**
	 * Sets the jwt token.
	 *
	 * @param jwtToken
	 *            the new jwt token
	 */
	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	/**
	 * Gets the authorities.
	 *
	 * @return the authorities
	 */
	public String getAuthorities() {
		return authorities;
	}

	/**
	 * Sets the authorities.
	 *
	 * @param authorities
	 *            the new authorities
	 */
	public void setAuthorities(String authorities) {
		this.authorities = authorities;
	}

}
