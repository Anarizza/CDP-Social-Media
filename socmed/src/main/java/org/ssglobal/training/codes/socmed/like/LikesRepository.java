package org.ssglobal.training.codes.socmed.like;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.ssglobal.training.codes.socmed.post.Post;
import org.ssglobal.training.codes.socmed.users.Users;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Integer>{
	
	List<Likes> findByUsersUserId(Integer userId);
	List<Likes> findByPostPostId(Integer userId);
	Optional<Likes> findByUsers(Users users);
	Optional<Likes> findByUsersAndPost(Users users, Post post);
	

}
