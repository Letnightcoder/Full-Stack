### What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of web documents using elements and tags.

### 1. **Understanding HTML Structure**

The basic structure of an HTML document includes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

---

### 2. **Understanding Tags and Building a Simple HTML Page**

### Essential tags:

- `<!DOCTYPE html>`: Declares the document type.
- `<html>`: Root element of the page.
- `<head>`: Metadata (e.g., title, styles, and links).
- `<title>`: Title of the page.
- `<body>`: Visible content goes here.

---

### 3. **Working with Text Elements**

- **Headings (`h1` to `h6`)**: Define headings, `h1` being the largest.
- **Paragraphs (`p`)**: Used for blocks of text.
- **Line Breaks (`br`)**: Adds a new line.
- **Anchor (`a`)**: Creates hyperlinks.
- **Span (`span`)**: Inline container for text styling.
- **Code (`code`)**: Displays code snippets.
- **Preformatted Text (`pre`)**: Preserves spacing and formatting.

**Example:**

```html
<!-- Working with Text Elements -->

<h1>Main Heading</h1> <!-- h1 to h6 -->
<p>This is a paragraph of text.</p>
<p>New line here <br> after the break.</p>
<a href="https://example.com" target="_blank">Visit Example</a>
<span style="color: blue;">This text is blue.</span>
<pre>
  Preformatted text
  Line spacing preserved.
</pre>
<code>console.log('Hello, World!');</code>
```

**Paragraphs and Text Formatting:**

```html

<p>Regular paragraph text</p>
<strong>Bold/Important text</strong>
<em>Italic/Emphasized text</em>
<mark>Highlighted text</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>

<br> <!-- Line break -->
<hr> <!-- Horizontal rule/divider -->
```

---

### 4. **Working with HTML Lists**

- **Ordered List (`ol`)**: Numbered items.
- **Unordered List (`ul`)**: Bulleted items.
- **List Item (`li`)**: Represents an item in a list.

**Example:**

```html
<h2>Ordered List:</h2>
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<h2>Unordered List:</h2>
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

---

### 5. **Nested Elements in HTML**

HTML elements can contain other elements.

**Example:**

```html
<ul>
  <li>Item 1
    <ul>
      <li>Nested Item 1.1</li>
      <li>Nested Item 1.2</li>
    </ul>
  </li>
  <li>Item 2</li>
</ul>
```

**Description Lists:**

```html
<dl>
    <dt>Term 1</dt>
    <dd>Description of term 1</dd>
    <dt>Term 2</dt>
    <dd>Description of term 2</dd>
