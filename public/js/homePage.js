const homePageHandler = async (event) => {
    event.preventDefault();
  
    // Handle logout & posts
    const logout = document.querySelector('#logout').value.trim();
    const posts = document.querySelector('#posts').value.trim();
  
    if (posts) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ posts }),
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
    .querySelector('.posting-form')
    .addEventListener('submit', loginFormHandler);