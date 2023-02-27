package org.ssglobal.training.codes.socmed.users;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.ssglobal.training.codes.socmed.comment.Comment;
import org.ssglobal.training.codes.socmed.comment.CommentRepository;
import org.ssglobal.training.codes.socmed.like.Likes;
import org.ssglobal.training.codes.socmed.like.LikesRepository;
import org.ssglobal.training.codes.socmed.post.Post;
import org.ssglobal.training.codes.socmed.post.PostRepository;

@Configuration
public class UsersConfig {
	
	@Bean
	CommandLineRunner commandLineRunner( UsersRepository userRepo, PostRepository postRepo, LikesRepository likerepo,
			CommentRepository commRepo) {
		return args -> {
			
			 DateTimeFormatter dtf = DateTimeFormatter.ofPattern("MMMM dd, yyyy hh:mm:ss a");  
			 LocalDateTime now = LocalDateTime.now();
			 String date = dtf.format(now);
			
			Users user1 = new Users(1, "/assets/person/person1.jpg", "Pola", "Dela Cruz", "pola", "09123456789", "ana@delacruz", "admin2255", "Frances", "Calumpit", "Bulacan", "07/15/1999");
			Users user2 = new Users("/assets/person/person2.jpg", "Hazel", "Fugata", "hazel", "09123456789", "hazel@delacruz", "admin2255", "Frances", "Calumpit", "Bulacan", "07/15/1999");
			Users user3 = new Users("/assets/person/person3.jpg", "Allan", "Roxa Jr", "allan", "09123456789", "allan@delacruz", "admin2255", "Frances", "Calumpit", "Bulacan", "07/15/1999");
			Users user4 = new Users("/assets/person/person4.jpg", "Nick", "Libre", "Nick", "09123456789", "nick@delacruz", "admin2255", "Frances", "Calumpit", "Bulacan", "07/15/1999");
			Users user5 = new Users("/assets/person/person5.jpg", "Janus", "Cunanan", "janus", "09123456789", "janus@delacruz", "admin2255", "Frances", "Calumpit", "Bulacan", "07/15/1999");
			userRepo.saveAll(List.of(user1, user2, user3, user4, user5));
			
			Post p1 = new Post(1, user1, "Hello World", "/assets/posts/post1.jpg", date);
			Post p2 = new Post(user2, "Good Morning", "/assets/posts/post2.jpg", date);
			Post p3 = new Post(user3, "Have a good day!", "/assets/posts/post3.jpg", date);
			Post p4 = new Post(user4, "Great power comes with great responsibility", "/assets/posts/post4.jpg", date);
			Post p5 = new Post(user5, "Nice day!", "/assets/posts/post5.jpg", date);
			Post p6 = new Post(user1, "Cant hold back", "/assets/posts/post6.jpg", date);
			Post p7 = new Post(user1, "Happy Birthday", "/assets/posts/post7.jpg", date);
			postRepo.saveAll(List.of(p1, p2, p3, p4, p5, p6, p7));
			
			Comment c1 = new Comment(1, p1, user1, "Nice Post", date);
			Comment c2 = new Comment(p1, user2, "Wow such a beautiful", date);
			Comment c3 = new Comment(p1, user3, "Good day", date);
			Comment c4 = new Comment(p2, user4, "How are you", date);
			Comment c5 = new Comment(p5, user5, "Lets goo", date);
			commRepo.saveAll(List.of(c1, c2, c3, c4, c5));
			
			Likes l1 = new Likes(1, p7, user1, "");
			Likes l2 = new Likes(p2, user1, "");
			Likes l3 = new Likes(p7, user2, "");
			Likes l4 = new Likes(p7, user3, "");
			Likes l5 = new Likes(p1, user3, "");
			likerepo.saveAll(List.of(l1, l2, l3, l4, l5));
		};
	}

}
