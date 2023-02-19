package org.ssglobal.training.codes.socmed.comment;

import org.ssglobal.training.codes.socmed.post.Post;
import org.ssglobal.training.codes.socmed.users.Users;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer commentId;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "post",referencedColumnName = "postId")
	private Post post;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "users",referencedColumnName = "userId")
	private Users users;
	
	private String comment_text;
	private String date_created;
	
	public Comment() {}

	public Comment(Integer commentId, Post post, Users users, String comment_text, String date_created) {
		this.commentId = commentId;
		this.post = post;
		this.users = users;
		this.comment_text = comment_text;
		this.date_created = date_created;
	}

	public Comment(Post post, Users users, String comment_text, String date_created) {
		this.post = post;
		this.users = users;
		this.comment_text = comment_text;
		this.date_created = date_created;
	}

	public Integer getCommentId() {
		return commentId;
	}

	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
	}

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

	public Users getUsers() {
		return users;
	}

	public void setUsers(Users users) {
		this.users = users;
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
