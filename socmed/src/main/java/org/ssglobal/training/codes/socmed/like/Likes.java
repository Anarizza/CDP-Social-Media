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
	@JoinColumn(name = "post_id",referencedColumnName = "post_id")
	private Post post_id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "profile_id",referencedColumnName = "user_id")
	private Users profile_id;
	
	private String date_created;
	
	public Likes() {}

	public Likes(Integer like_id, Post post_id, Users profile_id, String date_created) {
		this.like_id = like_id;
		this.post_id = post_id;
		this.profile_id = profile_id;
		this.date_created = date_created;
	}

	public Likes(Post post_id, Users profile_id, String date_created) {
		this.post_id = post_id;
		this.profile_id = profile_id;
		this.date_created = date_created;
	}

	public Integer getLike_id() {
		return like_id;
	}

	public void setLike_id(Integer like_id) {
		this.like_id = like_id;
	}

	public Post getPost_id() {
		return post_id;
	}

	public void setPost_id(Post post_id) {
		this.post_id = post_id;
	}

	public Users getProfile_id() {
		return profile_id;
	}

	public void setProfile_id(Users profile_id) {
		this.profile_id = profile_id;
	}

	public String getDate_created() {
		return date_created;
	}

	public void setDate_created(String date_created) {
		this.date_created = date_created;
	}
	
}
