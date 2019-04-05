// Wait for page to load scripts
window.onload = function() {
  console.log('Portfolio has loaded');

  // * Email Modal + Overlay
  // Grab the modal overlay which contains the email form
  let modalOverlay = document.getElementById('email-modal');

  // Grab the button that opens the modal when clicked
  let emailBtn = document.getElementById('btn-email');

  // Grab the <span> element (x) that closes the modal when clicked
  let closeModalX = document.getElementsByClassName('close-modal-x')[0];

  // When the user clicks on the submit btn, open the modal
  emailBtn.onclick = function() {
    modalOverlay.style.display = 'flex';
    console.log('clicked button');
  };

  // When the user clicks on the <span> (x), close the modal
  closeModalX.onclick = function() {
    modalOverlay.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal form, close the modal
  window.onclick = function(event) {
    if (event.target == modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  };
};
