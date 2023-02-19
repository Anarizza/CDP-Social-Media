package org.ssglobal.training.codes.socmed.comment;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CommentService {
	
	private final CommentRepository commentRepository;

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
		rec.setComment_text(newComm.getComment_text());
		commentRepository.save(rec);
		return "Done updating comment!";
	}
	
	public String deleteFromPostByPostId(Integer post_id) {
		commentRepository.deleteById(post_id);
		return "Comment Deleted!";
	}
	
}
