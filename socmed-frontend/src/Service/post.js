import http from "./http";

export function getPosts() {
  return http.get("/post/all");
}

export function addPost() {
  return http.post("/post/new");
}

export function fetchPostById(id) {
  return http.get(`/post/id/${id}`);
}
export function deletePost(postId) {
  return http.delete(`/post/deletefrompost/${postId}`);
}
