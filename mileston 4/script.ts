//Refer to the display area
var form = document.getElementById(`resume-form`) as HTMLFormElement;
var resumeDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement;

//form submission
form.addEventListener(`submit`,(event:Event) => {
    event.preventDefault();//it will prevent page reloading

//it will collect input values
const name = (document.getElementById(`name`)as HTMLInputElement).value
const email = (document.getElementById(`email`)as HTMLInputElement).value
const contact = (document.getElementById(`contact`)as HTMLInputElement).value
const qualification = (document.getElementById(`qualification`)as HTMLInputElement).value
const skills = (document.getElementById(`skills`)as HTMLInputElement).value
const experience = (document.getElementById(`experience`)as HTMLInputElement).value

//now generate resume content dynamically
const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span><p>
<p><b>Email:</b><span contenteditable="true">${email}</span><p>
<p><b>Contact:</b><span contenteditable="true">${contact}</span><p>

<h3>Qualification</h3>
<p contenteditable="true">${qualification}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>
`;
//display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else {
    console.log(`the resume is missing`);
}

});
