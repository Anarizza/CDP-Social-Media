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

	@CrossOrigin(originPatterns = "http://localhost:4200")
	@GetMapping(path = "all")
	public List<Post> getPosts() {
		return postService.getPosts();
	}
	
	
	@CrossOrigin(originPatterns = "http://localhost:4200")
	@RequestMapping(path = "new", method = RequestMethod.POST)
	public Post registerUser(@RequestBody Post post) {
		return postService.addPost(post);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:4200")
	@RequestMapping(path = "message/{pText}", method = RequestMethod.GET)
	public List<Post> selectPostByPostText(@PathVariable("pText") String post_text) {
		 return postService.getPostByPostText(post_text);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:4200")
	@RequestMapping(path = "deletefrompost/{postId}", method = RequestMethod.POST)
	public List<Post> RemoveFromPostByPostId(@PathVariable("postId") Integer postId) {
		return postService.deleteFromPostByPostId(postId);
	}
	
	
}
