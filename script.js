// Get reference to elements
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const btnGroup = document.querySelector('.btn-group');
const wrapper = document.querySelector('.wrapper');

// Function to handle Yes button click
function handleYesButtonClick() {
  // Hide the buttons and question
  btnGroup.style.display = 'none';
  wrapper.querySelector('.question').style.display = 'none';



  // Create a password input box
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Enter Password';
  passwordInput.classList.add('password-input');

  // Apply styles directly to the password input
  passwordInput.style.width = '100px'; // Adjust width as needed
  passwordInput.style.marginLeft = '100px'; // Adjust margin as needed
  passwordInput.style.outline = '2px solid red'; // Adding red outline

  // Create a submit button for the password
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.classList.add('submit-btn');

  // Append the password input and submit button to the wrapper
  wrapper.appendChild(passwordInput);
  wrapper.appendChild(submitBtn);

  // Show the "Ape password?" text
  const passwordText = wrapper.querySelector('.password-text');
  passwordText.style.display = 'block'; // Show the text

  // Event listener for the submit button
  submitBtn.addEventListener('click', function () {
    const password = passwordInput.value;
    // Check if the password is correct (for demonstration purposes, the password is 'password')
    if (password === '23052009') {
      // Redirect to a new HTML website
      window.location.href = 'indexsecond.html';
    } else {
      alert('Salah je password jangan tipu');
    }
  });
}

// ... (handleNoButtonClick remains the same)
 function handleNoButtonClick() {
        window.location.href = 'indexthird.html';
      }


// Event listeners for button clicks
yesBtn.addEventListener('click', handleYesButtonClick);
noBtn.addEventListener('click', handleNoButtonClick);