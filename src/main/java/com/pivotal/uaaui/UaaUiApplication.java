package com.pivotal.uaaui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
@RestController
public class UaaUiApplication {

    public static void main(String[] args) {
        SpringApplication.run(UaaUiApplication.class, args);
    }
}
