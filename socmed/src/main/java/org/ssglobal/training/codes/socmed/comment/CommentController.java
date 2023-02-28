package org.ssglobal.training.codes.socmed.comment;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
@RequestMapping(path = "timelineapi/comment") 
public class CommentController {

	private final CommentService commentService;
	private final UsersRepository usersRepository;
	private final PostRepository postRepository;

	@Autowired
	public CommentController(CommentService commentService, UsersRepository usersRepository, PostRepository postRepository) {
		this.commentService = commentService;
		this.usersRepository = usersRepository;
		this.postRepository = postRepository;

	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "{postId}", method = RequestMethod.GET)
	public List<Comment> selectCommentByPostPostId(@PathVariable("postId") Integer postId) {
		List<Comment> comment = commentService.getCommentByPostPostId(postId);
		return comment;
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "new/{userId}/comm/{postId}", method = RequestMethod.POST)
	public Comment newComment(@PathVariable("userId") Integer userId, @PathVariable("postId") Integer postId, @RequestBody Comment comm) {

		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MMMM dd, yyyy hh:mm:ss a");
		LocalDateTime now = LocalDateTime.now();
		String date = dtf.format(now);

		Optional<Users> userOptional = usersRepository.findById(userId);
		Users user = userOptional.get();
		comm.setUsers(user);
		comm.setDateCreated(date);
		
		Optional<Post> postOptional = postRepository.findById(postId);
		Post post=postOptional.get();
		comm.setPost(post);
	
		return commentService.addComment(comm);
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "update/status", method = RequestMethod.POST)
	public String updateComment(@RequestBody Comment updateComment) {
		return commentService.updateComment(updateComment);
	}

	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "deletecomment/{commId}", method = RequestMethod.DELETE)
	public String RemoveFromCommentByCommentId(@PathVariable("commId") Integer commentId) {
		return commentService.deleteFromPostByPostId(commentId).toString();
	}

}
