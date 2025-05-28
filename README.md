# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This challenge increases my knowledge in writing programs. I am very excited🔥🔥🔥
### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/Browser%20extensions%20manager%20UI.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/MRZazuli/Browser-extensions)
- Live Site URL: [Add live site URL here](https://mrzazuli.github.io/Browser-extensions/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

I usually using grid with standard code and this challenge i used "repeat". I practice repeating the button functions.

```css
.card-groups {
  grid-template-columns: repeat(3, 1fr);
}
```
```js
removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cards = button.closest(".card");
    if (cards) {
      cards.remove();
    }
  });
});
```

### Continued development

I focus to build responsive website 

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/zazuli746)

