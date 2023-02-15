package org.ssglobal.training.codes.socmed.users;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer>{

}
