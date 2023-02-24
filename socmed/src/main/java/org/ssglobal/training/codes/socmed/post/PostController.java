package org.ssglobal.training.codes.socmed.post;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.ssglobal.training.codes.socmed.users.Users;
import org.ssglobal.training.codes.socmed.users.UsersRepository;

@RestController
@RequestMapping(path = "timelineapi/post")
public class PostController {
	
	private final PostService postService;
	private final UsersRepository usersRepository;

	@Autowired
	public PostController(PostService postService, UsersRepository usersRepository) {
		this.postService = postService;
		this.usersRepository = usersRepository;
	}


	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping(path = "all")
	public List<Post> getPosts() {
		return postService.getPosts();
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "new/{userId}", method = RequestMethod.POST)
	public Post addToPost(@PathVariable ("userId") Integer userId, @RequestBody Post post) {
		
		 DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MMMM dd, yyyy hh:mm:ss a");  
		 LocalDateTime now = LocalDateTime.now();
		 String date = dtf.format(now);
		
		Optional<Users> userOptional = usersRepository.findById(userId);
		Users user=userOptional.get();
		post.setUsers(user);
		post.setCreatedDate(date);
		return postService.addPost(post);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "message/{pText}", method = RequestMethod.GET)
	public List<Post> selectPostByPostText(@PathVariable("pText") String posttext) {
		 return postService.getPostByPostText(posttext);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "id/{id}", method = RequestMethod.GET)
	public Post selectPostByPostId(@PathVariable("id") Integer postId) {
		 return postService.getPostByPostId(postId);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "userid/{user}", method = RequestMethod.GET)
	public List<Post> selectPostByUsersUserId(@PathVariable("user") Integer userId) {
		 List<Post> post =  postService.getPostByUsersUserId(userId);
		 return post;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "update/status", method = RequestMethod.PUT)
	public String updatePost(@RequestBody Post updatePost) {
		return postService.updatePost(updatePost);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "deletefrompost/{postId}", method = RequestMethod.DELETE)
	public boolean RemoveFromPostByPostId(@PathVariable("postId") Integer postId) {
		 postService.deleteFromPostByPostId(postId);
		 return true;
	}
	
}
