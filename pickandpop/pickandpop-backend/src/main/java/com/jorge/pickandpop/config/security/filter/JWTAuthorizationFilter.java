package com.jorge.pickandpop.config.security.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.jorge.pickandpop.model.JnumUser;
import com.jorge.pickandpop.service.JnumUserDetailsService;

/**
 * The Class JWTAuthorizationFilter.
 */
@Component
public class JWTAuthorizationFilter extends OncePerRequestFilter {
	
	/** The Constant logger. */
	protected static final Logger log = LoggerFactory.getLogger(JWTAuthorizationFilter.class);
	@Autowired
	JwtTokenProvider tokenProvider;
	
	@Autowired
	JnumUserDetailsService userDetailsService;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		try {
			String token = getJwtFromRequest(request);

			if (StringUtils.hasText(token) && tokenProvider.validateToken(token)) {
				String userId = tokenProvider.getUserIdFromJWT(token);

				JnumUser jnumuser = (JnumUser) userDetailsService.loadUserById(userId);
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(jnumuser,
						jnumuser.getUser().getRoles(), jnumuser.getAuthorities());
				authentication.setDetails(new WebAuthenticationDetails(request));

				SecurityContextHolder.getContext().setAuthentication(authentication);

			}
		} catch (Exception ex) {
			log.info("No se ha podido establecer la autenticación de usuario en el contexto de seguridad");
		}

		filterChain.doFilter(request, response);

	}

	private String getJwtFromRequest(HttpServletRequest request) {
		String bearerToken = request.getHeader(JwtTokenProvider.TOKEN_HEADER);
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(JwtTokenProvider.TOKEN_PREFIX)) {
			return bearerToken.substring(JwtTokenProvider.TOKEN_PREFIX.length(), bearerToken.length());
		}
		return null;
	}	
	


}
