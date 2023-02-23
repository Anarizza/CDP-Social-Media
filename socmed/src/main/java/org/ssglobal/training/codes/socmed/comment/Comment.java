package org.ssglobal.training.codes.socmed.comment;

import org.ssglobal.training.codes.socmed.post.Post;
import org.ssglobal.training.codes.socmed.users.Users;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
	
	private String commenttext;
	private String dateCreated;
	
	public Comment() {}

	public Comment(Integer commentId, Post post, Users users, String commenttext, String dateCreated) {
		this.commentId = commentId;
		this.post = post;
		this.users = users;
		this.commenttext = commenttext;
		this.dateCreated = dateCreated;
	}

	public Comment(Post post, Users users, String commenttext, String dateCreated) {
		this.post = post;
		this.users = users;
		this.commenttext = commenttext;
		this.dateCreated = dateCreated;
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

	public String getCommenttext() {
		return commenttext;
	}

	public void setCommenttext(String commenttext) {
		this.commenttext = commenttext;
	}

	public String getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}
	
}
