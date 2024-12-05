const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('Education') as HTMLInputElement).value
    const experience = (document.getElementById('Experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    const resumeHtml = `
        <h2><b>Editable Resume</b></h>
    <h3>peronal information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</p>
    <p><b>email:</b><span contenteditable="true">${email}</p>
     <p><b>phone:</b><span contenteditable="true">${phone}</p>

     <h3>education</h3>
     <p contenteditable="true">${education}</p>

          <h3>experience</h3>
     <p contenteditable="true">${experience}</p>

          <h3>skills</h3>
     <p contenteditable="true">${skills}</p>

`;

if(resumeDisplayElement) {
    resumeDisplayElement.innerHTML=resumeHtml;
}else{
    console.error('the resume display element is missing');
}
});