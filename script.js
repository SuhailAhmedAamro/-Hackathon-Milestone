// Ensure that this code runs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
// Get the button and the skills section
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Set the initial display state of the skills section
if (skillsSection) {
skillsSection.style.display = 'block'; // Initially visible
}
// Add event listener to toggle the skills section
if (toggleSkillsButton && skillsSection) {
toggleSkillsButton.addEventListener('click', function () {
// Toggle the display state of the skills section
if (skillsSection.style.display === 'none') {
skillsSection.style.display = 'block';
}
else {
skillsSection.style.display = 'none';
}
});
}
});
