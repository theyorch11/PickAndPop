package com.jorge.pickandpop.exception;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

/**
 * The Class ApiError.
 */
public class ApiError {

    /** The status. */
    private HttpStatus status;
    
    /** The message. */
    private String message;

    /**
     * Instantiates a new api error.
     */
    private ApiError() {      
    }
    
    /**
     * Instantiates a new api error.
     *
     * @param status the status
     */
    public ApiError(HttpStatus status) {
        this();
        this.status = status;
    }

    /**
     * Instantiates a new api error.
     *
     * @param status the status
     * @param message the message
     */
    public ApiError(HttpStatus status, String message) {
        this();
        this.status = status;
        this.message = message;
    }

    /**
     * Convert to json.
     *
     * @return the string
     * @throws JsonProcessingException the json processing exception
     */
    public String convertToJson() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

        return mapper.writeValueAsString(this);
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
	 * @param status the new status
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
	 * @param message the new message
	 */
	public void setMessage(String message) {
		this.message = message;
	}
    
    
}