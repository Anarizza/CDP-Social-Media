package org.ssglobal.training.codes.socmed.users;

import java.util.HashSet;  
import java.util.Set;
import jakarta.persistence.JoinColumn;
import org.ssglobal.training.codes.socmed.comment.Comment;
import org.ssglobal.training.codes.socmed.like.Likes;
import org.ssglobal.training.codes.socmed.post.Post;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;  
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;


@Entity
@Table
public class Users {
	
	@Id
	@SequenceGenerator(
			  name = "users_sequence",
			  sequenceName = "users_sequence",
			  allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "users_sequence"
	)
	private Integer userId;
	private String profilePic;
	private String givenName;
	private String surname;
	private String username;
	
	@Column(nullable = true)
	private String phoneNumber;
	private String email;
	private String password;
	private String brgy;
	private String city;
	private String province;
	private String dot; 
	
	@JsonIgnore
	@OneToMany(mappedBy = "users")
	private Set<Post> post= new HashSet<>(); 
	
	@JsonIgnore
	@OneToMany(mappedBy = "users")
	private Set<Likes> likes= new HashSet<>(); 
	
	@JsonIgnore
	@OneToMany(mappedBy = "users")
	private Set<Comment> comments= new HashSet<>(); 
	
	/*
	@ManyToMany
    @JoinTable(
   			name="friends",
			joinColumns = @JoinColumn(name = "user_id" ),
			inverseJoinColumns = @JoinColumn(name = "")
			)  
	private Set<Users> friends = new HashSet<>();		
	*/
	
	public Users() {}

	public Users(Integer userId, String profilePic, String givenName, String surname, String username,String phoneNumber, String email, String password,
			String brgy, String city, String province, String dot) {
		this.userId = userId;
		this.profilePic =profilePic;
		this.givenName = givenName;
		this.surname = surname;
		this.username = username;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
		this.brgy = brgy;
		this.city = city;
		this.province = province;
		this.dot = dot;
	}

	public Users(String profilePic, String givenName, String surname, String username, String phoneNumber, String email, String password, 
			String brgy, String city, String province, String dot) {
		this.profilePic = profilePic;
		this.givenName = givenName;
		this.surname = surname;
		this.username = username;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
		this.brgy = brgy;
		this.city = city;
		this.province = province;
		this.dot = dot;
	}
	

	public Integer getUserId() {
		return userId;
	}

	public void setUser_id(Integer userId) {
		this.userId = userId;
	}
	
	
	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public String getGivenName() {
		return givenName;
	}

	public void setGivenName(String givenName) {
		this.givenName = givenName;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getBrgy() {
		return brgy;
	}

	public void setBrgy(String brgy) {
		this.brgy = brgy;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getDot() {
		return dot;
	}

	public void setDot(String dot) {
		this.dot = dot;
	}

	
}
