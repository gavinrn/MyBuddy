// FORM HANDLERS
// Posts
const postHandler = async (event) => {
  event.preventDefault();

  // Handle logout & posts
  // const logout = document.querySelector('#logout').value.trim();
  const content = document.querySelector("#userPost").value.trim();
  console.log("hi");
  if (content) {
    // Send a POST request to the API endpoint
    console.log(content);
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

// Comments
const commentHandler = async (event) => {
  event.preventDefault();

  // Comment Model is expecting "content" "post_id"
  const content = document.querySelector("#comment-post").value.trim();
  // I think a query selector to find the "data-postid" data attribute in the post div would be possible
  const post_id = document.querySelector("");

  if (content) {
    // Send a POST request to the API endpoint
    console.log(content);
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
// EVENT LISTENERS
// Posts
document.querySelector(".post-form").addEventListener("submit", postHandler);

// Comments
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentHandler);
