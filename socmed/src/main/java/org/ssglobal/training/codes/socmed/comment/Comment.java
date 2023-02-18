package org.ssglobal.training.codes.socmed.comment;

import org.ssglobal.training.codes.socmed.post.Post;
import org.ssglobal.training.codes.socmed.users.Users;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Comment {
	
	@Id
	private Integer comment_id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "postId",referencedColumnName = "postId")
	private Post postId;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "userId",referencedColumnName = "userId")
	private Users userId;
	
	private String comment_text;
	private String date_created;
	
	public Comment() {}

	public Comment(Integer comment_id, Post postId, Users userId, String comment_text, String date_created) {
		this.comment_id = comment_id;
		this.postId = postId;
		this.userId = userId;
		this.comment_text = comment_text;
		this.date_created = date_created;
	}

	public Comment(Post post_id, Users userId, String comment_text, String date_created) {
		this.postId = post_id;
		this.userId = userId;
		this.comment_text = comment_text;
		this.date_created = date_created;
	}

	public Integer getComment_id() {
		return comment_id;
	}

	public void setComment_id(Integer comment_id) {
		this.comment_id = comment_id;
	}

	public Post getPost_id() {
		return postId;
	}

	public void setPost_id(Post postId) {
		this.postId = postId;
	}

	public Users getUserId() {
		return userId;
	}

	public void setUserId(Users profile_id) {
		this.userId = profile_id;
	}

	public String getComment_text() {
		return comment_text;
	}

	public void setComment_text(String comment_text) {
		this.comment_text = comment_text;
	}

	public String getDate_created() {
		return date_created;
	}

	public void setDate_created(String date_created) {
		this.date_created = date_created;
	}
	
}
