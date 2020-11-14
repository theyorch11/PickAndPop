package com.jorge.pickandpop.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.jorge.pickandpop.model.JnumUser;
import com.jorge.pickandpop.model.GrupoPermiso;
import com.jorge.pickandpop.model.Permiso;
import com.jorge.pickandpop.model.Rol;
import com.jorge.pickandpop.repository.UserRepository;

@Service
public class JnumUserDetailsServiceImpl implements JnumUserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) {
		com.jorge.pickandpop.model.User user = userRepository.findByUsernameEquals(username);
		return getAppUser(username, user);			
	}
	
	@Override
	public UserDetails loadUserById(String userId) {
		com.jorge.pickandpop.model.User user = userRepository.findById(userId).orElse(null);
		return getAppUser(userId, user);
	}

	
	private JnumUser getAppUser(String identified, com.jorge.pickandpop.model.User user) {
		if (user == null) {
			throw new UsernameNotFoundException(identified);
		}
		
		JnumUser appuser = new JnumUser(user.getUsername(), user.getKey(), user.getActivo(), true, true, true,
				getAuthorities(user.getRoles()));
		appuser.setUser(user);
		return appuser;
	}
	

	private Collection<? extends GrantedAuthority> getAuthorities(Collection<Rol> roles) {
		return getGrantedAuthorities(getGrupoPermiso(roles));
	}

	private List<String> getGrupoPermiso(Collection<Rol> roles) {
		List<GrupoPermiso> collection = new ArrayList<>();
		for (Rol rol : roles) {
			collection.addAll(rol.getGruposPermiso());

		}
		return getPermisos(collection);
	}

	private List<String> getPermisos(List<GrupoPermiso> gruposPermisos) {
		List<String> permisos = new ArrayList<>();
		List<Permiso> collection = new ArrayList<>();
		for (GrupoPermiso grupoPermiso : gruposPermisos) {
			collection.addAll(grupoPermiso.getPermisos());
		}
		for (Permiso permiso : collection) {
			permisos.add(permiso.getNombre());
		}
		return permisos;
	}

	private List<GrantedAuthority> getGrantedAuthorities(List<String> gruposPermiso) {
		List<GrantedAuthority> authorities = new ArrayList<>();
		for (String grupoPermiso : gruposPermiso) {
			authorities.add(new SimpleGrantedAuthority(grupoPermiso));
		}
		return authorities;
	}

}
