package com.jorge.pickandpop.exception;

public class InizializationException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InizializationException(String message) {
		super(message);
	}

	public InizializationException(String message, Throwable t) {
		super(message, t);
	}

	public InizializationException(Throwable t) {
		super(t);
	}

}
