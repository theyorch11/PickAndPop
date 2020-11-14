package com.jorge.pickandpop.web;

import java.util.ArrayList;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jorge.pickandpop.config.security.SecurityConstants;
import com.jorge.pickandpop.config.security.filter.JwtTokenProvider;
import com.jorge.pickandpop.service.UserService;

import io.swagger.annotations.ApiOperation;

/**
 * The Class UserAuthenticationController.
 */
@RestController
@RequestMapping("/jwt")
public class UserAuthenticationController {

	/** The Constant logger. */
	protected static final Logger logger = LoggerFactory.getLogger(UserAuthenticationController.class);

	/** The user service. */
	@Autowired
	UserService userService;

	/** The authentication manager. */
	@Autowired
	AuthenticationManager authenticationManager;

	/** The message source. */
	@Autowired
	MessageSource messageSource;
	
	/** The b crypt password encoder. */
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	/** The token provider. */
	@Autowired
	JwtTokenProvider tokenProvider;

	/**
	 * Sign up.
	 *
	 * @param user
	 *            the user
	 * @param request
	 *            the request
	 * @return the response entity
	 */
	@PostMapping(value = "/sign-up", produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Sign Up an user")
	public ResponseEntity<Object> signUp(@RequestBody @Valid com.jorge.pickandpop.model.User user, HttpServletRequest request) {
		if (userService.findByUsernameEquals(user.getUsername()) != null) {
			return new ResponseEntity<>(messageSource.getMessage("app.username.exists", null, "", request.getLocale()),
					HttpStatus.FOUND);
		}
		if (userService.findByEmailEquals(user.getEmail()) != null) {
			return new ResponseEntity<>(messageSource.getMessage("app.email.exists", null, "", request.getLocale()),
					HttpStatus.FOUND);
		}
		userService.saveUser(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

	/**
	 * Authenticate.
	 *
	 * @param user
	 *            the user
	 * @param response
	 *            the response
	 * @return the response entity
	 */
	@PostMapping(value = "/authenticate", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Authenticate an user")
	public ResponseEntity<Object> authenticate(@RequestBody com.jorge.pickandpop.model.User user, HttpServletResponse response) {
		Token token = new Token();
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				user.getUsername(), user.getKey(), new ArrayList<>());
		Authentication authentication = authenticationManager.authenticate(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String authorities = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority)
				.collect(Collectors.joining(","));
		if (authorities == null || authorities.isEmpty()) {
			throw new AccessDeniedException("");
		}		
		String jwtToken = tokenProvider.generateToken(authentication);
		response.addHeader(SecurityConstants.HEADER_STRING, SecurityConstants.TOKEN_PREFIX + jwtToken);
		token.setJwtToken(jwtToken);
		token.setAuthorities(authorities);
		return ResponseEntity.ok(token);

	}

	
	/**
	 * Changepassword.
	 *
	 * @param key the key
	 * @param response the response
	 * @return the response entity
	 */
	@PostMapping(value = "/changepassword", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Change de password of an user")
	public ResponseEntity<String> changepassword(@RequestBody String key, HttpServletResponse response) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();	
		org.springframework.security.core.userdetails.User userDetails = (org.springframework.security.core.userdetails.User) authentication.getPrincipal();
		com.jorge.pickandpop.model.User user = null;
		if ((user=userService.findByUsernameEquals(userDetails.getUsername())) != null) {
			user.setKey(key);
			userService.updateUser(user);
		}		
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	/**
	 * Checks for role.
	 *
	 * @param role            the role
	 * @param request the request
	 * @return the response entity
	 */
	@PostMapping(value = "/hasRole", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Authenticate an user")
	public ResponseEntity<Boolean> hasRole(@RequestBody String role, HttpServletRequest request) {
		String entrole="";
		String authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
				.map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
		if (authorities.contains(SecurityConstants.TOTAL_ACCESS_HTTP)
				&& request.getScheme().equals(SecurityConstants.HTTP)) {
			return ResponseEntity.ok(true);
		}
		if (authorities.contains(SecurityConstants.TOTAL_ACCESS_HTTP)
				&& request.getScheme().equals(SecurityConstants.HTTPS)) {
			return ResponseEntity.ok(true);
		}
		if(role.startsWith("all_mod")) {
			entrole=role.substring("all_mod".length()+1);
			return ResponseEntity.ok(authorities.contains(entrole));
		}		
		if(role.startsWith("all_ent")) {
			String entdetallerole = role.substring("all_ent_".length());
			return ResponseEntity.ok(authorities.contains(entdetallerole));
		}	
		if(role.startsWith("add_")||role.startsWith("edit_")||role.startsWith("add_")||role.startsWith("delete_")||role.startsWith("view_")) {
			String[] splitRole = role.split("_");
			String module = splitRole[2];
			String entidad = splitRole[3];			
			String allMod = "all_mod_"+module;
			String allEnt = "all_ent_"+module+"_"+entidad;
			return ResponseEntity.ok(authorities.contains(role)||authorities.contains(allMod)||authorities.contains(allEnt));
		}
		if(role.startsWith("op_")&& !(role.equalsIgnoreCase("op_change_password")||role.equalsIgnoreCase("op_change_language"))) {
			String[] splitRole = role.split("_");
			String module = splitRole[1];
			String entidad = splitRole[2];			
			String allMod = "all_mod_"+module;
			String allEnt = "all_ent_"+module+"_"+entidad;
			return ResponseEntity.ok(authorities.contains(role)||authorities.contains(allMod)||authorities.contains(allEnt));
		}
		
		return ResponseEntity.ok(authorities.contains(role));
	}
	

}
