// Get reference to elements
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const btnGroup = document.querySelector('.btn-group');
const wrapper = document.querySelector('.wrapper');

// Function to handle Yes button click
function handleYesButtonClick() {
 window.location.href = 'index.html';
      }
  // Hide the buttons and question
 



 

// ... (handleNoButtonClick remains the same)
 function handleNoButtonClick() {
        window.location.href = 'indexthird.html';
      }


// Event listeners for button clicks
yesBtn.addEventListener('click', handleYesButtonClick);
noBtn.addEventListener('click', handleNoButtonClick);