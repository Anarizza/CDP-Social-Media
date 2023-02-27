package org.ssglobal.training.codes.socmed.like;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.ssglobal.training.codes.socmed.post.Post;
import org.ssglobal.training.codes.socmed.post.PostRepository;
import org.ssglobal.training.codes.socmed.users.Users;
import org.ssglobal.training.codes.socmed.users.UsersRepository;

@RestController
@RequestMapping(path = "timelineapi/likes")
public class LikesController {
	
	private final LikesService likeService;
	private final UsersRepository usersRepository;
	private final PostRepository postRepository;
	
	@Autowired
	public LikesController(LikesService likeService, UsersRepository usersRepository, PostRepository postRepository) {
		this.likeService = likeService;
		this.usersRepository = usersRepository;
		this.postRepository = postRepository;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "new/{userId}/like/{postId}", method = RequestMethod.POST)
	public String newLikes(@PathVariable("userId") Integer userId, @PathVariable("postId") Integer postId, @RequestBody Likes like) {
		
		Optional<Users> userOptional = usersRepository.findById(userId);
		Users user=userOptional.get();
		like.setUsers(user);
		
		Optional<Post> postOptional = postRepository.findById(postId);
		Post post=postOptional.get();
		like.setPost(post);
		
		return likeService.addLikes(like);
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
