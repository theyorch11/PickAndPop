package com.jorge.pickandpop.exception;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.JwtException;

/**
 * The Class ExceptionHandlerFilter.
 */
public class ExceptionHandlerFilter extends OncePerRequestFilter {

	/** The message source. */
	@Autowired
	private MessageSource messageSource;

	/**
	 * Instantiates a new exception handler filter.
	 *
	 * @param messageSource
	 *            the message source
	 */
	public ExceptionHandlerFilter(MessageSource messageSource) {
		this.messageSource = messageSource;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.springframework.web.filter.OncePerRequestFilter#doFilterInternal(javax.
	 * servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse,
	 * javax.servlet.FilterChain)
	 */
	@Override
	public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {

			filterChain.doFilter(request, response);

		} catch (JwtException e) {
			setErrorResponse(HttpStatus.FORBIDDEN, messageSource.getMessage("error.sessionexpiredexception",
					new String[] { e.getMessage() }, LocaleContextHolder.getLocale()), response, e);
		} catch (RuntimeException e) {
			setErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, messageSource.getMessage("error.exception",
					new String[] { e.getMessage() }, LocaleContextHolder.getLocale()), response, e);
		}
	}

	/**
	 * Sets the error response.
	 *
	 * @param status
	 *            the status
	 * @param message
	 *            the message
	 * @param response
	 *            the response
	 * @param ex
	 *            the ex
	 */
	public void setErrorResponse(HttpStatus status, String message, HttpServletResponse response, Throwable ex) {
		logger.error(ex.getMessage());
		response.setStatus(status.value());
		response.setContentType("application/json");
		ApiError apiError = new ApiError(status);
		apiError.setMessage(message);
		try {
			String json = apiError.convertToJson();
			response.getWriter().write(json);
		} catch (IOException e) {
			logger.error(e.getMessage());
		}
	}

}