package org.ssglobal.training.codes.socmed.comment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "timelineapi/comment")
public class CommentController {
	
	private final CommentService commentService;

	@Autowired
	public CommentController(CommentService commentService) {
		this.commentService = commentService;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:4200")
	@RequestMapping(path = "{post}", method = RequestMethod.GET)
	public List<Comment> selectCommentByPostPostId(@PathVariable("post") Integer postId) {
		 List<Comment> comment =  commentService.getCommentByPostPostId(postId);
		 return comment;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:4200")
	@RequestMapping(path = "new", method = RequestMethod.POST)
	public Comment newPost(@RequestBody Comment comm) {
		return commentService.addComment(comm);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:4200")
	@RequestMapping(path = "update/status", method = RequestMethod.POST)
	public String updateComment(@RequestBody Comment updateComment) {
		return commentService.updateComment(updateComment);
	}
	
	@CrossOrigin(originPatterns = "http://localhost:4200")
	@RequestMapping(path = "deletecomment/{commId}", method = RequestMethod.POST)
	public String RemoveFromCommentByCommentId(@PathVariable("commId") Integer commentId) {
		return commentService.deleteFromPostByPostId(commentId).toString();
	}
	
}
