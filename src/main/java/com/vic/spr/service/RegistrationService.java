package com.vic.spr.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vic.spr.entity.UserEntity;
import com.vic.spr.exception.UserIdAlreadyPresentException;
import com.vic.spr.model.User;
import com.vic.spr.repository.UserRepository;
@Service
public class RegistrationService {
	
	@Autowired
	private UserRepository userRepository;
	
	public void registerUser(User user) throws UserIdAlreadyPresentException{
        boolean ue = userRepository.existsById(user.getUserId());
        if(ue)
           throw new UserIdAlreadyPresentException("RegistrationService.USERID_PRESENT");
		UserEntity userEntity = new UserEntity();
		userEntity.setCity(user.getCity());
		userEntity.setEmail(user.getEmail());
		userEntity.setName(user.getName());
		userEntity.setPassword(user.getPassword());
		userEntity.setPhone(user.getPhone());
		userEntity.setUserId(user.getUserId());
		userRepository.saveAndFlush(userEntity);		
	}
	
	 public List<UserEntity> getAllUsers() {				
			 List<UserEntity> usr = new ArrayList<>()	;
			
			 userRepository.findAll().forEach(usr::add);
			
			 return usr;//response as json
			  }

	public List<UserEntity> getFirstNamesLike(String firstName) {
		// TODO Auto-generated method stub
		return userRepository.getFirstNamesLike(firstName);
    
	}

}