package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;



@SpringBootApplication
@Configuration
@EnableAutoConfiguration
public class SpringBootReactJsMvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootReactJsMvcApplication.class, args);
	}

}
