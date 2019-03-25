package com.vic.spr.repository;
import com.vic.spr.entity.UserEntity;

import java.util.List;

public interface CustomUserRepository {

    List<UserEntity> findByAVeryComplicatedQuery(Long id, String name, String address);

	List<UserEntity> getFirstNamesLike(String firstName);

}
