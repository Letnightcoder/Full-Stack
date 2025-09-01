## 🧾 1. Introduction to CSS

**What is CSS?**

CSS (Cascading Style Sheets) is used to style and layout HTML elements.

**Use Cases:**

- Apply colors, fonts, spacing
- Create responsive layouts
- Control animations and transitions

### 1. **Understanding Syntax, Selectors, and Comments in CSS**

### **CSS Syntax**:

CSS rules consist of:

- **Selector**: Specifies which HTML elements to style.
- **Declaration block**: Contains one or more declarations in `{}`.
- **Declaration**: Includes a property (e.g., `color`) and a value (e.g., `red`).

**Example:**

```css
h1 {
  color: blue;
  font-size: 20px;
}
```

### **CSS Comments**:

Comments are written between `/* */` and ignored by the browser.

```css
/* This is a comment */
p {
  font-size: 16px;
}
```

---

### 2. **Adding CSS to an HTML Page**

CSS can be applied in three ways:

### **1. Inline CSS**: Add styles directly to an element using the `style` attribute.

```html
<p style="color: red; font-size: 18px;">This is inline CSS</p>
```

### **2. Internal CSS**: Add styles inside a `<style>` tag within the `<head>` section of the HTML.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <p>This is internal CSS</p>
</body>
</html>
```

### **3. External CSS**: Use a separate CSS file linked via the `<link>` tag in the HTML `<head>`.

**HTML File:**

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This is external CSS</p>
</body>
</html>
```

**CSS File (styles.css):**

```css
p {
  color: green;
  font-size: 18px;
}
```

---

### 3. **Selectors in CSS**

Selectors define which HTML elements will be styled.

| Selector | Description | Example |
| --- | --- | --- |
| **Element** | Targets all elements of a specific type. | `p { color: blue; }` |
| **Class** | Targets elements with a specific class. | `.example { font-size: 16px; }` |
| **ID** | Targets an element with a specific ID. | `#unique { color: red; }` |

### 🎯 Types of Selectors

| Selector | Description | Example |
| --- | --- | --- |
| Universal | Selects all elements | `* {}` |
| Type | Selects by tag name | `p {}` |
| Class | Selects by class name | `.box {}` |
| ID | Selects by ID | `#header {}` |
| Grouping | Selects multiple elements | `h1, h2 {}` |
| Descendant | Selects nested elements | `div p {}` |
| Child | Direct children | `ul > li {}` |
| Adjacent sibling | Next sibling only | `h1 + p {}` |
| Attribute | Based on attribute | `input[type="text"] {}` |
| Pseudo-class | Based on element state | `a:hover {}` |
| Pseudo-element | Part of element | `p::first-line {}` |

### Example:

```html
<p class="info">This is styled with a class.</p>
<p id="highlight">This is styled with an ID.</p>
<p>This is styled as an element.</p>
```

**CSS File:**

```css
p {
  color: black; /* Element selector */
}
.info {
  color: blue; /* Class selector */
}
#highlight {
  color: red; /* ID selector */
}
```

---

### 4. **Understanding Precedence of Selectors**

If multiple selectors apply to the same element, CSS determines which rule takes precedence based on specificity.

- Inline styles have the highest priority.
- ID selectors (`#id`) are more specific than class selectors (`.class`).
- Class selectors are more specific than element selectors.

**Example:**

```html
<p id="special" class="blue-text">Styled Text</p>
```

**CSS:**

```css
p { color: black; } /* Lowest precedence */
.blue-text { color: blue; } /* Higher precedence */
#special { color: red; } /* Highest precedence */
```

The text will be red because the ID selector has the highest specificity.

---

### 5. **Styling Text Using CSS**

CSS offers various properties to style text.

| Property | Description | Example Code |
| --- | --- | --- |
| **`font-family`** | Sets the font style. | `font-family: Arial, sans-serif;` |
| **`font-style`** | Sets normal, italic, or oblique text. | `font-style: italic;` |
| **`font-weight`** | Sets text boldness (e.g., `400`, `bold`). | `font-weight: bold;` |
| **`line-height`** | Adjusts line spacing. | `line-height: 1.5;` |
| **`text-decoration`** | Adds effects like underline, overline. | `text-decoration: underline;` |
| **`text-align`** | Aligns text (left, right, center). | `text-align: center;` |
| **`text-transform`** | Changes text case. | `text-transform: uppercase;` |
| **`letter-spacing`** | Adjusts space between letters. | `letter-spacing: 2px;` |
| **`word-spacing`** | Adjusts space between words. | `word-spacing: 5px;` |
| **`text-shadow`** | Adds shadow to text. | `text-shadow: 2px 2px 4px gray;` |

