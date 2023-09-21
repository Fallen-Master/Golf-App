const userLogin = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Add API end point
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // Add API end point after login success
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  const userSignup = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
  
    if ( username && password && email) {
        // Add API endpoint
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Add API end point after user creation success
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  document
  // Add form name from HTML
  .querySelector('')
  .addEventListener('submit', userLogin);
// Add form name from HTML
  document
  .querySelector('')
  .addEventListener('submit', signupFormHandler);


