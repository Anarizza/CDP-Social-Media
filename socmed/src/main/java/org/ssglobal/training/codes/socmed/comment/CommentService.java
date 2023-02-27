package org.ssglobal.training.codes.socmed.comment;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CommentService {
	
	private final CommentRepository commentRepository;

	public List<Comment> getComment(){
		return commentRepository.findAll();
	}
	public CommentService(CommentRepository commentRepository) {
		this.commentRepository = commentRepository;
	}
	
	public List<Comment> getCommentByPostPostId(Integer post) {
		return commentRepository.findByPostPostId(post);
	}
	
	public Comment addComment(Comment comm) {
		return commentRepository.save(comm);
	}
	
	public String updateComment(Comment newComm) {
		Comment rec = commentRepository.findById(newComm.getCommentId()).get();
		rec.setCommenttext(newComm.getCommenttext());
		commentRepository.save(rec);
		return "Done updating comment!";
	}
	
	public String deleteFromPostByPostId(Integer post_id) {
		commentRepository.deleteById(post_id);
		return "Comment Deleted!";
	}
	
}
