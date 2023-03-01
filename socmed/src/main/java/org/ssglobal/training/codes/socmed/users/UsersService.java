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
		Optional<Users> optionalUsername = usersRepository.findUsersByUsername(user.getUsername());
		
		StringBuffer sb = new StringBuffer();
		int count = 0;
		if (optionalSurname.isPresent() || optionalGivenName.isPresent() || optionalUsername.isPresent()) {
			if (optionalSurname.isPresent()) {
				sb.append("Surname ");
				count++;
			}
			if (optionalGivenName.isPresent()) {
				if (count > 0) {
					sb.append("& ");
				}
				sb.append("GivenName ");
			}
			if (optionalUsername.isPresent()) {
				if (count > 0) {
					sb.append("& ");
				}
				sb.append(" Username ");
			}
			//throw new NonUniqueResultException("username taken");
			sb.append("is already taken");
		} else {
			Users temp = new Users();
			if(user.getProfilePic() == "" || user.getProfilePic() == null) {
				temp.setProfilePic("/assets/profileCover/DefaultProfile.jpg");
			}else {
				temp.setProfilePic(user.getProfilePic());
			}
			temp.setGivenName(user.getGivenName());
			temp.setSurname(user.getSurname());
			temp.setUsername(user.getUsername());
			temp.setPassword(user.getPassword());
			temp.setPhoneNumber(user.getPhoneNumber());
			temp.setEmail(user.getEmail());
			temp.setPassword(user.getPassword());
			temp.setBrgy(user.getBrgy());
			temp.setCity(user.getCity());
			temp.setProvince(user.getProvince());
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
	
	public Users getUsersByUsername(String surname) {
		return usersRepository.findByUsername(surname);
	}

}