### Example:

```html
<p style="
  font-family: 'Arial', sans-serif;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px gray;">
  Styled Text Example
</p>
```

---

### 1. **Working with Colors in CSS**

CSS allows you to define colors using various formats.

| Format | Description | Example Code |
| --- | --- | --- |
| **Name** | Predefined color names. | `color: red;` |
| **RGB** | Specifies Red, Green, and Blue values. | `color: rgb(255, 0, 0);` |
| **HEX** | Hexadecimal representation of RGB. | `color: #ff0000;` |
| **HSL** | Hue, Saturation, Lightness. | `color: hsl(0, 100%, 50%);` |
| **RGBA** | RGB with transparency (Alpha). | `color: rgba(255, 0, 0, 0.5);` |
| **HSLA** | HSL with transparency (Alpha). | `color: hsla(0, 100%, 50%, 0.5);` |

### Example:

```html
<p style="color: rgb(255, 0, 0);">This is red using RGB.</p>
<p style="color: #00ff00;">This is green using HEX.</p>
<p style="color: hsl(240, 100%, 50%);">This is blue using HSL.</p>
<p style="color: rgba(255, 0, 0, 0.5);">This is semi-transparent red.</p>
```

---

### 2. **Working with CSS Units**

CSS uses different units to define sizes.

| Unit | Description | Example |
| --- | --- | --- |
| **`%`** | Relative to the parent element. | `width: 50%;` |
| **`px`** | Absolute pixels. | `font-size: 16px;` |
| **`rem`** | Relative to the root element’s font size. | `margin: 1rem;` |
| **`em`** | Relative to the parent element’s font size. | `padding: 2em;` |
| **`vw`** | Percentage of the viewport width. | `width: 50vw;` |
| **`vh`** | Percentage of the viewport height. | `height: 100vh;` |
| **`min`** | Minimum value between two units. | `width: min(50vw, 400px);` |
| **`max`** | Maximum value between two units. | `height: max(100px, 10%);` |

---

### 3. **Working with Borders and Border Styling**

| Property | Description | Example Code |
| --- | --- | --- |
| **`border`** | Sets the border width, style, and color. | `border: 2px solid black;` |
| **`border-radius`** | Rounds the corners. | `border-radius: 10px;` |
| **`border-style`** | Specifies style (`solid`, `dashed`, etc.). | `border-style: dashed;` |
| **`border-width`** | Specifies the border thickness. | `border-width: 5px;` |
| **`border-color`** | Sets border color. | `border-color: red;` |

### Example:

```html
<div style="border: 3px solid blue; border-radius: 10px; padding: 10px;">This box has a border.</div>
```

---

### 4. **Working with Box Properties**

| Property | Description | Example Code |
| --- | --- | --- |
| **`margin`** | Space outside the element. | `margin: 20px;` |
| **`padding`** | Space inside the element. | `padding: 15px;` |
| **`box-sizing`** | Includes padding and border in total size. | `box-sizing: border-box;` |
| **`width`** | Defines the element’s width. | `width: 300px;` |
| **`height`** | Defines the element’s height. | `height: 200px;` |

### Example:

```html
<div style="margin: 20px; padding: 15px; box-sizing: border-box; width: 50%; height: 100px; border: 2px solid black;">
  Box properties demo
</div>
```

---

### 5. **Understanding Background Properties**

| Property | Description | Example Code |
| --- | --- | --- |
| **`background-color`** | Sets the background color. | `background-color: lightblue;` |
| **`background-image`** | Sets a background image. | `background-image: url(image.jpg);` |
| **`background-size`** | Specifies the size of the background image. | `background-size: cover;` |
| **`background-attachment`** | Fixes the image while scrolling. | `background-attachment: fixed;` |
| **`background-repeat`** | Controls image repetition. | `background-repeat: no-repeat;` |
| **`background-position`** | Aligns the image. | `background-position: center;` |
| **`linear-gradient`** | Creates a gradient. | `background: linear-gradient(to right, red, blue);` |

### Example:

```html
<div style="background-color: lightblue; background-image: url('background.jpg'); background-size: cover; background-attachment: fixed; height: 200px;">
  Background properties demo
</div>
```

---

### 6. **Implementing Shadow Property**

| Property | Description | Example Code |
| --- | --- | --- |
| **`box-shadow`** | Adds shadow to a box. | `box-shadow: 5px 5px 10px gray;` |
| **`text-shadow`** | Adds shadow to text. | `text-shadow: 2px 2px 4px black;` |

