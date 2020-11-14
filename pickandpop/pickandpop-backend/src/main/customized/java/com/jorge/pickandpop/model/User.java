package com.jorge.pickandpop.model;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
/**
 * The Class User.
 */

@Entity
@Table(name = "usuario")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class User extends UserGenerated  implements Serializable{

	/** The Constant serialVersionUID. */

	private static final long serialVersionUID = 1L;
	
	public void addRol(Rol rol) {
        getRoles().add(rol);
        rol.getUsuarios().add(this);
    }
 
    public void removeRol(Rol rol) {
        getRoles().remove(rol);
        rol.getUsuarios().remove(this);
    }    	
}