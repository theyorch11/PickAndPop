package com.jorge.pickandpop.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * The Class UserServiceImpl.
 */
@Service("userService")
@Transactional
public class UserServiceImpl extends UserGeneratedServiceImpl implements UserService{

}
