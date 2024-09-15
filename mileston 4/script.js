//Refer to the display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //it will prevent page reloading
    //it will collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var qualification = document.getElementById("qualification").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    //now generate resume content dynamically
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span><p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span><p>\n<p><b>Contact:</b><span contenteditable=\"true\">").concat(contact, "</span><p>\n\n<h3>Qualification</h3>\n<p contenteditable=\"true\">").concat(qualification, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n");
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("the resume is missing");
    }
});
