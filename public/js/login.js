console.log("hi")
const form = document.querySelector("#login-form");
const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');


const popperInstance = Popper.createPopper(button, tooltip, {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});

function show() {
tooltip.setAttribute('data-show', '');

// We need to tell Popper to update the tooltip position
// after we show the tooltip, otherwise it will be incorrect
popperInstance.update();
}

function hide() {
tooltip.removeAttribute('data-show');
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
button.addEventListener(event, hide);
});

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
      console.log(response)
    }
  };
  console.log(login)
  
form.addEventListener('submit', login);
  
