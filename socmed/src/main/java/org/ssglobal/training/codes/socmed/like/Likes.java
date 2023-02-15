package org.ssglobal.training.codes.socmed.like;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Likes {
	
	@Id
	private Integer like_id;
	private Integer post_id;
	private Integer profile_id;
	private String date_created;
	
	public Likes() {}

	public Likes(Integer like_id, Integer post_id, Integer profile_id, String date_created) {
		this.like_id = like_id;
		this.post_id = post_id;
		this.profile_id = profile_id;
		this.date_created = date_created;
	}

	public Likes(Integer post_id, Integer profile_id, String date_created) {
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

	public Integer getPost_id() {
		return post_id;
	}

	public void setPost_id(Integer post_id) {
		this.post_id = post_id;
	}

	public Integer getProfile_id() {
		return profile_id;
	}

	public void setProfile_id(Integer profile_id) {
		this.profile_id = profile_id;
	}

	public String getDate_created() {
		return date_created;
	}

	public void setDate_created(String date_created) {
		this.date_created = date_created;
	}
	
}
