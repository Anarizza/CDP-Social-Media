package org.ssglobal.training.codes.socmed.users;

import jakarta.persistence.Entity;  
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
	private Integer user_id;
	private String givenName;
	private String surname;
	private String username;
	private Integer phoneNumber;
	private String email;
	private String password;
	private String address;
	private String dot; 
	
	public Users() {}

	public Users(Integer user_id, String givenName, String surname, String username,Integer phoneNumber, String email, String password,
			String address, String dot) {
		this.user_id = user_id;
		this.givenName = givenName;
		this.surname = surname;
		this.username = username;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
		this.address = address;
		this.dot = dot;
	}

	public Users(String givenName, String surname, String username, Integer phoneNumber, String email, String password, String address,
			String dot) {
		this.givenName = givenName;
		this.surname = surname;
		this.username = username;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
		this.address = address;
		this.dot = dot;
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
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
	
	public Integer getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Integer phoneNumber) {
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDot() {
		return dot;
	}

	public void setDot(String dot) {
		this.dot = dot;
	}
	
}
