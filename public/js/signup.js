let url = ''

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'de19jsefk', 
    uploadPreset: 'wk5eacxt'},
    (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        url = result.info.url
        console.log(url)
      }
    }
  )
  
  
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
        interest: document.querySelector("#interests").value,
        url
      }),
    });
    if (response.status === 200) {
      window.location.assign("/profile")
    } else {
      alert("wrong credentials buddy")
    }
  }
};

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);

form.addEventListener("submit", signup);

