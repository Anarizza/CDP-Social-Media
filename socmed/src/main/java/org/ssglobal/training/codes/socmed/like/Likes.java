package org.ssglobal.training.codes.socmed.like;

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
public class Likes {
	
	@Id
	private Integer like_id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "postId",referencedColumnName = "postId")
	private Post postId;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "userId",referencedColumnName = "userId")
	private Users userId;
	
	private String date_created;
	
	public Likes() {}

	public Likes(Integer like_id, Post postId, Users userId, String date_created) {
		this.like_id = like_id;
		this.postId = postId;
		this.userId = userId;
		this.date_created = date_created;
	}

	public Likes(Post postId, Users userId, String date_created) {
		this.postId = postId;
		this.userId = userId;
		this.date_created = date_created;
	}

	public Integer getLike_id() {
		return like_id;
	}

	public void setLike_id(Integer like_id) {
		this.like_id = like_id;
	}

	public Post getPost_id() {
		return postId;
	}

	public void setPost_id(Post post_id) {
		this.postId = post_id;
	}

	public Users getUserId() {
		return userId;
	}

	public void setUserId(Users profile_id) {
		this.userId = profile_id;
	}

	public String getDate_created() {
		return date_created;
	}

	public void setDate_created(String date_created) {
		this.date_created = date_created;
	}
	
}
