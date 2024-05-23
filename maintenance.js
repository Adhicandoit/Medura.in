document.addEventListener('DOMContentLoaded', () => {
  const popupBtn = document.getElementById('popupBtn');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close');
  const emailForm = document.getElementById('emailForm');

  // Show the popup when the "SUBSCRIBE" button is clicked
  popupBtn.addEventListener('click', () => {
      popup.style.display = 'flex';
  });

  // Close the popup when the close button is clicked
  closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  // Close the popup when clicking outside the popup content
  window.addEventListener('click', (event) => {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  });

  // Handle form submission
  emailForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Handle form submission, e.g., send email data to server
      alert('Thank you for subscribing!');
      popup.style.display = 'none';
  });
});

