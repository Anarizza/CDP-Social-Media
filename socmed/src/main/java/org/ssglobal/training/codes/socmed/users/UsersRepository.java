package org.ssglobal.training.codes.socmed.users;

import java.util.Optional; 

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer>{
	
	Users findByUserId(Integer userId);
	Users findByGivenName(String givenName);
	Users findBySurname(String surname);
	Optional<Users> findUsersBySurname(String surName);
	Optional<Users> findUsersByGivenName(String givenName);

}
