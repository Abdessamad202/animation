// Typing animation
// ****************************** //
const typed = document.querySelector('.typed');
const strings = ["Hello There ...", "","This is a typing animation example","Made By Abdessamad"]; // Array of strings to display

const options = {
  strings: strings,
  typeSpeed: 40,
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
// Smooth animation cards
// ****************************** //
anime({
  targets: '.child', // Select multiple elements
  translateX: [-100, 0],
  opacity: [0, 1],
  delay: anime.stagger(500), // Stagger the delay by 100ms
  duration: 500,
  direction: 'alternate',
  loop: true,

  easing: 'easeOutQuad'
});
// ****************************** //