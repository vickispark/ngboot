package com.vic.spr;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import java.util.stream.Stream;
//CAR
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.bind.annotation.*;
//import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
//CAR

import com.vic.spr.car.CarRepository;
import com.vic.spr.car.Car;

import java.util.Collections;

//@ComponentScan("com.vic.spr")

//@EnableResourceServer
@SpringBootApplication
@RestController
@PropertySource(value = {"classpath:configuration.properties"})
public class SprbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(SprbootApplication.class, args);
    }
   
//    @RequestMapping("/")
//    public String home() {
//        return "Hello World!";
//    }

    @Bean
    ApplicationRunner init(CarRepository repository) {
        return args -> {
            Stream.of("Ferrari", "Jaguar", "Porsche", "Lamborghini", "Bugatti",
                    "AMC Gremlin", "Triumph Stag", "Ford Pinto", "Yugo GV").forEach(name -> {
                Car car = new Car();
                car.setName(name);
                repository.save(car);
            });
            repository.findAll().forEach(System.out::println);
        };
    }

    @Bean
    public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
        config.setAllowedMethods(Collections.singletonList("*"));
        config.setAllowedHeaders(Collections.singletonList("*"));
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }
}




//Spring Service layer Eg below related to RegServCustValidate_Bkp class
//import java.util.Scanner;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.core.env.Environment;
//import com.inf.irs.model.User;
//import com.inf.irs.service.RegistrationService;
//@SpringBootApplication
//@PropertySource(value = {"classpath:configuration.properties"})
//public class InfbootApplication implements CommandLineRunner{
//                
//                @Autowired
//                private Environment environment;
//                @Autowired
//                ApplicationContext context;
//                
//                public static void main(String[] args) {
//                                SpringApplication.run(InfbootApplication.class, args);
//                                
//  }
//                @Override
//                public void run(String... arg0) throws Exception {
//                                try{
//                                User user = new User();
//                                Scanner sc = new Scanner(System.in);
//                                System.out.println("Enter user id: ");
//                                String uid = sc.next();
//                                System.out.println("Enter password: ");
//                                String pwd = sc.next();
//                                System.out.println("Enter name: ");
//                                String name = sc.next();
//                                System.out.println("Enter city: ");
//                                String city = sc.next();
//                                System.out.println("Enter email: ");
//                                String mail = sc.next();
//                                System.out.println("Enter phone: ");
//                                String phone = sc.next();
//                                user.setCity(city);
//                                user.setUserId(uid);
//                                user.setPassword(pwd);
//                                user.setName(name);
//                                user.setEmail(mail);
//                                user.setPhone(phone);
//                                RegistrationService service = (RegistrationService)context.getBean("registrationService");
//                                String registrationMessage = service.registerUser(user);    
//                           
//                                System.out.println(environment.getProperty(registrationMessage));
//                }
//                catch(Exception e){
//                                System.out.println(environment.getProperty(e.getMessage())); }
//                }
//}