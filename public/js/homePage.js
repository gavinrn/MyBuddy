const homePageHandler = async (event) => {
    event.preventDefault();
  
    // Handle logout & posts
    // const logout = document.querySelector('#logout').value.trim();
    const content = document.querySelector('#userPost').value.trim();
  console.log("hi")
    if (content) {
      // Send a POST request to the API endpoint
      console.log(content)
      const response = await fetch('/api/post', {
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
    .querySelector('.user-form')
    .addEventListener('submit', homePageHandler);