document.addEventListener('DOMContentLoaded', () => {
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLDivElement;
if (skillsSection) {skillsSection.style.display = 'block';}
if (toggleSkillsButton && skillsSection) {
toggleSkillsButton.addEventListener('click', () => {
if (skillsSection.style.display === 'none') {
skillsSection.style.display = 'block';
} else {
skillsSection.style.display = 'none';
}
});
}
});
