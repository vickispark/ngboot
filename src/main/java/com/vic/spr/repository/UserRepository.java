package com.vic.spr.repository;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.vic.spr.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String>,CustomUserRepository{
	
    List<UserEntity> findByCity(String city);

   // @Query("select c from USER_DETAILS c where c.city = :cit")
   // Stream<UserEntity> findByEmailReturnStream(@Param("cit") String cit);
	
	//http://appsdeveloperblog.com/spring-data-jpa-native-sql-query/
	  @Query(value="select * from USER_DETAILS u where u.city = 'true'", nativeQuery = true)
	  Page<UserEntity> findAllUsersWithConfirmedEmailAddress( Pageable pageableRequest );
	  
	  @Query(value="select * from USER_DETAILS u where u.city = 'true'", nativeQuery = true)
	  Collection<UserEntity> findAllUsersWithConfirmedEmailAddress();
	
	  
	  @Query(value="SELECT * FROM USER_DETAILS u WHERE u.city = ?1  and u.name=?2",  nativeQuery = true)
	  Collection<UserEntity> findAllUsersWithVerifiedEmailAddress(String city, String name);
	  
	  //Named Parameters Example with Native Query 
	  @Query(value="SELECT * FROM USER_DETAILS u WHERE u.EMAIL_VERIFICATION_STATUS = :emailVerificationStatus ",  nativeQuery = true)
	  Collection<UserEntity> findAllUsersWithVerifiedEmailAddress(@Param("emailVerificationStatus") boolean emailVerificationStatus);
	  
	    @Modifying
	    @Query(value = "update USER_DETAILS u set u.city = ?1 where u.userId = ?2",
	            nativeQuery = true)
	    void setEmailVerificationStatus(String city, String userId);
	    
	    @Modifying
	    @Query(value = "delete from USER_DETAILS u where u.userId = ?1",
	            nativeQuery = true)
	   void deleteUser(String userId);
	    
	    
	  
}