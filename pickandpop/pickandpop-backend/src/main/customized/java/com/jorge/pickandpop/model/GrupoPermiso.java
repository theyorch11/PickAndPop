package com.jorge.pickandpop.model;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
/**
 * The Class GrupoPermiso.
 */

@Entity
@Table(name = "grupo_permiso")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class GrupoPermiso extends GrupoPermisoGenerated  implements Serializable{

	/** The Constant serialVersionUID. */

	private static final long serialVersionUID = 1L;
	
	public void addPermiso(Permiso permiso) {
        getPermisos().add(permiso);
        permiso.getGruposPermiso().add(this);
    }
 
    public void removePermiso(Permiso permiso) {
        getPermisos().remove(permiso);
        permiso.getGruposPermiso().remove(this);
    }    	
	public void addRol(Rol rol) {
        getRoles().add(rol);
        rol.getGruposPermiso().add(this);
    }
 
    public void removeRol(Rol rol) {
        getRoles().remove(rol);
        rol.getGruposPermiso().remove(this);
    }    	
}