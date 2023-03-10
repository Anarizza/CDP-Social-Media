package org.ssglobal.training.codes.socmed.post;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.ssglobal.training.codes.socmed.like.Likes;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer>{
	
	//List<Post> findPostByPostText(String user_id);
	List<Post> findByPosttext(String posttext);
	Post findByPostId(Integer postId);
	List<Post> findByUsersUserId(Integer userId);
	//Optional<Post> findByPost(Post post);
	
}
