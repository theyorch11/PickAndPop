package com.jorge.pickandpop.service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class JnumUtilService {
	
	@Autowired
	ModelMapper modelMapper;
	
	public <D, T> Page<D> mapEntityPageIntoDtoPage(Page<T> entities, Class<D> dtoClass) {
	    return entities.map(objectEntity -> modelMapper.map(objectEntity, dtoClass));
	} 
	
	public <D, T> List<D> mapEntityListIntoDtoList(final Collection<T> entities, Class<D> dtoClass) {
		return entities.stream().map(entity->modelMapper.map(entity, dtoClass)).collect(Collectors.toList());
	} 

}
