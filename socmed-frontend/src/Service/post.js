import http from "./http";

export function getPosts() {
  return http.get("/post/all");
}

export function addPost(userId, post) {
  const postClone = { ...post };
  Object.keys(postClone).forEach((key) => {
    if (
      postClone[key] === "" ||
      postClone[key] === null ||
      postClone[key] === undefined
    ) {
      delete postClone[key];
    }
  });

  return http.post(`/post/new/${userId}`, postClone);
}

export function updatePost(userId,postId, post) {
  const postClone = { ...post };
  Object.keys(postClone).forEach((key) => {
    if (
      postClone[key] === "" ||
      postClone[key] === null ||
      postClone[key] === undefined
    ) {
      delete postClone[key];
    }
  });
  return http.put(`update/status/${userId}/${postId}`, postClone);
}

export function fetchPostById(id) {
  return http.get(`/post/id/${id}`);
}
export function deletePost(postId) {
  return http.delete(`/post/deletefrompost/${postId}`);
}

export function selectPostByUsersUserId(userId) {
  return http.get(`/post/userid/${userId}`);
}

export function fetchPostByUsersUserId(id) {
  return http.get(`/likes/${id}`);
}