</dl>
```

---

- Link Attributes:

```jsx
// Basic Links
<a href="[https://example.com](https://example.com/)">External link</a>
<a href="page.html">Internal link</a>
<a href="#section">Link to section on same page</a>
<a [href="mailto:email@example.com](mailto:href=%22mailto:email@example.com)">Email link</a>
<a href="tel:+1234567890">Phone link</a>

// Link Attributes
<a href="<https://example.com>" target="_blank" rel="noopener">Opens in new tab</a>
<a href="document.pdf" download>Download link</a>
<a href="#" title="Tooltip text">Link with tooltip</a>

```

### 6. **Working with Media Tags**

- **Image (`img`)**: Adds images.
- **Video (`video`)**: Embeds videos.
- **Audio (`audio`)**: Embeds audio files.

**Example:**

```html
<img src="image.jpg" alt="A beautiful image" width="300" height="200">
<video controls width="320">
  <source src="video.mp4" type="video/mp4">
</video>
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
```

---

### 7. **HTML Attributes**

Attributes add properties to elements. Examples:

- `href`: Link destination (anchor).
- `target`: Specifies where to open a link.
- `alt`: Alternate text for images.
- `src`: Source file for media.
- `width`, `height`: Dimensions for elements.

**Example:**

```html
<a href="https://example.com" target="_blank">Open Example in a new tab</a>
<img src="image.jpg" alt="An image" width="400" height="300">
```

---

### 8. **Navigating Pages and Sections**

- Use `anchor` tags to link between pages or sections within a page.
- Add `id` attributes to target sections.

**Example:**

```html
<a href="#section1">Go to Section 1</a>
<a href="page2.html">Go to another page</a>

<h2 id="section1">Section 1</h2>
<p>This is Section 1.</p>
```

---

### 9. **Commenting Code in HTML**

Comments are ignored by browsers and useful for notes.

**Example:**

```html
<!-- This is a comment -->
<p>This is visible text.</p>
```

---

### 1. **Understanding and Using `div` Tags**

The `<div>` tag is a container used to group other HTML elements. It’s commonly used for layout and styling purposes.

**Example:**

```html
<div style="background-color: lightblue; padding: 10px;">
  <h2>Header inside a div</h2>
  <p>This is some text inside a div.</p>
</div>
```

---

### 2. **Understanding Semantic Tags**

Semantic tags provide meaning to the structure of your HTML, improving readability and accessibility.

### Common Semantic Tags:

- **`<article>`**: Represents a self-contained piece of content (e.g., blog post).
- **`<section>`**: Represents a section of a document.
- **`<main>`**: Represents the main content of the document.
- **`<aside>`**: Sidebar or supplementary content.
- **`<form>`**: For user input.
- **`<footer>`**: Footer section of a page or article.
- **`<header>`**: Header section of a page or article.
- **`<details>`**: Disclosure widget that can show/hide additional information.
- **`<figure>`**: Used for self-contained content, like images or charts.

**Example:**

```html
<header>
  <h1>Welcome to My Blog</h1>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>This is the content of the article.</p>
  </article>
  <aside>
    <p>Related links or ads go here.</p>
  </aside>
</main>
<footer>
  <p>Copyright © 2025</p>
</footer>
```

---

### 3. **Differentiating Between Block and Inline Elements**

- **Block Elements**: Take up the full width available (e.g., `div`, `p`, `h1`).
- **Inline Elements**: Only take up as much width as their content (e.g., `span`, `a`, `strong`).

**Example:**

```html
<div style="border: 1px solid black;">This is a block element.</div>
<span style="color: red;">This is an inline element.</span>
```

---

### 4. **Text Formatting Tags in HTML**

Used to style or format text directly.

| Tag | Purpose | Example |
| --- | --- | --- |
| `<b>` | Bold text | `<b>Bold Text</b>` |
| `<strong>` | Strong emphasis | `<strong>Strong Text</strong>` |
| `<i>` | Italic text | `<i>Italic Text</i>` |
| `<small>` | Smaller text | `<small>Smaller Text</small>` |
| `<ins>` | Inserted text (underlined) | `<ins>Inserted Text</ins>` |
| `<sub>` | Subscript text | `H<sub>2</sub>O` |
| `<sup>` | Superscript text | `E = mc<sup>2</sup>` |
| `<del>` | Deleted (strikethrough) | `<del>Deleted Text</del>` |
| `<mark>` | Highlighted text | `<mark>Important Text</mark>` |

---

### 5. **Working with HTML Symbols and Special Characters**

HTML provides entities for symbols and special characters.

| Symbol/Character | Code | Output |
| --- | --- | --- |
| Copyright | `&copy;` | © |
| Club | `&#9827;` | ♣️ |
| Left Arrow | `&larr;` | ← |
| Less Than | `&lt;` | < |
| Greater Than | `&gt;` | > |
| Ampersand | `&amp;` | & |

**Example:**

```html
<p>Copyright &copy; 2025</p>
<p>Symbol: &#9827;</p>
<p>Arrow: &larr;</p>
```

---

### 6. **Working with HTML Tables**

Tables display data in rows and columns.

- `<table>`: The table itself.
- `<tr>`: Table row.
- `<td>`: Table data (cell).
- `<th>`: Table header.

**Example:**

```html
<table border="1">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td>Data 4</td>
      <td>Data 5</td>
      <td>Data 6</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Footer content</td>
    </tr>
  </tfoot>
</table>
```

---

### 7. **More Attributes and Tags Related to Tables**

### Additional Attributes:

- `colspan`: Merges columns.
- `rowspan`: Merges rows.
- `border`: Defines the border width.
- `cellpadding`: Space between cell content and border.
- `cellspacing`: Space between cells.
- **Table Attributes:**

```html
<table border="1" cellpadding="10" cellspacing="0">
<td colspan="2">Spans 2 columns</td>
<td rowspan="2">Spans 2 rows</td>
```

**Example with `colspan` and `rowspan`:**

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td colspan="2">Merged Column</td>
  </tr>
  <tr>
    <td rowspan="2">Merged Row</td>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Row 2</td>
  </tr>
</table>
```

---

### HTML Forms and Inputs

### 1. **What is a Form and Why is it Important?**

A **form** in HTML is used to collect user inputs and send them to a server for processing. It is essential for functionalities like user registration, login, feedback, and payment submissions. Forms bridge the gap between the user interface and backend processing, enabling interactive web applications.

---

### 2. **Creating a Simple Form**

HTML forms are created using various elements to capture input:

### Basic Tags:

- **`<form>`**: The container for the form.
- **`<input>`**: Used for various types of input fields.
- **`<textarea>`**: Multiline input field.
- **`<select>`**: Dropdown menu.
- **`<button>`**: Button for submission or custom actions.
- **`<label>`**: Labels to describe inputs.

### Example:

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="username" placeholder="Enter your name" required>

  <label for="message">Message:</label>
  <textarea id="message" name="usermessage" rows="4" cols="50"></textarea>

  <label for="color">Favorite Color:</label>
  <input type="color" id="color" name="usercolor">

  <label for="country">Country:</label>
  <select id="country" name="usercountry">
    <option value="usa">USA</option>
    <option value="uk">UK</option>
    <option value="india">India</option>
  </select>

  <button type="submit">Submit</button>
</form>
```

---

### 3. **Types of Input Fields**

The `<input>` tag supports many types of fields:

| Type | Description | Example Code |
| --- | --- | --- |
| `text` | Single-line text input | `<input type="text">` |
| `checkbox` | Checkbox for multiple selections | `<input type="checkbox">` |
| `radio` | Radio button for single selection | `<input type="radio" name="gender">` |
| `color` | Color picker | `<input type="color">` |
| `file` | File upload | `<input type="file">` |
| `tel` | Telephone number input | `<input type="tel">` |
| `date` | Date picker | `<input type="date">` |
| `number` | Numeric input | `<input type="number">` |
| `range` | Slider input | `<input type="range" min="0" max="100">` |
| `submit` | Submit button | `<input type="submit" value="Submit">` |

### Example:

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$">

  <label for="gender">Gender:</label>
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female

  <label for="subscribe">Subscribe:</label>
  <input type="checkbox" id="subscribe" name="subscribe" checked>

  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">

  <button type="submit">Submit</button>
</form>
```

---

### 4. **Attributes of Form Elements**

### Key Attributes for `<form>`:

- **`method`**: HTTP method (`GET` or `POST`).
- **`action`**: URL where the form data is sent.
- **`target`**: Specifies how to display the response (`_self`, `_blank`).
- **`novalidate`**: Disables HTML5 validation.
- **`enctype`**: Data encoding type (`application/x-www-form-urlencoded`, `multipart/form-data`).

### Key Attributes for Inputs:

- **`name`**: Identifies the form data when submitted.
- **`required`**: Makes the field mandatory.
- **`placeholder`**: Hint text inside the input field.

### Example with Attributes:

```html
<form action="/submit-data" method="POST" enctype="multipart/form-data" target="_blank">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Enter your username" required>

  <label for="profile-pic">Profile Picture:</label>
  <input type="file" id="profile-pic" name="profilepic">

  <label for="range">Set Range:</label>
  <input type="range" id="range" name="range" min="1" max="10">

  <button type="submit">Upload</button>
</form>
```

---

### Media Tags in HTML

### 1. **Understanding Audio and Video Tags**

The `<audio>` and `<video>` tags in HTML are used to embed multimedia content like sound and video into a webpage.

### **Basic Syntax:**

- **`<audio>`**: Embeds audio.
- **`<video>`**: Embeds video.

**Example:**

```html
<audio src="audio.mp3" controls></audio>
<video src="video.mp4" width="400" controls></video>
```

---

### 2. **Attributes of Media Tags**

| Attribute | Description | Example |
| --- | --- | --- |
| **`src`** | Specifies the media file location. | `<audio src="song.mp3">` |
| **`width`** | Sets the width of the media player (in pixels). | `<video src="video.mp4" width="600">` |
| **`height`** | Sets the height of the media player (in pixels). | `<video src="video.mp4" height="300">` |
| **`alt`** | Alternative text for accessibility or fallback. | `<img src="image.jpg" alt="Image">` |
| **`muted`** | Mutes the audio or video by default. | `<video src="movie.mp4" muted>` |
| **`loop`** | Repeats the media file indefinitely. | `<audio src="song.mp3" loop>` |
| **`autoplay`** | Starts playing the media automatically (caution: can be intrusive). | `<video src="clip.mp4" autoplay>` |
| **`controls`** | Adds play, pause, and other controls for the user. | `<audio src="song.mp3" controls>` |

### Example with Attributes:

```html
<audio src="audio.mp3" controls loop></audio>
<video src="video.mp4" width="600" height="300" controls autoplay muted></video>
```

---

### 3. **Using the `<source>` Element for Alternative Media Files**

The `<source>` element is used inside `<audio>` or `<video>` tags to specify multiple file formats, ensuring compatibility across different browsers.

### Example:

```html
<video width="600" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

In this example, the browser will try to play `video.mp4` first. If it doesn’t support MP4, it will fallback to `video.ogg`.

---

### 4. **Understanding the Concept of Using `<iframe>`**

An **iframe** is used to embed another HTML document (e.g., a video, map, or website) within the current webpage.

### Common Uses:

- Embedding YouTube videos.
- Adding Google Maps.
- Displaying external content like documents.

### Key Attributes:

| Attribute | Description | Example |
| --- | --- | --- |
| **`src`** | URL of the content to display. | `<iframe src="https://example.com">` |
| **`width`** | Width of the iframe (in pixels or percentage). | `<iframe src="..." width="600">` |
| **`height`** | Height of the iframe (in pixels or percentage). | `<iframe src="..." height="400">` |
| **`allowfullscreen`** | Allows fullscreen mode for videos. | `<iframe src="..." allowfullscreen>` |
| **`frameborder`** | Sets the border width (deprecated, use CSS). | `<iframe src="..." frameborder="0">` |

### Example: Embedding a YouTube Video

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

---

## HTML5 Best Practices

- HTML Structure
    - Use semantic HTML elements for better meaning
    - Always include the `alt` attribute for images
    - Use lowercase for all HTML elements and attributes
    - Keep HTML clean and readable with proper indentation
    - Use proper heading hierarchy (h1 → h2 → h3...)
    - Maintain proper nesting and hierarchy
- Performance
    - Optimize images (use appropriate formats and sizes)
    - Minimize HTTP requests
    - Use lazy loading for images below the fold
    - Use CDNs for external resources
    - Compress and minify HTML in production
- SEO Best Practices
    - Use descriptive and unique page titles
    - Write compelling meta descriptions
    - Use header tags to structure content
    - Include internal and external links
    - Optimize images with alt text
    - Use structured data markup
- Accessibility Best Practices
    - Provide focus indicators
        - Use ARIA labels when necessary
    - Provide alternative text for images
    - Use proper contrast ratios
    - Ensure keyboard navigation works
    - Test with screen readers

---