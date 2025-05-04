const roleSelect = document.getElementById('role');
const dynamicFields = document.getElementById('dynamicFields');
const profileForm = document.getElementById('profileForm');

// Load role-specific fields
roleSelect.addEventListener('change', loadFields);

function loadFields() {
  const role = roleSelect.value;
  dynamicFields.innerHTML = ''; // Clear previous

  if (role === 'student') {
    dynamicFields.innerHTML = `
      <input type="text" id="learningGoals" placeholder="Your Learning Goals" required />
      <input type="text" id="skills" placeholder="Skills You Want to Learn" required />
    `;
  } else if (role === 'mentor') {
    dynamicFields.innerHTML = `
      <input type="text" id="expertise" placeholder="Your Area of Expertise" required />
      <input type="text" id="availableSlots" placeholder="Availability (e.g., Mon-Fri 5-7 PM)" required />
    `;
  }
}

loadFields(); // default load

// Submit Form
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const profile = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    role: roleSelect.value
  };

  if (profile.role === 'student') {
    profile.learningGoals = document.getElementById('learningGoals').value;
    profile.skills = document.getElementById('skills').value;
  } else {
    profile.expertise = document.getElementById('expertise').value;
    profile.availableSlots = document.getElementById('availableSlots').value;
  }

  // Save to localStorage
  localStorage.setItem('userProfile', JSON.stringify(profile));

  // Redirect to dashboard or success page
  window.location.href = 'dashboard.html';
});
