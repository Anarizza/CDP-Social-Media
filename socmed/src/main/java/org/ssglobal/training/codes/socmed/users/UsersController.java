package org.ssglobal.training.codes.socmed.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "timelineapi")
public class UsersController {
	
	private final UsersService usersService;

	@Autowired
	public UsersController(UsersService usersService) {
		this.usersService = usersService;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@GetMapping(path = "users")
	public List<Users> getUsers() {
		return usersService.getUsers();
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "users/givenname/{givenName}", method = RequestMethod.GET)
	public Users selectUsersByGivenName(@PathVariable("givenName") String givenName) {
		Users user =usersService.getUsersByGivenName(givenName);
		return user;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "users/id/{id}", method = RequestMethod.GET)
	public Users selectUsersById(@PathVariable("id") Integer userId) {
		Users user =usersService.getUsersById(userId);
		return user;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")	
	@RequestMapping(path = "users/surename/{surename}", method = RequestMethod.GET)
	public Users selectUsersBySurname(@PathVariable("surename") String surname) {
		Users user =usersService.getUsersBySurname(surname);
		return user;
	}
	
	@CrossOrigin(originPatterns = "http://localhost:3000")
	@RequestMapping(path = "auth/register", method = RequestMethod.POST)
	public String registerUser(@RequestBody Users user) {
		return usersService.addNewUser(user);
	}
	
}
