// Example of dynamically creating bubbles
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  document.querySelector('.loading-container').appendChild(bubble);
}

// Example of adding event listener to control animation
document.addEventListener('DOMContentLoaded', () => {
  // You can add or remove bubbles dynamically
  // createBubble();
});