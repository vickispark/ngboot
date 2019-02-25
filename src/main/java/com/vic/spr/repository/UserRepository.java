package com.vic.spr.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vic.spr.entity.UserEntity;
public interface UserRepository extends JpaRepository<UserEntity, String>{
}