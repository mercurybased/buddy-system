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

