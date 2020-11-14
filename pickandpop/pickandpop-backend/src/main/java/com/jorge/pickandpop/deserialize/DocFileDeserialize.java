package com.jorge.pickandpop.deserialize;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.jorge.pickandpop.model.Docfile;

/**
 * The Class DocFileDeserialize.
 */
public class DocFileDeserialize extends JsonSerializer<Docfile> {

	/* (non-Javadoc)
	 * @see com.fasterxml.jackson.databind.JsonSerializer#serialize(java.lang.Object, com.fasterxml.jackson.core.JsonGenerator, com.fasterxml.jackson.databind.SerializerProvider)
	 */
	@Override
	public void serialize(Docfile docFile, JsonGenerator jgen, SerializerProvider serializers)
			throws IOException {
		jgen.writeStartObject();
		jgen.writeStringField("id", docFile.getId());
		jgen.writeNumberField("version", docFile.getVersion());
		jgen.writeStringField("filename", docFile.getFilename());
		jgen.writeStringField("filetype", docFile.getFiletype());
		jgen.writeEndObject();

	}
}
