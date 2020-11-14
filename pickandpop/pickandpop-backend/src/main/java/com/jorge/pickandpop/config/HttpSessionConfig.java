package com.jorge.pickandpop.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;
import org.springframework.session.web.http.HeaderHttpSessionIdResolver;
import org.springframework.session.web.http.HttpSessionIdResolver;
/**
 * The Class HttpSessionConfig.
 */
@Configuration
@EnableSpringHttpSession
public class HttpSessionConfig {

    /** The Constant logger. */
    private static final Logger logger = LoggerFactory.getLogger(HttpSessionConfig.class);

    /**
     * Http session strategy.
     *
     * @return the http session strategy
     */
    @Bean
    public HttpSessionIdResolver httpSessionIdResolver() {
        return new HeaderHttpSessionIdResolver("X-Auth-Token");
    }

}
