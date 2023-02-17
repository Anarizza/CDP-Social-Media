package org.ssglobal.training.codes.socmed.comment;

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
	@JoinColumn(name = "post_id",referencedColumnName = "post_id")
	private Integer post_id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "profile_id",referencedColumnName = "profile_id")
	private Integer profile_id;
	private String comment_text;
	private String date_created;
	
	public Comment() {}

	public Comment(Integer comment_id, Integer post_id, Integer profile_id, String comment_text, String date_created) {
		this.comment_id = comment_id;
		this.post_id = post_id;
		this.profile_id = profile_id;
		this.comment_text = comment_text;
		this.date_created = date_created;
	}

	public Comment(Integer post_id, Integer profile_id, String comment_text, String date_created) {
		this.post_id = post_id;
		this.profile_id = profile_id;
		this.comment_text = comment_text;
		this.date_created = date_created;
	}

	public Integer getComment_id() {
		return comment_id;
	}

	public void setComment_id(Integer comment_id) {
		this.comment_id = comment_id;
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
