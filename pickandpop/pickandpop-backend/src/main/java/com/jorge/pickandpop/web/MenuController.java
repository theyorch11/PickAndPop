package com.jorge.pickandpop.web;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jorge.pickandpop.model.User;
import com.jorge.pickandpop.service.UserService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/menu")
public class MenuController {

	protected static final Logger logger = LoggerFactory.getLogger(MenuController.class);
	
	/** The user service. */
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ApiOperation(value = "Sign Up an user")
	public ResponseEntity<User> signUp(@RequestBody @Valid User user) {
		User userToRetrive = userService.getUser(user.getId());
		if(userToRetrive==null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(userToRetrive, HttpStatus.OK);
	}
}
