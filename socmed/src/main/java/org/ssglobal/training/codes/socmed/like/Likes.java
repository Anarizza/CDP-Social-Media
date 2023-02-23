package org.ssglobal.training.codes.socmed.like;

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
public class Likes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer likeId;
	

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "post",referencedColumnName = "postId")
	private Post post;
	
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "users",referencedColumnName = "userId")
	private Users users;
	
	private String dateCreated;
	
	public Likes() {}

	public Likes(Integer likeId, Post post, Users users, String dateCreated) {
		this.likeId = likeId;
		this.post = post;
		this.users = users;
		this.dateCreated = dateCreated;
	}

	public Likes(Post post, Users users, String dateCreated) {
		this.post = post;
		this.users = users;
		this.dateCreated = dateCreated;
	}

	public Integer getLikeId() {
		return likeId;
	}

	public void setLikeId(Integer likeId) {
		this.likeId = likeId;
	}

	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

	public Users getUserId() {
		return users;
	}

	public void setUserId(Users userId) {
		this.users = userId;
	}

	public String getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(String dateCreated) {
		this.dateCreated = dateCreated;
	}
	
}
