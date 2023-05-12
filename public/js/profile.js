let url = '' //"whatever.jpg"

document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();
    const userInterest = {
        name:document.querySelector("#name").value,
        interest:document.querySelector("#interest").value,
    }
    fetch("/api/interest",{
        method:"POST",
        body:JSON.stringify(userInterest),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

const allDelBtns = document.querySelectorAll(".del-btn");
allDelBtns.forEach(button=>{
    button.addEventListener("click",()=>{
        const idToDel = button.getAttribute("data-interest-id");
        fetch(`/api/interests/${idToDel}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
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
        const response = await fetch ("/api/users/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify ({
                photoUrl:url
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