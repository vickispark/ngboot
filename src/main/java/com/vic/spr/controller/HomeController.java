package com.vic.spr.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
//	@RequestMapping(value = "/", method = RequestMethod.GET)
	//public ModelAndView getHomeDetails() {
//		return new ModelAndView("infyGoHome", "", "");
//	}
	
	 @GetMapping("/hello")//url mapping
	  public String hello() {
	    return "just a string";
	  }
}