### Example:

```html
<div style="width: 200px; height: 100px; background: lightgreen; box-shadow: 5px 5px 10px gray;">
  Box Shadow Example
</div>
<p style="text-shadow: 2px 2px 5px red;">Text Shadow Example</p>
```

---

### 1. **Applying Display Properties**

CSS `display` properties define how elements are rendered on the page.

| Value | Description |
| --- | --- |
| **`inline`** | The element flows inline with other content; no line breaks. |
| **`block`** | The element starts on a new line and spans the full width. |
| **`inline-block`** | Like `inline`, but allows setting height and width. |
| **`flex`** | Makes the container a flexible box, enabling Flexbox layout. |
| **`grid`** | Enables grid-based layout for the container. |
| **`none`** | Hides the element (it is not rendered). |

### Example:

```html
<div style="display: inline;">Inline Element</div>
<div style="display: block;">Block Element</div>
<div style="display: flex;">Flex Container</div>
<div style="display: none;">Hidden Element</div>
```

---

### 2. **Introduction to Flexbox for Aligning and Structure**

Flexbox is a CSS layout model for aligning and distributing items in a container.

| Property | Description | Example |
| --- | --- | --- |
| **`flex-direction`** | Defines the direction of items (`row`, `column`). | `flex-direction: row;` |
| **`order`** | Changes the order of flex items. | `order: 2;` |
| **`flex-wrap`** | Controls wrapping of items. | `flex-wrap: wrap;` |
| **`flex-grow`** | Defines how much an item can grow. | `flex-grow: 1;` |
| **`flex-shrink`** | Defines how much an item can shrink. | `flex-shrink: 1;` |
| **`justify-content`** | Aligns items horizontally. | `justify-content: space-between;` |
| **`align-items`** | Aligns items vertically. | `align-items: center;` |
| **`align-content`** | Aligns multi-line flex items. | `align-content: space-around;` |
| **`align-self`** | Aligns a single item differently. | `align-self: flex-end;` |
| **`flex-basis`** | Sets the base size of a flex item. | `flex-basis: 100px;` |

### Example:

```html
<div style="display: flex; justify-content: space-between; align-items: center; height: 100px; border: 1px solid black;">
  <div style="flex-grow: 1;">Item 1</div>
  <div style="flex-grow: 2;">Item 2</div>
  <div style="flex-grow: 1;">Item 3</div>
</div>
```

---

### 3. **Understanding Flex Grid for Making Grids**

CSS Grid layout creates two-dimensional layouts.

| Property | Description | Example |
| --- | --- | --- |
| **`grid-template-rows`** | Defines row structure. | `grid-template-rows: 100px 200px;` |
| **`grid-template-columns`** | Defines column structure. | `grid-template-columns: 1fr 2fr;` |
| **`gap`** | Sets space between grid items. | `gap: 20px;` |
| **`grid-area`** | Defines where an item is placed. | `grid-area: 1 / 1 / 2 / 3;` |

### Example:

```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
  <div style="background: lightblue;">Item 1</div>
  <div style="background: lightgreen;">Item 2</div>
  <div style="background: lightcoral;">Item 3</div>
  <div style="background: lightgoldenrodyellow;">Item 4</div>
</div>
```

---

### 4. **Working with Positional Properties**

| Property | Description | Example Code |
| --- | --- | --- |
| **`static`** | Default position (follows document flow). | `position: static;` |
| **`relative`** | Position relative to its normal position. | `position: relative; top: 10px;` |
| **`absolute`** | Positioned relative to the nearest positioned ancestor. | `position: absolute; left: 20px;` |
| **`fixed`** | Fixed to the viewport, unaffected by scrolling. | `position: fixed; bottom: 10px;` |
| **`sticky`** | Toggles between relative and fixed. | `position: sticky; top: 0;` |

### Example:

```html
<div style="position: relative; top: 20px;">Relative Positioned</div>
<div style="position: absolute; left: 50px;">Absolute Positioned</div>
<div style="position: fixed; bottom: 10px;">Fixed Positioned</div>
<div style="position: sticky; top: 0;">Sticky Positioned</div>
```

---

### 5. **Understanding Overflow**

| Property | Description | Example Code |
| --- | --- | --- |
| **`visible`** | Content overflows outside the box. | `overflow: visible;` |
| **`hidden`** | Hides overflow content. | `overflow: hidden;` |
| **`scroll`** | Adds scrollbars for overflow content. | `overflow: scroll;` |

