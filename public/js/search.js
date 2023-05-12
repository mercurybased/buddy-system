const search= document.querySelector("#search")

const searchFunction = async (e) => {
    e.preventDefault();
    const searchTerm= document.querySelector("#search-term").value
    if (searchTerm){
        window.location.assign("/search/" + searchTerm)
    }  
    }

search.addEventListener("submit", searchFunction)