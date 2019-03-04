package com.vic.spr.controller;
import java.util.List;

//import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.ui.ModelMap;
//import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.ModelAndView;

import com.vic.spr.entity.UserEntity;
import com.vic.spr.exception.UserIdAlreadyPresentException;
import com.vic.spr.model.User;
import com.vic.spr.service.RegistrationService;

@RestController
public class RegistrationController {
	@Autowired
	private RegistrationService registrationService;
	@Autowired
	private Environment environment;
	private static  Logger LOGGER ;

	@GetMapping("/register")//url mapping  //alos @RequestMapping
	  public List<UserEntity> getUsers() {				  
		return  registrationService.getAllUsers();		//response as json
	  }
	@RequestMapping(value = "registerUser", method = RequestMethod.POST)
	public String addCustomer(@RequestBody User usr) {
		try {
		registrationService.registerUser(usr);
		}
		catch(UserIdAlreadyPresentException e){
			LOGGER = LoggerFactory.getLogger(this.getClass());
			if (e.getMessage().contains("RegistrationService")) {
             System.out.println(e);
			}
	         }
		return "success";
	    }
//	public ModelAndView addCustomer(@Valid @ModelAttribute("command") User user, BindingResult result,
//			ModelMap model) {
//		ModelAndView modelAndView = new ModelAndView();
//		if (result.hasErrors()) {
//			modelAndView= new ModelAndView("register", "command", user);
//		} 
//		else{
//		try{
//			registrationService.registerUser(user);
//			modelAndView= new ModelAndView("register", "command", user);
//			modelAndView.addObject("successMessage",environment.getProperty("RegistrationController.SUCCESSFUL_REGISTRATION"));
//			
//		}catch(UserIdAlreadyPresentException e){
//			LOGGER = LoggerFactory.getLogger(this.getClass());
//			if (e.getMessage().contains("RegistrationService")) {
//				modelAndView = new ModelAndView("register"); 
//				modelAndView.addObject("command",user);
//				modelAndView.addObject("message", environment.getProperty(e.getMessage()));
//			}
//			LOGGER.error(e.getMessage(), e);
//		}
//		}
//		return modelAndView;
//	}
//	@RequestMapping(value = "/register", method = RequestMethod.GET)	
//	public ModelAndView register(Model model) {
//		return new ModelAndView("register", "command", new User());
//	}
//	

}