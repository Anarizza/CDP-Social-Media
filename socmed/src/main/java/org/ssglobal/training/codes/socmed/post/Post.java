package org.ssglobal.training.codes.socmed.post;

import java.util.HashSet; 
import java.util.Set;

import org.ssglobal.training.codes.socmed.comment.Comment;
import org.ssglobal.training.codes.socmed.like.Likes;
import org.ssglobal.training.codes.socmed.users.Users;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
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
	@JoinColumn(name = "userId",referencedColumnName = "userId")
	private Users userId;
	
	private String posttext;
	private String image;
	private String created_date;
	
	@JsonIgnore
	@OneToMany(mappedBy = "postId")
	private Set<Comment> comments= new HashSet<>(); 
	
	@JsonIgnore
	@OneToMany(mappedBy = "postId")
	private Set<Likes> likes= new HashSet<>(); 
	
	public Post() {}

	public Post(Integer postId, Users userId, String posttext, String image, String created_date) {
		this.postId = postId;
		this.userId = userId;
		this.posttext = posttext;
		this.image = image;
		this.created_date = created_date;
	}

	public Post(Users userId, String posttext, String image, String created_date) {
		this.userId = userId;
		this.posttext = posttext;
		this.image = image;
		this.created_date = created_date;
	}

	public Integer getPostId() {
		return postId;
	}

	public void setPostId(Integer postId) {
		this.postId = postId;
	}

	public Users getProfile_id() {
		return userId;
	}

	public void setProfile_id(Users profile_id) {
		this.userId = profile_id;
	}

	public String getPost_text() {
		return posttext;
	}

	public void setPost_text(String posttext) {
		this.posttext = posttext;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCreated_date() {
		return created_date;
	}

	public void setCreated_date(String created_date) {
		this.created_date = created_date;
	}
	
}
