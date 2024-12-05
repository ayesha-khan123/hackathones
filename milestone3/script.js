var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n        <h2><b>Resume</b></h>\n    <h3>peronal information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n     <p><b>phone:</b>").concat(phone, "</p>\n\n     <h3>education</h3>\n     <p>").concat(education, "</p>\n\n          <h3>experience</h3>\n     <p>").concat(experience, "</p>\n\n          <h3>skills</h3>\n     <p>").concat(skills, "</p>\n\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('the resume display element is missing');
    }
});
