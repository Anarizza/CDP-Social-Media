import http from "./http";

export function getLikes(postId) {
    return http.get(`/likes/post/${postId}`);
  }
  