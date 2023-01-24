// FORM HANDLERS
// Create Post Form Handler
const postHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#userPost").value.trim();

  if (content) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

// Create Comment Form Handler
const commentHandler = async (event) => {
  event.preventDefault();
  // Get user text and "data-postid" from closest parent div (post div)
  const content = event.target[0].value;
  const post_id = event.target.closest(".post").dataset.postid;

  if (content && post_id) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

// Delete Post Form Handler
const postDeleteHandler = async (event) => {
  event.preventDefault();
  // "data-postid" from closest parent div (post div)
  const post_id = event.target.closest(".post").dataset.postid;

  if (post_id) {
    // Send a DELETE request to the API endpoint
    const response = await fetch(`/api/post/${post_id}`, {
      method: "DELETE",
      body: JSON.stringify({ post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

// Delete Comment Form Handler
const commentDeleteHandler = async (event) => {
  event.preventDefault();
  // "data-postid" from closest parent div (post div)
  const comment_id = event.target.closest(".comment").dataset.commentid;

  if (comment_id) {
    // Send a DELETE request to the API endpoint
    const response = await fetch(`/api/comment/${comment_id}`, {
      method: "DELETE",
      body: JSON.stringify({ comment_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

// EVENT LISTENERS

// Create Post Event Listener
document.querySelector(".post-form").addEventListener("submit", postHandler);

// Create Comment Event Listener for all instances of comment-form
let commentSubmit = document.querySelectorAll(".comment-form");

commentSubmit.forEach((btn) => {
  btn.addEventListener("submit", commentHandler);
});

// Delete Post Event Listener for all instances of post-delete-form
let postDeleteSubmit = document.querySelectorAll(".post-delete-form");

postDeleteSubmit.forEach((btn) => {
  btn.addEventListener("submit", postDeleteHandler);
});

// Delete Comment Event Listener for all instances of comment-delete-form
let commentDeleteSubmit = document.querySelectorAll(".comment-delete-form");

commentDeleteSubmit.forEach((btn) => {
  btn.addEventListener("submit", commentDeleteHandler);
});
