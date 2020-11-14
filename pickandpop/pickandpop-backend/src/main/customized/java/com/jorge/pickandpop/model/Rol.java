package com.jorge.pickandpop.model;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
/**
 * The Class Rol.
 */

@Entity
@Table(name = "rol")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Rol extends RolGenerated  implements Serializable{

	/** The Constant serialVersionUID. */

	private static final long serialVersionUID = 1L;
	
	public void addUser(User user) {
        getUsuarios().add(user);
        user.getRoles().add(this);
    }
 
    public void removeUser(User user) {
        getUsuarios().remove(user);
        user.getRoles().remove(this);
    }    	
	public void addGrupoPermiso(GrupoPermiso grupoPermiso) {
        getGruposPermiso().add(grupoPermiso);
        grupoPermiso.getRoles().add(this);
    }
 
    public void removeGrupoPermiso(GrupoPermiso grupoPermiso) {
        getGruposPermiso().remove(grupoPermiso);
        grupoPermiso.getRoles().remove(this);
    }    	
}