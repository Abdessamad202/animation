# animation
### This is a rebo for useful animation that i'll need so i can copy it directly
# Moving Text, Typing Text, Smooth Animation Cards, and Button Hover Animation

This project demonstrates various **text and button animations** using **Vanilla HTML, CSS, and JavaScript**. It includes animated scrolling text, typing effects, smooth card animations, and button hover effects.

## 💻 **Project Structure**
- **index.html**: Contains the HTML structure of the project.
- **style.css**: Contains all the styles for the animations.
- **script.js**: Contains JavaScript functionality for animations.

---

## 🧩 **Features**
### 1. Moving Text
A text element moves smoothly from **right to left** across the screen.
- **HTML:**
  ```html
  <div class="scrolling-text">
      <div>This text moves from right to left!</div>
  </div>
  ```
- **CSS Example:**
  ```css
  .scrolling-text div {
      animation: scroll-text 10s linear infinite;
  }
  @keyframes scroll-text {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
  }
  ```

---

### 2. Typing Text Animation
A **typing text effect** is achieved using the **Typed.js** library.
- **HTML:**
  ```html
  <div class="typed-container">
      <span class="typed"></span>
  </div>
  ```
- **JavaScript:**
  ```javascript
  new Typed('.typed', {
      strings: ["Welcome to the Animation Project!", "Enjoy various animations!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
  });
  ```

---

### 3. Smooth Animation Cards
A **parent container** holds multiple **smoothly animated cards**.
- **HTML:**
  ```html
  <div class="parent">
      <div class="child">BOX 1</div>
      <div class="child">BOX 2</div>
      <div class="child">BOX 3</div>
      <div class="child">BOX 4</div>
  </div>
  ```
- **CSS Example:**
  ```css
  .child {
      transition: transform 0.3s ease-in-out;
  }
  .child:hover {
      transform: scale(1.1);
  }
  ```

---

### 4. Button Hover Animation
A **button with a hover animation effect** that changes its style when hovered over.
- **HTML:**
  ```html
  <div class="button-container">
      <button class="btn">Hover Me</button>
  </div>
  ```
- **CSS Example:**
  ```css
  .btn {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
  }
  .btn:hover {
      background-color: #0056b3;
  }
  ```

---

## 📦 **External Libraries Used**
- **Typed.js** (for typing text effect)
  - CDN: `https://cdn.jsdelivr.net/npm/typed.js@2.0.12`

- **Anime.js** (for animations)
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js`

---

## 🚀 **How to Run the Project**
1. Clone the repository or download the project files.
2. Open the `index.html` file in your browser to see the animations.

---

## 🎨 **Customization**
You can customize:
- Text strings for the **typing animation** in `script.js`.
- **Animation speed and style** in `style.css`.

---

## 📋 **File Overview**
| File       | Description                         |
|------------|-------------------------------------|
| index.html | Main HTML file with project content  |
| style.css  | Styles for animations               |
| script.js  | JavaScript for interactive animations |

---

## 🌟 **Project Showcase**
This project is a great way to practice and showcase your skills in:
- HTML5 & CSS3
- JavaScript libraries (Typed.js, Anime.js)
- Creating smooth animations
- Button hover effects

---

Enjoy creating smooth, interactive animations with this project! 🎉

