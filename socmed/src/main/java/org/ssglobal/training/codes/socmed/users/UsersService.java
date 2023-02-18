package org.ssglobal.training.codes.socmed.users;

import java.util.List; 
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UsersService {

	private final UsersRepository usersRepository;

	public UsersService(UsersRepository usersRepository) {
		this.usersRepository = usersRepository;
	}

	public Users addUser(Users users) {
		return usersRepository.save(users);
	}

	public String addNewUser(Users user) {

		Optional<Users> optionalSurname = usersRepository.findUsersBySurname(user.getSurname());
		System.out.println("uname: " + optionalSurname);
		Optional<Users> optionalGivenName = usersRepository.findUsersByGivenName(user.getGivenName());
		StringBuffer sb = new StringBuffer();
		int count = 0;
		if (optionalSurname.isPresent() || optionalGivenName.isPresent()) {
			if (optionalSurname.isPresent()) {
				sb.append("Username ");
				count++;
			}
			if (optionalGivenName.isPresent()) {
				if (count > 0) {
					sb.append("& ");
				}
				sb.append("GivenName ");
			}
			//throw new NonUniqueResultException("username taken");
			sb.append("is already taken");
		} else {
			Users temp = new Users();
			temp.setGivenName(user.getGivenName());
			temp.setSurname(user.getSurname());
			temp.setPassword(user.getPassword());
			temp.setUsername(user.getUsername());
			temp.setPhoneNumber(user.getPhoneNumber());
			temp.setDot(user.getDot());
			usersRepository.save(temp);
			sb.append("User registered!");
		}
		return String.valueOf(sb);

	}

	public List<Users> getUsers() {
		return usersRepository.findAll();
	}

	public Users getUsersByGivenName(String userUName) {
		return usersRepository.findByGivenName(userUName);
	}
	
	public Users getUsersById(Integer userId) {
		return usersRepository.findByUserId(userId);
	}

	public Users getUsersBySurname(String surname) {
		return usersRepository.findBySurname(surname);
	}

}
