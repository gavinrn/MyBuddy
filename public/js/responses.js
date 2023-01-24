const commentHandler = async (event) => {
    event.preventDefault();
  
    // Handle comments
    // const logout = document.querySelector('#logout').value.trim();
    const content = document.querySelector('#userComment').value.trim();

    if (content) {
      // Send a POST request to the API endpoint
      console.log(content)
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);