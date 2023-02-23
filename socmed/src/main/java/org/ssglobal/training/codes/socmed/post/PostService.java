package org.ssglobal.training.codes.socmed.post;

import java.util.List;

import org.springframework.stereotype.Service;
import org.ssglobal.training.codes.socmed.users.UsersRepository;

@Service
public class PostService {
	
	private final PostRepository postRepository;
	private final UsersRepository userRepository;
	
	public PostService(PostRepository postRepository, UsersRepository userRepository ) {
		this.postRepository = postRepository;
		this.userRepository = userRepository;
	}

	public List<Post> getPosts() {
		return postRepository.findAll();
	}
	
	public Post addPost(Post post) {
		return postRepository.save(post);
	}
	
	public List<Post> getPostByPostText(String post_text) {
		return postRepository.findByPosttext(post_text);
	}
	
	public Post getPostByPostId(Integer postId) {
		return postRepository.findByPostId(postId);
	}
	
	public List<Post> getPostByUsersUserId(Integer userId) {
		return postRepository.findByUsersUserId(userId);
	}
	
	/*
	public List<Post> getPostByPostText(String post_text){
		//Integer transaction = null;
		return postRepository.findPostByPostText(post_text);
	}
	*/
	
	public String updatePost(Post newPost) {
		Post rec = postRepository.findById(newPost.getPostId()).get();
		rec.setPost_text(newPost.getPost_text());
		rec.setImage(newPost.getImage());
		postRepository.save(rec);
		return "Done updating post!";
	}
	
	
	public boolean deleteFromPostByPostId(Integer post_id) {
		 postRepository.deleteById(post_id);
		 return true;
		
	}
	
}
