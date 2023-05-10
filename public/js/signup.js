const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

async function signUpClick() {
    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert('Account created', 'success')
        })
    }


    const pushProfile = document.querySelector("#liveAlertBtn").addEventListener("click", e => {
        e.preventDefault();

        if (alertTrigger) {
            alertTrigger.addEventListener('click', () => {
                fetch("../views/profile", {
                    method: "POST",
                }).then(res => {
                    if (res.ok) {
                        location.reload()
                    } else {
                        alert("trumpet sound")
                    }
                })
            })
        }


    })
}