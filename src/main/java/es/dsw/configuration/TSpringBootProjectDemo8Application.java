package es.dsw.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "es.dsw")
public class TSpringBootProjectDemo8Application {

	public static void main(String[] args) {
		SpringApplication.run(TSpringBootProjectDemo8Application.class, args);
	}

}
