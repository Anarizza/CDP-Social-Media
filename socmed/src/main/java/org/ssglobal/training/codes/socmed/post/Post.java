package org.ssglobal.training.codes.socmed.post;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table
public class Post {
	
	@Id
	@SequenceGenerator(
			  name = "post_sequence",
			  sequenceName = "post_sequence",
			  allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "post_sequence"
	)
	private Integer post_id;
	private Integer profile_id;
	private String post_text;
	private String image;
	private String created_date;
	
	public Post() {}

	public Post(Integer post_id, Integer profile_id, String post_text, String image, String created_date) {
		this.post_id = post_id;
		this.profile_id = profile_id;
		this.post_text = post_text;
		this.image = image;
		this.created_date = created_date;
	}

	public Post(Integer profile_id, String post_text, String image, String created_date) {
		this.profile_id = profile_id;
		this.post_text = post_text;
		this.image = image;
		this.created_date = created_date;
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

	public String getPost_text() {
		return post_text;
	}

	public void setPost_text(String post_text) {
		this.post_text = post_text;
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
