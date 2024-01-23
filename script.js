document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/jeevjacobgeorge/repos")
        .then(response => response.json())
            .then(data => {
                const repoList = document.getElementById("repo-list");
                data.forEach(repo => {
                    const card = document.createElement("div")
                    card.classList.add("card")
                    card.innerHTML = `<p>${repo.name}</p>
                    <button class="view-button"><a href="${repo.html_url}" target="_blank">View on github</a></button>`
                    repoList.appendChild(card)
                })
            })
            .catch(error => console.log("Error fetching data:", error))
})  