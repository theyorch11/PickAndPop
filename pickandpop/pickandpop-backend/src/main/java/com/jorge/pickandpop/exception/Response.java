package com.jorge.pickandpop.exception;

import org.springframework.http.HttpStatus;

/**
 * The Class Response.
 *
 * @param <T>
 *            the generic type
 */
public class Response {

	/** The status. */
	private HttpStatus status;

	/** The message. */
	private String message;

	/**
	 * Instantiates a new response.
	 *
	 * @param status
	 *            the status
	 * @param message
	 *            the message
	 * @param data
	 *            the data
	 */
	public Response(HttpStatus status, String message) {
		this.status = status;
		this.message = message;
	}

	/**
	 * Gets the status.
	 *
	 * @return the status
	 */
	public HttpStatus getStatus() {
		return status;
	}

	/**
	 * Sets the status.
	 *
	 * @param status
	 *            the new status
	 */
	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	/**
	 * Gets the message.
	 *
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * Sets the message.
	 *
	 * @param message
	 *            the new message
	 */
	public void setMessage(String message) {
		this.message = message;
	}
}
