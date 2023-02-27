package org.ssglobal.training.codes.socmed.like;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "timelineapi/likes")
public class LikesController {
	
	private final LikesService likeService;
	
	@Autowired
	public LikesController(LikesService likeService) {
		this.likeService = likeService;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "new", method = RequestMethod.POST)
	public Likes newLikes(@RequestBody Likes comm) {
		return likeService.addLikes(comm);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "{like}", method = RequestMethod.GET)
	public List<Likes> selectLikesByUsersUserId(@PathVariable("like") Integer userId) {
		 List<Likes> like =  likeService.getLikesByUsersUserId(userId);
		 return like;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "post/{postId}", method = RequestMethod.GET)	
	public List<Likes> selectLikesByPostPostId(@PathVariable("postId") Integer postId) {
		 List<Likes> like =  likeService.getLikesByPostPostId(postId);
		 return like;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "removelikes/{likeId}", method = RequestMethod.POST)
	public String RemoveFromLikesByLikeId(@PathVariable("likeId") Integer likeId) {
		return likeService.deleteFromLikesByUsersUserId(likeId).toString();
	}

}