### Example:

```html
<div style="width: 200px; height: 100px; overflow: scroll; border: 1px solid black;">
  This is a long content that requires scrolling.
</div>
```

---

### 6. **Working with Grouping Selectors**

Grouping selectors apply the same styles to multiple elements.

```css
h1, h2, p {
  color: blue;
  font-family: Arial;
}
```

### Example:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>Paragraph</p>
```

---

### 7. **Why We Use Nested Selectors**

Nested selectors allow targeting child elements or elements in a specific structure.

```css
.container div {
  color: red;
}
```

### Example:

```html
<div class="container">
  <div>Nested Div - Styled</div>
  <p>Paragraph - Not Styled</p>
</div>
```

### 8. Flexbox

**Container Properties:**

```css
display: flex;
flex-direction: row | column;
justify-content: center | space-between;
align-items: center;

```

**Item Properties:**

```css
flex: 1;
align-self: flex-start;
order: 2;

```

---

### 9. Grid Layout

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
gap: 20px;

```

**Position Items:**

```css
grid-column: 1 / 3;
grid-row: 2 / 4;

```

---

### 10. Typography

```css
font-family: Arial, sans-serif;
font-size: 18px;
font-weight: bold;
line-height: 1.5;
text-align: center;
text-decoration: underline;
text-transform: uppercase;

```

---

### 1. **Applying Pseudo-Classes and Pseudo-Elements**

Pseudo-classes and pseudo-elements allow you to style elements based on their states or insert content before/after an element.

| Selector | Description | Example Code |
| --- | --- | --- |
| **`:hover`** | Styles an element when hovered over. | `button:hover { color: red; }` |
| **`:focus`** | Styles an element when focused (e.g., inputs). | `input:focus { border-color: blue; }` |
| **`:active`** | Styles an element when actively clicked. | `a:active { color: green; }` |
| **`::before`** | Inserts content before an element. | `p::before { content: "Start: "; }` |
| **`::after`** | Inserts content after an element. | `p::after { content: " - End"; }` |

### Example:

```html
<button>Hover Me</button>
<p>Focus on me.</p>
<style>
  button:hover {
    background-color: lightblue;
  }
  p:focus {
    outline: 2px solid blue;
  }
  p::before {
    content: "Prefix: ";
  }
  p::after {
    content: " - Suffix.";
  }
</style>
```

---

### 2. **Learning CSS Transitions**

CSS transitions allow smooth animations between state changes.

| Property | Description | Example Code |
| --- | --- | --- |
| **`property`** | Specifies the property to animate. | `transition-property: background;` |
| **`duration`** | Time the transition takes. | `transition-duration: 0.5s;` |
| **`timing-function`** | Defines the speed curve. | `transition-timing-function: ease;` |
| **`delay`** | Adds a delay before the animation starts. | `transition-delay: 0.2s;` |

### Example:

```html
<div class="box"></div>
<style>
  .box {
    width: 100px;
    height: 100px;
    background: red;
    transition: background 0.5s ease, transform 1s;
  }
  .box:hover {
    background: blue;
    transform: rotate(45deg);
  }
</style>
```

---

### 3. **Creating with `Transform`**

Transforms modify the shape, size, or position of an element.

| Function | Description | Example Code |
| --- | --- | --- |
| **`translate`** | Moves an element on X/Y axes. | `transform: translate(50px, 20px);` |
| **`rotate`** | Rotates an element. | `transform: rotate(45deg);` |
| **`scale`** | Scales an element. | `transform: scale(1.5);` |
| **`skew`** | Skews an element. | `transform: skew(20deg, 10deg);` |

### Example:

```html
<div class="transform-box"></div>
<style>
  .transform-box {
    width: 100px;
    height: 100px;
    background: green;
    transform: rotate(15deg) scale(1.2);
  }
</style>
```

---

### 4. **Working with 3D Transform**

3D transforms add depth to animations or transformations.

| Function | Description | Example Code |
| --- | --- | --- |
| **`translate3d()`** | Moves in 3D space (X, Y, Z). | `transform: translate3d(50px, 20px, 30px);` |
| **`scale3d()`** | Scales in 3D space. | `transform: scale3d(1.2, 1.5, 1);` |
| **`rotate3d()`** | Rotates in 3D space. | `transform: rotate3d(1, 1, 0, 45deg);` |
| **`perspective`** | Adds perspective to 3D elements. | `perspective: 500px;` |

### Example:

