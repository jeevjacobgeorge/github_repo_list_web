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
    updateBackgroundColor();

    // Listen for scroll events
    window.addEventListener("scroll", function() {
        // Update background color as you scroll
        updateBackgroundColor();
    });
})  


function updateBackgroundColor() {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Define the color gradient based on the scroll position
    const gradientColor = `linear-gradient(to top, #112247 ${scrollPosition * 0.1}%, #0E1833)`;

    // Apply the gradient to the body background
    document.body.style.background = gradientColor;
}
