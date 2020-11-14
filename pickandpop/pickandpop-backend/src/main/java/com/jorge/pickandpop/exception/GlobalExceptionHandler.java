package com.jorge.pickandpop.exception;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.StaleObjectStateException;
import org.hibernate.exception.ConstraintViolationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.transaction.UnexpectedRollbackException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import io.jsonwebtoken.SignatureException;

/**
 * The Class GlobalExceptionController.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

	/** The logger. */
	private final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

	/** The message source. */
	@Autowired
	MessageSource messageSource;

	/**
	 * Handle sql exception.
	 *
	 * @param request
	 *            the request
	 * @param response
	 *            the response
	 * @param ex
	 *            the ex
	 * @return the response
	 */
	@ExceptionHandler(StaleObjectStateException.class)
	@ResponseStatus(HttpStatus.CONFLICT)
	@ResponseBody
	public Response handleStaleObjectStateException(HttpServletRequest request, HttpServletResponse response,
			Exception ex) {
		logger.error(ex.getMessage());
		return new Response(HttpStatus.CONFLICT, messageSource.getMessage("error.staleobjectstateexception",
				new String[] { ex.getMessage() }, LocaleContextHolder.getLocale()));
	}

	/**
	 * Handle signature exception.
	 *
	 * @param request
	 *            the request
	 * @param ex
	 *            the ex
	 * @return the response
	 */
	@ExceptionHandler(SignatureException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public Response handleSignatureException(HttpServletRequest request, Exception ex) {
		logger.error(ex.getMessage());
		return new Response(HttpStatus.UNAUTHORIZED, messageSource.getMessage("error.signatureexcepcion",
				new String[] { ex.getMessage() }, LocaleContextHolder.getLocale()));
	}

	/**
	 * Handle constraint violation exception.
	 *
	 * @param request
	 *            the request
	 * @param ex
	 *            the ex
	 * @return the response
	 */
	@ExceptionHandler({ ConstraintViolationException.class, UnexpectedRollbackException.class })
	@ResponseStatus(HttpStatus.CONFLICT)
	@ResponseBody
	public Response handleConstraintViolationException(HttpServletRequest request, Exception ex) {
		logger.error(ex.getMessage());
		return new Response(HttpStatus.CONFLICT, messageSource.getMessage("error.constraintviolationexception",
				new String[] { ex.getMessage() }, LocaleContextHolder.getLocale()));
	}

	/**
	 * Handle authentication exception.
	 *
	 * @param request
	 *            the request
	 * @param ex
	 *            the ex
	 * @return the response
	 */
	@ExceptionHandler(AuthenticationException.class)
	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ResponseBody
	public Response handleAuthenticationException(HttpServletRequest request, Exception ex) {
		logger.error(ex.getMessage());
		return new Response(HttpStatus.UNAUTHORIZED, messageSource.getMessage("error.authenticationexception",
				new String[] { ex.getMessage() }, LocaleContextHolder.getLocale()));
	}

	@ExceptionHandler(UnsupportedOperationException.class)
	@ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
	@ResponseBody
	public Response handleUnsupportedOperationException(HttpServletRequest request, Exception ex) {
		logger.error(ex.getMessage());
		return new Response(HttpStatus.NOT_IMPLEMENTED, messageSource.getMessage("error.unsupportedoperationexception",
				new String[] { ex.getMessage() }, LocaleContextHolder.getLocale()));
	}

	/**
	 * Any exception.
	 *
	 * @param request
	 *            the request
	 * @param ex
	 *            the ex
	 * @return the response
	 */
	@ExceptionHandler(Exception.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ResponseBody
	public Response anyException(HttpServletRequest request, Exception ex) {
		logger.error(ex.getMessage());
		return new Response(HttpStatus.INTERNAL_SERVER_ERROR, messageSource.getMessage("error.exception",
				new String[] { ex.getMessage() }, LocaleContextHolder.getLocale()));
	}

}
