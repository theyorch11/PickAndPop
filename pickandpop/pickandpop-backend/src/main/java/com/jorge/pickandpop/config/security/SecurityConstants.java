package com.jorge.pickandpop.config.security;

import javax.crypto.SecretKey;

import io.jsonwebtoken.impl.crypto.MacProvider;

/**
 * The Class SecurityConstants.
 */
public class SecurityConstants {

	/** The Constant SECRET. */
	public static final SecretKey SECRET = MacProvider.generateKey();

	/** The Constant EXPIRATION_TIME. */
	public static final long EXPIRATION_TIME = 3600000; // 30 minutes

	/** The Constant TOKEN_PREFIX. */
	public static final String TOKEN_PREFIX = "Bearer ";

	/** The Constant HEADER_STRING. */
	public static final String HEADER_STRING = "Authorization";

	/** The Constant SIGN_UP_URL. */
	public static final String SIGN_UP_URL = "/jwt/sign-up";

	/** The Constant AUTHENTICATION_URL. */
	public static final String AUTHENTICATION_URL = "/jwt/authenticate";
	
	/** The Constant TOTAL_ACCESS_HTTP. */
	public static final String TOTAL_ACCESS_HTTP="all_http";
	
	/** The Constant TOTAL_ACCESS_HTTPS. */
	public static final String TOTAL_ACCESS_HTTPS="all_https";

	/** The Constant HTTP. */
	public static final String HTTP = "http";
	
	/** The Constant HTTPS. */
	public static final String HTTPS = "https";
	/**
	 * Instantiates a new security constants.
	 */
	private SecurityConstants() {

	}
}
