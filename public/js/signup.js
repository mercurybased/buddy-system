let url = ''

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'de19jsefk',
  uploadPreset: 'wk5eacxt'
},
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
  if (true) {
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

document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);





// interest button functions
  // event listener for all elements with class "saveBtn"
  $("#interest-button").on("click", function () {

    // get the parent ID and the value of the sibling textarea
    var textArea = $(this).siblings("#interests").val();

// push to local
    localStorage.setItem(textArea);
    console.log(textArea);
  });


// store to local
  var storedValue = localStorage.getItem(textArea);
// test LS 
  if (storedValue !== null)
  $(this).find(".description").val(storedValue);

  console.log(textArea, storedValue)

// var historyDisplayEL = $('#search-history');

// function searchButton(event) {
//   event.preventDefault();
//   var inputValue = userInputEl.val();
//   locationSelector(inputValue);
//   commitLS(inputValue);
//   prevInputVal();
//   userInputEl.val('');

// }
// function commitLS(interest) {
//   var listsearchHist = pullLS();
//   listsearchHist.push(interest);
//   localStorage.setItem("searchHistory", JSON.stringify(listsearchHist));
// }

// document.getElementById("interest-button").addEventListener("click", function () {
//   event.preventDefault();
//   var currentSelected = event.currentTarget.firstChild.textContent.trim();
//   locationSelector(currentSelected);
// })


//   function searchHistory(){
//     var searchHistory = pullLS();

//     if (searchHistory){
//             for(i=0;i< searchHistory.length ;i++){
//                 var buttonHistory = $('<button>');
//                 buttonHistory.addClass('button button-history');
//                 buttonHistory.text(searchHistory[i]);
//                 historyDisplayEL.append(buttonHistory);
//                 buttonHistory.on('click',historyDisplayEL);
//             }
//             historyDisplayEL.children().attr('style','visibility:visible');


//         }
// }
// function prevInputVal(){
//   var searchHistory = pullLS();
//   var prevInput = searchHistory.slice(-1);
//   var buttonHistory = $('<button>');
//   buttonHistory.addClass('button button-history');
//   buttonHistory.text(prevInput);
//   historyDisplayEL.append(buttonHistory);
//   historyDisplayEL.children().attr('style','visibility:visible');
//   buttonHistory.on('click',historyButtonClick);

// }
// function pullLS(){
//   var lsHistory = localStorage.getItem('searchHistory');
// if (lsHistory) {
//   lsHistory = JSON.parse(lsHistory);
// } else {
//   lsHistory = [];
// }
// return lsHistory;
// }

form.addEventListener("submit", signup);

