package com.jorge.pickandpop.model;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
/**
 * The Class Docfile.
 */

@Entity
@Table(name = "docfile")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Docfile extends DocfileGenerated  implements Serializable{

	/** The Constant serialVersionUID. */

	private static final long serialVersionUID = 1L;
	
}