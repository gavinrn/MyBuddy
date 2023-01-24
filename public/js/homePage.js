// FORM HANDLERS
// Posts Form Handler
const postHandler = async (event) => {
  event.preventDefault();

  // Handle logout & posts
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

// Comments Form Handler
const commentHandler = async (event) => {
  event.preventDefault();
  console.log(event);
  // Get user text and "data-postid" from closest parent div (post div)
  const content = event.target[0].value;
  const post_id = event.target.closest(".post").dataset.postid;
  console.log(post_id, content);

  if (content && post_id) {
    // Send a POST request to the API endpoint
    console.log(`content: ${content}`);
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
      console.log(`response: ${response}`);
    } else {
      alert(response.statusText);
    }
  }
};


// EVENT LISTENERS


// Posts Event Listener
document.querySelector(".post-form").addEventListener("submit", postHandler);

// Comments Event Listener for all instances of comment-form
let commentSubmit = document.querySelectorAll(".comment-form");

commentSubmit.forEach((btn) => {
  btn.addEventListener("submit", commentHandler);
});
