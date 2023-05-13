const search = document.querySelector("#search")

const searchFunction = async (e) => {
    e.preventDefault();
    const searchTerm = document.querySelector("#search-term").value
    if (searchTerm) {
        window.location.assign("/search/" + searchTerm)
    }
}
// document.querySelector("#franklin").addEventListener("click", () => {
//     console.log("clicked")
//     document.querySelector("body").style.backgroundImage = `url(/Assets/greenLeaf.png)`
// })
search.addEventListener("submit", searchFunction)