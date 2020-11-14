package com.jorge.pickandpop.model;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
/**
 * The Class Permiso.
 */

@Entity
@Table(name = "permiso")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Permiso extends PermisoGenerated  implements Serializable{

	/** The Constant serialVersionUID. */

	private static final long serialVersionUID = 1L;
	
	public void addGrupoPermiso(GrupoPermiso grupoPermiso) {
        getGruposPermiso().add(grupoPermiso);
        grupoPermiso.getPermisos().add(this);
    }
 
    public void removeGrupoPermiso(GrupoPermiso grupoPermiso) {
        getGruposPermiso().remove(grupoPermiso);
        grupoPermiso.getPermisos().remove(this);
    }    	
}