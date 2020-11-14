package com.jorge.pickandpop.config.security.filter;


import java.util.Date;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.jorge.pickandpop.config.security.SecurityConstants;
import com.jorge.pickandpop.model.JnumUser;
import com.jorge.pickandpop.model.Rol;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

/**
 * The Class JwtTokenProvider.
 */
@Component
public class JwtTokenProvider {

	/** The Constant log. */
	private static final Logger log = LoggerFactory.getLogger(JwtTokenProvider.class);

	/** The Constant TOKEN_HEADER. */
	public static final String TOKEN_HEADER = "Authorization";
	
	/** The Constant TOKEN_PREFIX. */
	public static final String TOKEN_PREFIX = "Bearer ";
	
	/** The Constant TOKEN_TYPE. */
	public static final String TOKEN_TYPE = "JWT";


	/** The jwt duracion token en segundos. */
	@Value("${jwt.token-expiration:86400}")
	private int jwtDuracionTokenEnSegundos;

	/**
	 * Generate token.
	 *
	 * @param authentication the authentication
	 * @return the string
	 */
	public String generateToken(Authentication authentication) {

		JnumUser jnumuser = (JnumUser) authentication.getPrincipal();

		Date tokenExpirationDate = new Date(System.currentTimeMillis() + (jwtDuracionTokenEnSegundos * 1000));

		return Jwts.builder().signWith(SignatureAlgorithm.HS512, SecurityConstants.SECRET)
				.setHeaderParam("type", TOKEN_TYPE).setSubject(jnumuser.getUser().getId()).setIssuedAt(new Date())
				.setExpiration(tokenExpirationDate)
				.claim("roles",
						jnumuser.getUser().getRoles().stream().map(Rol::getNombre).collect(Collectors.joining(", ")))
				.compact();

	}

	/**
	 * Gets the user id from JWT.
	 *
	 * @param token the token
	 * @return the user id from JWT
	 */
	public String getUserIdFromJWT(String token) {
		Claims claims = Jwts.parser().setSigningKey(SecurityConstants.SECRET).parseClaimsJws(token).getBody();
		return claims.getSubject();
	}

	/**
	 * Validate token.
	 *
	 * @param authToken the auth token
	 * @return true, if successful
	 */
	public boolean validateToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(SecurityConstants.SECRET).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException ex) {
			log.info("Error en la firma del token JWT: {}", ex.getMessage());
		} catch (MalformedJwtException ex) {
			log.info("Token malformado: {}", ex.getMessage());
		} catch (ExpiredJwtException ex) {
			log.info("El token ha expirado: {}", ex.getMessage());
		} catch (UnsupportedJwtException ex) {
			log.info("Token JWT no soportado: {}", ex.getMessage());
		} catch (IllegalArgumentException ex) {
			log.info("JWT claims vacío");
		}
		return false;

	}
}
