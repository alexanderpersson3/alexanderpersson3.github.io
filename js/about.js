window.addEventListener("load", () => {
    fetch('/js/data.json')
    .then( result => result.json() )
    .then( (result) => {
        printJobExperience(result.employment);
        printEducation(result.education);
    } )
    .catch( err => console.log(err) );
});

function printJobExperience(experience) {
    const jobExNode = $("#job-experience");
    experience.forEach( element => {
        jobExNode.append(`<div class="box">
            <div class="year_company">
                <h5>${element.heading}</h5>
            </div>
            <div class="text">
                <h4>${element.jobTitle}</h4>
            </div>
            <div>
                <p>${element.text}</p>
            </div>
        </div>`);
    });
}

function printEducation(education) {
    const eduContainer = $("#edu-container");
    education.forEach( element => {
        eduContainer.append(`<li>
            <h5>${element}</h5>
        </li>`)
    })
}