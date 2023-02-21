import http from "./http";

export function getPosts() {
  return http.get("/post/all");
}

export function addPost() {
  return http.post("/post/new");
}
