# photo-editor
Using the latest CSS features, HTML5 custom data attributes, and ES6 template literals, the user can edit a photo.

## How it works
This program leverages Scoped CSS Variables along with ES6.

What makes this small program efficient and DRY is
```JavaScript
const suffix = this.dataset.sizing || "";
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```
## Instructions
Use the sliders to adjust the photo.

### See for yourself
https://jonfromnyc.github.io/photo-editor/
