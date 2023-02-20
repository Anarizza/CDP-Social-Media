package org.ssglobal.training.codes.socmed.post;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "timelineapi/post")
public class PostController {
	
	private final PostService postService;
	
	@Autowired
	public PostController(PostService postService) {
		this.postService = postService;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping(path = "all")
	public List<Post> getPosts() {
		return postService.getPosts();
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "new", method = RequestMethod.POST)
	public Post registerUser(@RequestBody Post post) {
		return postService.addPost(post);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "message/{pText}", method = RequestMethod.GET)
	public List<Post> selectPostByPostText(@PathVariable("pText") String posttext) {
		 return postService.getPostByPostText(posttext);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "id/{id}", method = RequestMethod.GET)
	public List<Post> selectPostByPostId(@PathVariable("id") Integer postId) {
		 return postService.getPostByPostId(postId);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "userid/{user}", method = RequestMethod.GET)
	public List<Post> selectPostByUsersUserId(@PathVariable("user") Integer userId) {
		 List<Post> post =  postService.getPostByUsersUserId(userId);
		 return post;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "update/status", method = RequestMethod.POST)
	public String updatePost(@RequestBody Post updatePost) {
		return postService.updatePost(updatePost);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "deletefrompost/{postId}", method = RequestMethod.POST)
	public List<Post> RemoveFromPostByPostId(@PathVariable("postId") Integer postId) {
		return postService.deleteFromPostByPostId(postId);
	}
	
}
