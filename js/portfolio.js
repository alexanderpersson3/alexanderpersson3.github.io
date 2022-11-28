// const loaderContainer = document.querySelector('.loader-container');

// const displayLoading = () => {
//   loaderContainer.style.display = 'block'
// }

// const hideLoading = () => {
//   loaderContainer.style.opacity = 0
//   loaderContainer.classList.add('hide')
// }

window.addEventListener('load', () => {
  const loaderContainer = document.querySelector('#preloader')
  fetch('https://api.github.com/users/alexanderpersson3/repos?per_page=100')
    .then((result) => result.json())
    .then((result) => {
      printGitReporProjects('new-first-column', result)
    })
    .catch((err) => console.log(err))
    .finally(() => {
      loaderContainer.style.opacity = 0
      loaderContainer.classList.add('hide')
    })
})

function printGitReporProjects(nodeToAppend, data) {
  function getImageUrl(projectName) {
    return `images/${projectName}.png`
  }

  const parentNode = $(`#${nodeToAppend}`)
  data.forEach((element) => {
    parentNode.append(`<a href="${element.html_url}" class="image-item">
        <img src="${getImageUrl(element.name)}" alt="images">
        <div class="overlay">
            <span>${element.description}</span>
        </div>
    </a>`)
  })
}
