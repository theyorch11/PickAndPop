package com.jorge.pickandpop.service;

import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.jorge.pickandpop.config.security.SecurityConstants;

@Service
public class JnumSecurityService {

	public boolean hasPermission(String permission) {
		String entrole = "";
		String authorities = SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream()
				.map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
		if (authorities.contains(SecurityConstants.TOTAL_ACCESS_HTTP)
				|| authorities.contains(SecurityConstants.TOTAL_ACCESS_HTTPS)) {
			return true;
		}
		if (permission.startsWith("all_mod")) {
			entrole = permission.substring("all_mod".length() + 1);
			return authorities.contains(entrole) || authorities.contains("all_ent_" + entrole)
					|| authorities.contains("add_ent_" + entrole) || authorities.contains("edit_ent_" + entrole)
					|| authorities.contains("delete_ent_" + entrole) || authorities.contains("view_ent_" + entrole);
		}
		if (permission.startsWith("all_ent")) {
			String entdetallerole = permission.substring("all_ent_".length());
			String[] splitRole = permission.split("_");
			String module = splitRole[2];
			String allMod = "all_mod_" + module;
			return authorities.contains(entdetallerole) || authorities.contains(allMod) || authorities.contains("add_ent_" + entdetallerole) || authorities.contains("edit_ent_" + entdetallerole)
					|| authorities.contains("delete_ent_" + entdetallerole) || authorities.contains("view_ent_" + entdetallerole);
		}
		if (permission.startsWith("add_") || permission.startsWith("edit_") || permission.startsWith("add_")
				|| permission.startsWith("delete_") || permission.startsWith("view_")) {
			String[] splitRole = permission.split("_");
			String module = splitRole[2];
			String entidad = splitRole[3];
			String allMod = "all_mod_" + module;
			String allEnt = "all_ent_" + module + "_" + entidad;
			return authorities.contains(permission) || authorities.contains(allMod) || authorities.contains(allEnt);
		}
		if (permission.startsWith("op_") && !(permission.equalsIgnoreCase("op_change_password")
				|| permission.equalsIgnoreCase("op_change_language"))) {
			String[] splitRole = permission.split("_");
			String module = splitRole[1];
			String entidad = splitRole[2];
			String allMod = "all_mod_" + module;
			String allEnt = "all_ent_" + module + "_" + entidad;
			return authorities.contains(permission) || authorities.contains(allMod) || authorities.contains(allEnt);
		}

		return authorities.contains(permission);
	}

}