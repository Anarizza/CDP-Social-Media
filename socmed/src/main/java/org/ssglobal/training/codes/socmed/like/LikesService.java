package org.ssglobal.training.codes.socmed.like;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class LikesService {
	
	private final LikesRepository likesRepository;

	public LikesService(LikesRepository likesRepository) {
		this.likesRepository = likesRepository;
	}
	
	public Likes addLikes(Likes like) {
		return likesRepository.save(like);
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
