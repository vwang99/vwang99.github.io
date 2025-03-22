// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search");
    const usernameInput = document.getElementById("username");
    const repoGallery = document.getElementById("repo-gallery");

    async function fetchRepositories(username) {
        const url = `https://api.github.com/users/${username}/repos?per_page=20&sort=updated`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();
            displayRepositories(data);
        } catch (error) {
            repoGallery.innerHTML = `<p>${error.message}</p>`;
        }
    }

    function displayRepositories(repos) {
        repoGallery.innerHTML = "";
        repos.forEach(repo => {
            const repoElement = document.createElement("div");
            repoElement.classList.add("repo");
            repoElement.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || "No description available"}</p>
                <p>Created: ${new Date(repo.created_at).toLocaleDateString()}</p>
                <p>Updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                <p>Watchers: ${repo.watchers}</p>`;
            repoGallery.appendChild(repoElement);
        }
    
    );
    }

    searchButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        if (username) {
            fetchRepositories(username);
        }
    }

);

    // Fetch default user's repositories on load
    fetchRepositories("your-github-username");
}

);
