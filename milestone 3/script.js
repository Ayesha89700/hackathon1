//Reference to the display area and form
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//This is Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //it will prevent page reloading
    //It will collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var qualification = document.getElementById("qualification").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    //now geenrate the resume content dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "<p>\n<p><b>Email:</b>").concat(email, "<p>\n<p><b>Contact:</b>").concat(contact, "<p>\n\n<h3>Qualification</h3>\n<p>").concat(qualification, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("The resume is missing");
    }
});
