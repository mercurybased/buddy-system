const form = document.querySelector("#login-form");

const login = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#input-email').value;
    const password = document.querySelector('#input-password').value;
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });  
      if (response.ok) {
        window.location.replace('/profile');
      } else {
        alert('Failed to log in');
      }
    }
  };
  console.log(login)
  
form.addEventListener('submit', login);
  
