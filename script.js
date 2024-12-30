// Typing animation
// ****************************** //
const typed = document.getElementById('typed');
const strings = ["Hello World", ""]; // Array of strings to display

const options = {
  strings: strings,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  cursorChar: '|', // Display a cursor character after typing
  showCursor: true, // Show the cursor
  smartBackspace: true, // Optimize backspace behavior for better typing experience
  contentType: 'html', // Allow HTML tags in strings for richer content
};
const typedInstance = new Typed(typed, options);
// ****************************** //