```html
<div class="cube"></div>
<style>
  .cube {
    width: 100px;
    height: 100px;
    background: pink;
    transform: rotateY(45deg) translateZ(50px);
    perspective: 500px;
  }
</style>
```

---

### 5. **Understanding CSS Animation (`@keyframes`)**

CSS animations define keyframes for transitions.

| Property | Description | Example Code |
| --- | --- | --- |
| **`@keyframes`** | Defines the animation steps. | `@keyframes slide { 0% { left: 0; } 100% { left: 100px; } }` |
| **`animation-name`** | Links the element to the keyframes. | `animation-name: slide;` |
| **`animation-duration`** | Duration of the animation. | `animation-duration: 2s;` |
| **`animation-timing-function`** | Speed curve. | `animation-timing-function: ease;` |
| **`animation-delay`** | Delay before starting. | `animation-delay: 1s;` |
| **`animation-iteration-count`** | Number of repetitions. | `animation-iteration-count: infinite;` |

### Example:

```html
<div class="animate-box"></div>
<style>
  @keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(200px); }
  }
  .animate-box {
    width: 100px;
    height: 100px;
    background: orange;
    animation: slide 3s infinite alternate ease;
  }
</style>
```

---

### Responsive with CSS 🖥️

### 1. **Difference Between Mobile-First and Desktop-First Design**

| Feature | Mobile-First Design | Desktop-First Design |
| --- | --- | --- |
| **Definition** | Design starts for smaller screens and scales up. | Design begins for larger screens and scales down. |
| **Focus** | Prioritizes usability on mobile devices. | Prioritizes usability on desktops. |
| **CSS Media Queries** | Uses `min-width` to add styles for larger screens. | Uses `max-width` to adjust for smaller screens. |
| **Example Media Query** | `@media (min-width: 768px) { ... }` | `@media (max-width: 768px) { ... }` |

---

### 2. **Measurement Units for Responsive Design**

| Unit | Description | Example |
| --- | --- | --- |
| **`px`** | Fixed size; not responsive. | `font-size: 16px;` |
| **`%`** | Relative to parent element. | `width: 50%;` |
| **`rem`** | Relative to the root font size. | `font-size: 2rem;` |
| **`in`** | Absolute unit (1 inch = 96px). | `width: 2in;` |
| **`mm`** | Absolute unit (1mm ≈ 3.78px). | `width: 10mm;` |

---

### 3. **Using the Viewport Meta Tag**

The viewport meta tag ensures proper scaling of websites on different devices.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| Attribute | Description |
| --- | --- |
| **`width=device-width`** | Sets the viewport to the device's width. |
| **`initial-scale=1.0`** | Sets the initial zoom level. |

---

### 4. **Setting Up Images and Typography for Responsiveness**

### **Responsive Images**

- Use **`max-width`** and **`height: auto;`** for images to scale proportionally.

```html
<img src="image.jpg" style="max-width: 100%; height: auto;">
```

### **Responsive Typography**

- Use relative units like `%`, `em`, or `rem`.

```css
h1 {
  font-size: 2rem; /* Scales with root font size */
}
```

---

### 5. **What Are Media Queries?**

Media queries apply styles based on device characteristics (e.g., screen size, orientation).

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

| Feature | Description |
| --- | --- |
| **`@media`** | Defines a media query. |
| **`max-width`** | Targets devices with width **below** a threshold. |
| **`min-width`** | Targets devices with width **above** a threshold. |

### Example:

```css
/* Mobile-first design */
body {
  font-size: 16px;
}
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

---

### 6. **Using CSS Functions (`clamp`, `max`, `min`)**

### **`clamp()`**

Sets a value within a range:

```css
font-size: clamp(16px, 5vw, 24px); /* Min 16px, max 24px, scales with 5% of viewport width */
```

### **`max()`**

Chooses the **largest** value:

```css
width: max(50%, 300px);
```

### **`min()`**

Chooses the **smallest** value:

```css
width: min(50%, 300px);
```

---

### 7. **Understanding HTML Structure for Responsive Design**

1. **Use semantic HTML for accessibility** (e.g., `<header>`, `<section>`, `<article>`).
2. **Group elements logically** for easier styling.
3. **Structure example for a responsive layout:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    header, main, footer {
      padding: 20px;
      text-align: center;
    }
    @media (min-width: 768px) {
      main {
        display: flex;
        justify-content: space-around;
      }
    }
  </style>
</head>
<body>
  <header>Responsive Header</header>
  <main>
    <section>Section 1</section>
    <section>Section 2</section>
  </main>
  <footer>Responsive Footer</footer>
</body>
</html>
```

---