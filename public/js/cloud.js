// const photoForm = document.querySelector("#upload_widget");
// let photoUrl = ''

// var myWidget = cloudinary.createUploadWidget({
//     cloudName: 'de19jsefk', 
//     uploadPreset: 'wk5eacxt'}, (error, result) => { 
//       if (!error && result && result.event === "success") { 
//         console.log('Done! Here is the image info: ', result.info); 
//         photoUrl = result.info.url
//       }
//     }
//   )
  
//   document.getElementById("upload_widget").addEventListener("click", function(){
//       myWidget.open();
//     }, false);

// const submit = async (e) => {
//   e.preventDefault();
//   const response = await fetch("/api/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: document.querySelector("#first-name").value,
//       pic: photoUrl

//     })
//   });
//   console.log(response);
// };

// photoForm.addEventListener("click", submit);