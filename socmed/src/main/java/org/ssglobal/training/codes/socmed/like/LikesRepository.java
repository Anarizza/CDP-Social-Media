package org.ssglobal.training.codes.socmed.like;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Integer>{
	
	List<Likes> findByUsersUserId(Integer userId);
	List<Likes> findByPostPostId(Integer userId);

}
