package com.jorge.pickandpop.config;

import static springfox.documentation.builders.PathSelectors.regex;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;

import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * The Class SwaggerConfig.
 */
@Configuration
@EnableSwagger2
@Profile(AppConstants.SPRING_PROFILE_SWAGGER)
public class SwaggerConfig {

	/** The Constant JNUM_SWAGGER_TITLE. */
	private static final String JNUM_SWAGGER_TITLE = "jnum.swagger.title";

	/** The Constant JNUM_SWAGGER_VERSION. */
	private static final String JNUM_SWAGGER_VERSION = "jnum.swagger.version";

	/** The Constant JNUM_SWAGGER_DESCRIPTION. */
	private static final String JNUM_SWAGGER_DESCRIPTION = "jnum.swagger.description";

	/** The Constant JNUM_SWAGGER_TERMSOFSERVICEURL. */
	private static final String JNUM_SWAGGER_TERMSOFSERVICEURL = "jnum.swagger.termsofserviceurl";

	/** The Constant JNUM_SWAGGER_LICENSE. */
	private static final String JNUM_SWAGGER_LICENSE = "jnum.swagger.license";

	/** The Constant JNUM_SWAGGER_LICENSEURL. */
	private static final String JNUM_SWAGGER_LICENSEURL = "jnum.swagger.licenseurl";

	/** The Constant JNUM_SWAGGER_CONTACT_NAME. */
	private static final String JNUM_SWAGGER_CONTACT_NAME = "jnum.swagger.contact.name";

	/** The Constant JNUM_SWAGGER_CONTACT_URL. */
	private static final String JNUM_SWAGGER_CONTACT_URL = "jnum.swagger.contact.url";

	/** The Constant JNUM_SWAGGER_CONTACT_MAIL. */
	private static final String JNUM_SWAGGER_CONTACT_MAIL = "jnum.swagger.contact.mail";

	/** The Constant DEFAULT_INCLUDE_PATTERN. */
	private static final String DEFAULT_INCLUDE_PATTERN = "/api/.*";

	/** The env. */
	@Autowired
	Environment env;

	/**
	 * Api.
	 *
	 * @return the docket
	 */
	@SuppressWarnings("rawtypes")
	@Bean
	public Docket api() {
		Contact contact = new Contact(env.getProperty(JNUM_SWAGGER_CONTACT_NAME),
				env.getProperty(JNUM_SWAGGER_CONTACT_URL), env.getProperty(JNUM_SWAGGER_CONTACT_MAIL));

		ApiInfo apiInfo = new ApiInfo(env.getProperty(JNUM_SWAGGER_TITLE), env.getProperty(JNUM_SWAGGER_DESCRIPTION),
				env.getProperty(JNUM_SWAGGER_VERSION), env.getProperty(JNUM_SWAGGER_TERMSOFSERVICEURL), contact,
				env.getProperty(JNUM_SWAGGER_LICENSE), env.getProperty(JNUM_SWAGGER_LICENSEURL),
				new ArrayList<VendorExtension>());

		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo).forCodeGeneration(true)
				.genericModelSubstitutes(ResponseEntity.class).select().paths(regex(DEFAULT_INCLUDE_PATTERN)).build();

	}
}
