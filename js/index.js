

document.addEventListener("DOMContentLoaded", function(event){
    event.preventDefault();
let form = document.querySelector("#github-form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
let id = document.getElementById("search").value
function getNames(){
    fetch(`https://api.github.com/search/users?q=${id}`)
    .then(res => res.json())
    .then(data => console.log(data))

    document.getElementById("result").innerHTML = `
    <a href="https://www.github.com/${id}"<img src="${result.avatar_url}"/><a/>
    `
}
getNames();
console.log(id)
})
})
