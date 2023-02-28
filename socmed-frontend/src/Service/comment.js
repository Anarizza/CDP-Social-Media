import http from "./http";

export function getComment(){
    return http.get("/comment/all");
}

export function getCommentByPostPostId(postId) {
    return http.get(`/comment/${postId}`);
}

export function deleteCommentByCommentId(commentId) {
    return http.delete(`/comment/deletecomment/${commentId}`);
}

export function addComment(userId,postId, comm){
    const commentClone = { ...comm};
    Object.keys(commentClone).forEach((key) => {
      if (
        commentClone[key] === "" ||
        commentClone[key] === null ||
        commentClone[key] === undefined
      ) {
        delete commentClone[key];
      }
    });
  
    return http.post(`/comment/new/${userId}/comm/${postId}`, commentClone);
  }
  
