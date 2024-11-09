// Access form and display section with type assertions
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

// Function to generate resume
function generateResume(): void {
  // Retrieve input values with type assertions
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const work = (document.getElementById("work") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',');

  // Clear previous resume display content
  resumeDisplay.innerHTML = `<h2>Your Resume</h2>`;

  // Array of sections with titles and content for dynamic display
  const sections: { title: string; content: string }[] = [
    {
      title: "Personal Information",
      content: `<strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}`,
    },
    {
      title: "Education",
      content: education,
    },
    {
      title: "Work Experience",
      content: work,
    },
    {
      title: "Skills",
      content: `<ul class="skill-list">${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>`,
    },
  ];

  // Append each section dynamically to the resume display
  sections.forEach((section) => {
    const sectionElement = document.createElement("div");
    sectionElement.classList.add("resume-section");
    sectionElement.innerHTML = `<h3>${section.title}</h3><p>${section.content}</p>`;
    resumeDisplay.appendChild(sectionElement);
  });
}

// Button event listener with optional chaining
document.getElementById("generate-resume")?.addEventListener("click", generateResume);
