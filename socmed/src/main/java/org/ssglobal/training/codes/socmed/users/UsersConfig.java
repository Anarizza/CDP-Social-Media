package org.ssglobal.training.codes.socmed.users;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.ssglobal.training.codes.socmed.comment.CommentRepository;
import org.ssglobal.training.codes.socmed.like.LikesRepository;
import org.ssglobal.training.codes.socmed.post.Post;
import org.ssglobal.training.codes.socmed.post.PostRepository;

@Configuration
public class UsersConfig {
	
	@Bean
	CommandLineRunner commandLineRunner( UsersRepository userRepo, PostRepository postRepo, LikesRepository likerepo,
			CommentRepository commRepo) {
		return args -> {
			
			Users user1 = new Users(1, "Pola", "Dela Cruz", "pola", "09123456789", "ana@delacruz", "admin2255", "Bulacan", "07/15/1999");
			Users user2 = new Users("Hazel", "Fugata", "hazel", "09123456789", "hazel@delacruz", "admin2255", "Cavite", "07/15/1999");
			Users user3 = new Users("Allan", "Dela Cruz", "allan", "09123456789", "allan@delacruz", "admin2255", "Pasig", "07/15/1999");
			Users user4 = new Users("Nick", "Dela Cruz", "Nick", "09123456789", "nick@delacruz", "admin2255", "Cebu", "07/15/1999");
			Users user5 = new Users("Janus", "Dela Cruz", "janus", "09123456789", "janus@delacruz", "admin2255", "Mindanao", "07/15/1999");
			userRepo.saveAll(List.of(user1, user2, user3, user4, user5));
			
			Post p1 = new Post(1, user1, "hello", "", "02/17/2023");
			Post p2 = new Post(user2, "Good Morning", "", "02/17/2023");
			Post p3 = new Post(user3, "Good Morning", "", "02/17/2023");
			Post p4 = new Post(user4, "Good Morning", "", "02/17/2023");
			Post p5 = new Post(user5, "Good Morning", "", "02/17/2023");
			postRepo.saveAll(List.of(p1, p2, p3, p4, p5));
			
			
		};
	}

}
