package org.ssglobal.training.codes.socmed.like;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


@Service
public class LikesService {
	
	private final LikesRepository likesRepository;
	

	public LikesService(LikesRepository likesRepository) {
		this.likesRepository = likesRepository;
		
	}
	
	public String addLikes(Likes like) {
		
		Optional<Likes> optionalLikes = likesRepository.findByUsersAndPost(like.getUsers(), like.getPost());
		StringBuffer sb = new StringBuffer();
		
		if(optionalLikes.isPresent()) {
			sb.append("you already liked this post");
			return String.valueOf(sb);
		} else {
			sb.append("Successfully liked!");
		    likesRepository.save(like);
		    return String.valueOf(sb);
		}
		
		 
	}
	
	public List<Likes> getLikesByUsersUserId(Integer post) {
		return likesRepository.findByUsersUserId(post);
	}
	
	public List<Likes> getLikesByPostPostId(Integer post) {
		return likesRepository.findByPostPostId(post);
	}
	
	public String deleteFromLikesByUsersUserId(Integer likeId) {
		likesRepository.deleteById(likeId);
		return "Comment Deleted!";
	}
	
}
