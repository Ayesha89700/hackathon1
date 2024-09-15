//Reference to the display area and form
var form = document.getElementById(`resume-form`) as HTMLFormElement;
var resumeDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement;

//This is Handle form submission
form.addEventListener(`submit`, (event:Event) => {
    event.preventDefault(); //it will prevent page reloading

    //It will collect input values
    const name = (document.getElementById(`name`)as HTMLInputElement).value
    const email = (document.getElementById(`email`)as HTMLInputElement).value
    const contact = (document.getElementById(`contact`)as HTMLInputElement).value
    const qualification = (document.getElementById(`qualification`)as HTMLInputElement).value
    const skills = (document.getElementById(`skills`)as HTMLInputElement).value
    const experience = (document.getElementById(`experience`)as HTMLInputElement).value


//now geenrate the resume content dynamically
const resumeHTML = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}<p>
<p><b>Email:</b>${email}<p>
<p><b>Contact:</b>${contact}<p>

<h3>Qualification</h3>
<p>${qualification}</p>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Experience</h3>
<p>${experience}</p>
`;
//display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML; 
}else {
    console.log(`The resume is missing`);
}
});



