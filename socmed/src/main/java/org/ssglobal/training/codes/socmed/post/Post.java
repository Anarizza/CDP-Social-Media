package org.ssglobal.training.codes.socmed.post;

import java.util.HashSet; 
import java.util.Set;

import org.ssglobal.training.codes.socmed.comment.Comment;
import org.ssglobal.training.codes.socmed.like.Likes;
import org.ssglobal.training.codes.socmed.users.Users;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer postId;
	
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "users",referencedColumnName = "userId")
	private Users users;
	
	@Column(nullable = true)
	private String posttext;
	
	@Column(nullable = true)
	private String image;
	
	private String createdDate;
	
	@JsonIgnore
	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Comment> comments= new HashSet<>(); 
	
	@JsonIgnore
	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Likes> likes= new HashSet<>(); 
	
	public Post() {}

	public Post(Integer postId, Users users, String posttext, String image, String createdDate) {
		this.postId = postId;
		this.users = users;
		this.posttext = posttext;
		this.image = image;
		this.createdDate = createdDate;
	}
	
	
	public Post(Integer postId, Users users, String posttext, String createdDate) {
		this.postId = postId;
		this.users = users;
		this.posttext = posttext;
		this.createdDate = createdDate;
	}

	public Post(Users users, String posttext, String image, String createdDate) {
		this.users = users;
		this.posttext = posttext;
		this.image = image;
		this.createdDate = createdDate;
	}

	public Integer getPostId() {
		return postId;
	}

	public void setPostId(Integer postId) {
		this.postId = postId;
	}

	public Users getUsers() {
		return users;
	}

	public void setUsers(Users users) {
		this.users = users;
	}

	public String getPosttext() {
		return posttext;
	}

	public void setPosttext(String posttext) {
		this.posttext = posttext;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

	public void setPost(Post post) {
		
		
	}
	
}
