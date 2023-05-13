let url = '' //"whatever.jpg"

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const userInterest = {
        name: document.querySelector("#name").value,
        interest: document.querySelector("#interest").value,
    }
    fetch("/api/interest", {
        method: "POST",
        body: JSON.stringify(userInterest),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

const allDelBtns = document.querySelectorAll(".del-btn");
allDelBtns.forEach(button => {
    button.addEventListener("click", () => {
        const idToDel = button.getAttribute("data-interest-id");
        fetch(`/api/interests/${idToDel}`, {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                location.reload()
            } else {
                alert("trumpet sound")
            }
        })
    })
})

const form = document.querySelector("form");

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'de19jsefk',
    uploadPreset: 'wk5eacxt'
},
    (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            url = result.info.url
            console.log(url)
            changePhoto()
        }
    }
)

const changePhoto = async () => {
    if (true) {
        const response = await fetch("/api/users/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                photoUrl: url
            })
        })
        console.log(response);
        if (response.status === 200) {
            window.location.assign("/profile")
        } else {
            alert("please choose a photo")
        }
    }
}

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
  }, false);
  

  const changeBio = async () => {
    const biography = document.getElementById('biography').value;
    console.log(biography);
      if (true) {
          const response = await fetch ("/api/users/profile/bio", {
           method: "PUT",
           headers: { "Content-Type": "application/json"},
           body: JSON.stringify ({
               biography:biography
           })
       })
       console.log(response);
       if (response.status === 200) {
           window.location.assign("/profile")
        } else {
            alert("please enter something or exit out")
   }
}
}
  const changeInterest = async () => {
    const interest = document.getElementById('interest').value;
    console.log(biography);
      if (true) {
          const response = await fetch ("/api/users/profile/interest", {
           method: "PUT",
           headers: { "Content-Type": "application/json"},
           body: JSON.stringify ({
               interest:interest
           })
       })
       console.log(response);
       if (response.status === 200) {
           window.location.assign("/profile")
        } else {
            alert("please enter something or exit out")
   }
}
}
// leave button 
const myModalAlternative = new bootstrap.Modal('#bioModal', {backdrop: "static"} )
const myModalAlternative2 = new bootstrap.Modal('#interestModal', {backdrop: "static"})
// const myModalAlternative3 = new bootstrap.Modal('#pictureModal', {backdrop: "static"})
document.getElementById("bio-save-btn").addEventListener("click", changeBio)
document.getElementById("int-save-btn").addEventListener("click", changeInterest)

// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
//   })
// }
