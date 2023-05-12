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

// leave button 
const myModalAlternative = new bootstrap.Modal('#bioModal', options)
const myModalAlternative2 = new bootstrap.Modal('#interestModal', options)
const myModalAlternative3 = new bootstrap.Modal('#pictureModal', options)

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