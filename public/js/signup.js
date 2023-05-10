// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const appendAlert = (message, type) => {
//     const wrapper = document.createElement('div')
//     wrapper.innerHTML = [
//         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//         `   <div>${message}</div>`,
//         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//         '</div>'
//     ].join('')

//     alertPlaceholder.append(wrapper)
// }

// async function signUpClick() {
//     const alertTrigger = document.getElementById('liveAlertBtn')
//     if (alertTrigger) {
//         alertTrigger.addEventListener('click', () => {
//             appendAlert('Account created', 'success')
//         })
//     }


//     const pushProfile = document.querySelector("#liveAlertBtn").addEventListener("click", e => {
//         e.preventDefault();

//         if (alertTrigger) {
//             alertTrigger.addEventListener('click', () => {
//                 fetch("../views/profile", {
//                     method: "POST",
//                 }).then(res => {
//                     if (res.ok) {
//                         location.reload()
//                     } else {
//                         alert("trumpet sound")
//                     }
//                 })
//             })
//         }


//     })
// }
const form = document.querySelector("#login-form");
const submitBtn = document.querySelector("#liveAlertBtn");
const userType = document.querySelector("#user-type");

const signup = async (e) => {
  // check if farmer or customer
  e.preventDefault();
  // farmer signup
  if (true){
    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: document.querySelector("#exampleFormControlInput1").value,
        firstName: document.querySelector("#first-name").value,
        lastName: document.querySelector("#last-name").value,
        password: document.querySelector("#inputPassword6").value,
        biography: document.querySelector("#biography").value,
        interest: document.querySelector("#interests").value
      }),
    });
    if (response.status === 200) {
      window.location.assign("/profile")
    } else {
      alert("wrong credentials buddy")
    }
  }
};

form.addEventListener("submit", signup);
