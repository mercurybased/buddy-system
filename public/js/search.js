const search= document.querySelector("#search")
const searchTerm= document.querySelector("#search-term").value

const searchFunction = async (e) => {
    // check if farmer or customer
    e.preventDefault();
        window.location.assign("/search/" + searchTerm)
    }
search.addEventListener("submit", searchFunction)