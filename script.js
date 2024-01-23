document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/jeevjacobgeorge/repos")
        .then(response => response.json())
            .then(data => {
                const repoList = document.getElementById("repo-list");
                data.forEach(repo => {
                    const card = document.createElement("div")
                    card.classList.add("card")
                    
                    const repoName = document.createElement("h3")
                    repoName.textContent = repo.name
                    
                    const repoLinkButton = document.createElement("button")
                    repoLinkButton.classList.add("view-button")
                    const repoLink = document.createElement("a")
                    repoLink.href = repo.html_url
                    repoLink.textContent = "View on GitHub"

                    card.appendChild(repoName)  
                    repoLinkButton.appendChild(repoLink)
                    card.appendChild(repoLinkButton)
                    repoList.appendChild(card)
                })
            })
            .catch(error => console.log("Error fetching data:", error))
})  