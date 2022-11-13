window.addEventListener("load", () => {

    fetch("https://api.github.com/users/alexanderpersson3/repos?per_page=100")
    .then( (result) => result.json() )
    .then( (result) => {
        printGitReporProjects('new-first-column', result);
    } )
    .catch( err => console.log(err) )
})

function printGitReporProjects(nodeToAppend, data) {

    function getImageUrl(projectName) {
        return `images/${projectName}.png`;
    }

    const parentNode = $(`#${nodeToAppend}`);
    data.forEach(element => {
        parentNode.append(`<a href="${element.html_url}" class="image-item">
        <img src="${getImageUrl(element.name)}" alt="images">
        <div class="overlay">
            <span>${element.description}</span>
        </div>
    </a>`);
    });
}