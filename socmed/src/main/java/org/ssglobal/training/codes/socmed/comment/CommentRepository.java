package org.ssglobal.training.codes.socmed.comment;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer>{
	
	List<Comment> findByPostPostId(Integer postId);

}
