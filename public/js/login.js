const loginFormHandler = async (event) => {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-login");
  const passwordEl = document.querySelector("#password-login");
// Api end point
  const response = await fetch ('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // Api end point
      document.location.replace('/'); 
  } else {
      alert('Something wrong!')
  }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);


