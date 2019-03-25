package com.vic.spr.repository;
import com.vic.spr.entity.UserEntity;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public class CustomUserRepositoryImpl implements CustomUserRepository {

    @SuppressWarnings("unchecked")
	@Override
    public List<UserEntity> findByAVeryComplicatedQuery(Long id, String name, String address) {

    	 Query query = entityManager.createNativeQuery("SELECT em.* FROM USER_DETAILS as em " +
                 "WHERE em.name LIKE ?", UserEntity.class);
         query.setParameter(1, name + "%");
         return query.getResultList();
    }
    
    @PersistenceContext
    EntityManager entityManager;
    @Override
    public List<UserEntity> getFirstNamesLike(String firstName) {
        Query query = entityManager.createNativeQuery("SELECT em.* FROM USER_DETAILS as em " +
                "WHERE em.name LIKE ?", UserEntity.class);
        query.setParameter(1, firstName + "%");
        return query.getResultList();
    }
}
