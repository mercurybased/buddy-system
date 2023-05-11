const search= document.querySelector("#search")
const searchTerm= document.querySelector("#search-term").value

const searchFunction = async (e) => {
    e.preventDefault();
        window.location.assign("/search/" + searchTerm)
    }
search.addEventListener("submit", searchFunction)