### **JavaScript Basics**

**1. Linking JavaScript Files Using `<script>` Tag**

- **Inline JavaScript**: Place JavaScript code directly within the HTML using a `<script>` tag.
  ```html
  <script>
    console.log("Hello, World!");
  </script>
  ```
- **External JavaScript**: Link an external JavaScript file using the `src` attribute.
  ```html
  <script src="script.js"></script>
  ```
  - Place the `<script>` tag at the end of the `<body>` to ensure the HTML is loaded before the script runs.
  - **Single-line**: `// This is a comment.`
  - **Multi-line**:
    ```jsx
    /*
    This is a
    multi-line comment
    */
    ```
- **console Logging with JavaScript**

  - **`console.log()`**: Logs general information.
  - **`console.info()`**: Logs informational messages.
  - **`console.warn()`**: Logs warnings.
  - **`prompt()`**: Displays a prompt to take user input.
  - **`alert()`**: Displays a popup message.

  Example:

  ```jsx
  console.log("Hello");
  console.warn("Warning!");
  console.info("Info!");
  alert("Alert!");
  let name = prompt("Enter your name:");
  console.log(`Hello, ${name}!`);
  ```

  ***

  # Variables and Data Types

```jsx
// Primitive: Immutable (e.g., numbers, strings).
// Reference (Relative): Mutable (e.g., objects, arrays).

// Variable declarations
let name = "Claude"; // Block-scoped variable
const PI = 3.14159; // Constant, cannot be reassigned
var oldWay = "legacy"; // Function-scoped (less preferred in modern JS)

// Data types
let string = "Hello"; // String
let number = 42; // Number
let decimal = 3.14; // Number (JavaScript doesn't distinguish integers/floats)
let boolean = true; // Boolean
let nullValue = null; // Null
let undefinedVar; // Undefined
let bigInt = 9007199254740991n; // BigInt for large integers
let symbol = Symbol("id"); // Symbol, unique identifier

// Arrays
let array = [1, 2, 3, "mix", true];
let emptyArray = [];

// Objects
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};
```

## Strings and their methods in JavaScript

- `length` : Returns the number of characters in a string.
- `toUpperCase()` : Converts the string to uppercase.
- `toLowerCase()` : Converts the string to lowercase.
- `indexOf()` : Finds the position of the first occurrence of a specified value.
- `lastIndexOf()` : Finds the position of the last occurrence of a specified value.
- `slice()`: Extracts a part of a string and returns it as a new string. It takes a start index and an optional end index (not inclusive).
- `substring()` : Similar to **slice()**, but it does not accept negative indices.
- `replace()` : Replaces the first occurrence of a specified value with another value.
- `replaceAll()` : Replaces all occurrences of a specified value.
- `trim()` : Removes whitespace from both ends of a string.
- `trimStart()` : Removes whitespace from the start of a string. 
- `trimEnd()` : Removes whitespace from both the end of a string.
- `split()` : Splits a string into an array of substrings based on a specified separator.
- `charAt()` : Returns the character at a specified index.
- `charCodeAt()` : Returns the Unicode of the character at a specified index.
- `includes()` : Checks if a string contains a specified value.
- `startsWith()` : Checks if a string starts with a specified value.
- `endsWith()` : Checks if a string ends with a specified value.

<hr/>

# Operators

```jsx
// Arithmetic operators
let sum = 5 + 10; // Addition
let difference = 10 - 5; // Subtraction
let product = 5 * 10; // Multiplication
let quotient = 10 / 5; // Division
let remainder = 10 % 3; // Modulus (remainder)
let exponent = 2 ** 3; // Exponentiation (2^3 = 8)

// Assignment operators
let x = 10;
x += 5; // Same as: x = x + 5
x -= 3; // Same as: x = x - 3
x *= 2; // Same as: x = x * 2
x /= 4; // Same as: x = x / 4
x %= 3; // Same as: x = x % 3

// Comparison operators
let isEqual = 5 == "5"; // Equal (converts types)
let isStrictEqual = 5 === 5; // Strict equal (no type conversion)
let isNotEqual = 5 != "6"; // Not equal
let isStrictNotEqual = 5 !== "5"; // Strict not equal
let isGreater = 10 > 5; // Greater than
let isLess = 5 < 10; // Less than
let isGreaterOrEqual = 5 >= 5; // Greater than or equal
let isLessOrEqual = 5 <= 5; // Less than or equal

// Logical operators
let and = true && false; // Logical AND
let or = true || false; // Logical OR
let not = !true; // Logical NOT

// Nullish coalescing
let username = null;
let displayName = username ?? "Guest"; // "Guest" if username is null/undefined

// Optional chaining
let value = object?.property?.nestedProp; // Avoids errors if a property doesn't exist
```

# Control Flow


1. **Choosing the Right Loop**
- Use `for` when you know the number of iterations
- Use `while` when the number of iterations is unknown
- Use `for...of` for arrays and other iterables
- Use `for...in` for object properties
- Use array methods (`map`, `filter`, etc.) when transforming data.

```jsx
// If statements
if (condition) {
  // execute if condition is true
} else if (anotherCondition) {
  // execute if anotherCondition is true
} else {
  // execute if no conditions are true
}

// Ternary operator
let status = age >= 18 ? "adult" : "minor";

// Switch statements
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if no case matches
}

// Loops
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do-while loop
do {
  console.log(i);
  i++;
} while (i < 5);

// For...of loop (for iterables like arrays)
let numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}

// For...in loop (for object properties)
let person = { name: "John", age: 30 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Skip this iteration
  if (i === 8) break;    // Exit the loop
  console.log(i);
}

 **//** Recursion in JavaScript
 function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Outputs 120
```

# Functions

```jsx
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const greet = function (name) {
  return "Hello, " + name + "!";
};

// Arrow functions
const greet = (name) => {
  return "Hello, " + name + "!";
};

// Shorthand arrow function (implicit return)
const greet = (name) => "Hello, " + name + "!";

// Default parameters
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This runs immediately");
})();
```

# Template Literals

```jsx
// String interpolation
let name = "Claude";
let greeting = `Hello, ${name}!`;

// Multi-line strings
let multiLine = `This is a
multi-line
string`;
```

# Arrays and Array Methods

1. **Adding and Removing Elements**:

- `push()`: Adds an item to the end of an array.
- `pop()`: Removes the last item from an array.
- `unshift()`: Adds elements to the beginning of an array.
- `shift()`: Removes the first element from an array.
- `length`: Returns the number of elements in the array.

2. **Array Methods: `splice()` and `slice()` :**

- **`splice(start, deleteCount, items...)`**: Adds/removes items to/from an array.
- **`slice(start, end)`**: Returns a shallow copy of a portion of an array into a new array.

3. **Looping Through Arrays with `forEach()` :**

- **forEach()** method executes a provided function for each element in the array.

4. **What is the difference between `push()` and `unshift()`?**

- `push()` adds an element to the **end** of an array.
- `unshift()` adds an element to the **beginning** of an array.

5. **What’s the difference between `splice()` and `slice()`?**

- `splice()` **modifies** the original array by adding/removing elements.
- `slice()` **does not modify** the original array; it creates a new array containing the selected portion.

```jsx
// Creating arrays
let fruits = ["apple", "banana", "orange"];

// Accessing elements
let firstFruit = fruits[0]; // "apple"

// Modifying arrays
fruits.push("grape"); // Add to end
fruits.unshift("strawberry"); // Add to beginning
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning
fruits.splice(1, 1, "kiwi"); // Remove and/or insert at position

// Iterating arrays
fruits.forEach((fruit) => console.log(fruit));

// Array transformations
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]
let evens = numbers.filter((num) => num % 2 === 0); // [2, 4]
let sum = numbers.reduce((total, num) => total + num, 0); // 15

// Finding elements
let found = numbers.find((num) => num > 3); // 4
let foundIndex = numbers.findIndex((num) => num > 3); // 3
let includes = numbers.includes(3); // true

// Sorting
let sortedNumbers = [...numbers].sort((a, b) => a - b);
```

# Objects

```jsx
// Creating objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,

  // Method
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};

// Accessing properties
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

// Adding/modifying properties
person.email = "john@example.com";
person["phone"] = "123-456-7890";

// Object destructuring
let { firstName, age } = person;

// Object spread
let personCopy = { ...person };
let personWithTitle = { ...person, title: "Developer" };

// Object methods
let keys = Object.keys(person); // Array of property names
let values = Object.values(person); // Array of property values
let entries = Object.entries(person); // Array of [key, value] pairs
let merged = Object.assign({}, obj1, obj2); // Merge objects
```

# Classes

```jsx
// Class declaration
class Person {
  // Constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method
  fullName() {
    return this.firstName + " " + this.lastName;
  }

  // Getter
  get name() {
    return this.firstName;
  }

  // Setter
  set name(value) {
    this.firstName = value;
  }

  // Static method
  static isHuman() {
    return true;
  }
}

// Inheritance
class Employee extends Person {
  constructor(firstName, lastName, jobTitle) {
    super(firstName, lastName); // Call parent constructor
    this.jobTitle = jobTitle;
  }

  // Override method
  fullName() {
    return super.fullName() + ", " + this.jobTitle;
  }
}

// Creating instances
let person = new Person("John", "Doe");
let employee = new Employee("Jane", "Smith", "Developer");
```

# Promises and Async/Await

```jsx
// Creating a promise
const promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(value); // Promise fulfilled
  } else {
    reject(error); // Promise rejected
  }
});

// Consuming promises
promise
  .then((result) => {
    // Handle successful result
    return anotherPromise;
  })
  .then((result2) => {
    // Handle result from anotherPromise
  })
  .catch((error) => {
    // Handle any errors
  })
  .finally(() => {
    // Always executes regardless of success/failure
  });

// Promise methods
Promise.all([promise1, promise2]); // Waits for all promises
Promise.race([promise1, promise2]); // Waits for first to complete
Promise.allSettled([promise1, promise2]); // Waits for all to settle
Promise.any([promise1, promise2]); // Waits for first to fulfill

// Async/await
async function getData() {
  try {
    // await pauses execution until promise resolves
    const result = await fetchData();
    const processed = await processData(result);
    return processed;
  } catch (error) {
    // Handle errors
    console.error(error);
  }
}
```

# Asynchronous JavaScript

- **Callbacks**

```jsx
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}
fetchData((data) => console.log(data));
```

- **Promises**

```jsx
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 1000);
});
promise.then((result) => console.log(result));
```

- **Async/Await**

```jsx
async function fetchData() {
  return "Data fetched";
}
fetchData().then(console.log);
```

# Modules

```jsx
// Exporting
// file: math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;

export default class Calculator {
  // Class implementation
}

// Importing
// file: app.js
import Calculator, { add, PI as MathPI } from './math.js';
import * as math from './math.js';
------------------------------------------------
// file1.js
export const greet = name => `Hello, ${name}!`;

// file2.js
import { greet } from './file1.js';
console.log(greet("Alice"));
```

# Error Handling

```jsx
// Try-catch
try {
  // Code that might throw an error
  throw new Error("Something went wrong");
} catch (error) {
  // Handle the error
  console.error(error.message);
} finally {
  // Always executes
  console.log("Cleanup code");
}

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Throwing errors
throw new Error("Error message");
throw new ValidationError("Invalid input");
```

# **ES6+ Features**

- **The Document Object Model (DOM)**

```jsx
let element = document.getElementById("myElement");
let elements = document.querySelectorAll(".myClass");
element.textContent = "Updated text";
element.style.color = "red";

element.addEventListener("click", () => alert("Clicked!"));
```

- **Fetch API (AJAX)**

```jsx
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

# Timing Events

1.  **`setTimeout()`**:
    Executes code after a delay.
    ```jsx
    setTimeout(() => console.log("Hello after 1 second"), 1000);

        ```

2.  **`setInterval()`**:
    Executes code repeatedly at intervals.
    ```jsx
    let count = 0;
    let interval = setInterval(() => {
    count++;
    console.log(count);
    if (count === 5) clearInterval(interval);
    }, 1000);

        ```

3.  **`clearTimeout()` and `clearInterval()`**:
    Cancels a timeout or interval.

---

# Fetching Elements in the DOM

1.  **`document.getElementById()`**:
    Fetches a single element by its `id`.
    ```jsx
    const element = document.getElementById("myElement");

2.  **`document.getElementsByTagName()`**:
    Fetches all elements by a specific tag name.
    ```jsx
    const paragraphs = document.getElementsByTagName("p");

3.  **`document.getElementsByClassName()`**:
    Fetches all elements by a specific class name.
    ```jsx
    const items = document.getElementsByClassName("item");

4.  **`document.querySelector()`**:
    Fetches the first matching element for a CSS selector.
    ```jsx
    const firstItem = document.querySelector(".item");

5.  **`document.querySelectorAll()`**:
    Fetches all matching elements for a CSS selector.
    ```jsx
    const allItems = document.querySelectorAll(".item");

---

# DOM Tree Traversal

1.  **`parentNode`**:
    Access the parent node of an element.
    ```jsx
    console.log(element.parentNode);

2.  **`childNodes`**:
    Access all child nodes (including text and comment nodes).
    ```jsx
    console.log(element.childNodes);

3.  **`firstChild`**:
    Access the first child node.
    ```jsx
    console.log(element.firstChild);

4.  **`nextSibling`**:
    Access the next sibling node.
    ```jsx
    console.log(element.nextSibling);

# Manipulating DOM Elements

1.  **`innerHTML`**:
    Set or get the HTML content inside an element.
    ```jsx
    element.innerHTML = "<strong>Hello World</strong>";

2.  **`textContent`**:
    Set or get only the text content inside an element.
    ```jsx
    element.textContent = "Hello World";

3.  **`setAttribute()`**:
    Set an attribute for an element.
    ```jsx
    element.setAttribute("class", "newClass");

4.  **`getAttribute()`**:
    Get the value of an attribute.
    ```jsx
    const value = element.getAttribute("id");

5.  **`style` Property**:
    Modify inline styles of an element.
    ```jsx
    element.style.color = "red";

6.  **`classList`**:
    Manipulate classes on an element. - **Add a class**:
    ```jsx
    element.classList.add("newClass");

        - **Remove a class**:

            ```jsx
            element.classList.remove("oldClass");

        - **Toggle a class**:

            ```jsx
            element.classList.toggle("active");

# Create and Remove DOM Elements

1.  **`createElement()`**:
    Create a new HTML element.
    ```jsx
    const newElement = document.createElement("div");
    newElement.textContent = "Hello!";

2.  **`appendChild()`**:
    Add a child element to a parent.
    ```jsx
    document.body.appendChild(newElement);

3.  **`insertBefore()`**:
    Insert a child element before another child element.
    ```jsx
    parentElement.insertBefore(newElement, referenceElement);

4.  **`removeChild()`**:
    Remove a child element from its parent.
    ```jsx
    parentElement.removeChild(childElement);

---

# Event Handling in JavaScript

Event handling allows developers to create interactive and dynamic web pages by responding to user actions like clicks, key presses, or form submissions.

- **1. Event Handling in JavaScript**

  1.  **`addEventListener()`**:
      Attaches an event listener to an element for a specific event.
      ```jsx
      const button = document.querySelector("#myButton");
      button.addEventListener("click", () => {
      console.log("Button clicked!");
      });

          ```

  2.  **`event.target`**:
      Refers to the element that triggered the event.
      ```jsx
      button.addEventListener("click", (event) => {
      console.log(event.target); // Logs the clicked button element
      });

          ```

  3.  **Event Bubbling**:
      Events propagate upward from the target element to its parent(s).
      ```jsx
      document.body.addEventListener("click", () => {
      console.log("Body clicked");
      });
      button.addEventListener("click", () => {
      console.log("Button clicked");
      });
      // Clicking the button triggers both listeners (button -> body)

          ```

  4.  **Event Capturing**:
      Events propagate downward from the root to the target element.
      ```jsx
      document.body.addEventListener(
      "click",
      () => {
      console.log("Capturing: Body clicked");
      },
      true // Enables capturing
      );

          ```

---

- **2. Scroll Events, Mouse Events, Key Events, and Strict Mode**

  1.  **Scroll Events**:
      Triggered when the user scrolls a page or an element.
      ```jsx
      window.addEventListener("scroll", () => {
      console.log("Page scrolled");
      });

          ```

  2.  **Mouse Events**:

      - Common mouse events: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`.

      ```jsx
      document.addEventListener("mousemove", (event) => {
        console.log(`Mouse at (${event.clientX}, ${event.clientY})`);
      });
      ```

  3.  **Key Events**:

      - Common key events: `keydown`, `keypress`, `keyup`.

      ```jsx
      document.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);
      });
      ```

  4.  **Strict Mode**:
      Enforces stricter parsing and error handling in JavaScript.
      ```jsx
      "use strict";
      x = 10; // Throws an error (variable not declared)

          ```

---

- **3. Working with Forms and Input Elements**

  1.  **Accessing Form Data**:

      ```jsx
      const form = document.querySelector("#myForm");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputData = document.querySelector("#myInput").value;
        console.log(inputData);
      });

  2.  **Validating Forms**:
      Use JavaScript to check user input.
      ```jsx
      form.addEventListener("submit", (event) => {
      const input = document.querySelector("#myInput");
      if (!input.value) {
      event.preventDefault();
      console.log("Input cannot be empty");
      }
      });

  3.  **`preventDefault()`**:
      Prevents the default browser action (e.g., form submission or link navigation).
      ```jsx
      form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevents page reload
      });

  4.  **`onsubmit` and `onchange`**:

      - **`onsubmit`**: Triggered when a form is submitted.
      - **`onchange`**: Triggered when an input value changes.

      ```jsx
      form.onsubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
      };

---

- **4. Working with Classes**

  - Modify CSS classes dynamically using **`classList`**:

    1. **Add a class**:

       ```jsx
       element.classList.add("newClass");
       ```

    2. **Remove a class**:

       ```jsx
       element.classList.remove("oldClass");
       ```

    3. **Toggle a class**:

       ```jsx
       element.classList.toggle("active");
       ```

    4. **Check if a class exists**:

       ```jsx
       console.log(element.classList.contains("active")); // true or false
       ```

---

- **5. Browser Events**

  1.  **`DOMContentLoaded`**:
      Triggered when the HTML is fully loaded and parsed (before stylesheets and images).
      ```jsx
      document.addEventListener("DOMContentLoaded", () => {
      console.log("DOM fully loaded");
      });

  2.  **`load`**:
      Triggered when the entire page (including assets like images) is loaded.
      ```jsx
      window.addEventListener("load", () => {
      console.log("Page fully loaded");
      });

  3.  **`resize`**:
      Triggered when the browser window is resized.
      ```jsx
      window.addEventListener("resize", () => {
      console.log("Window resized");
      });

  4.  **`scroll`**:
      Triggered when the user scrolls the page.
      ```jsx
      window.addEventListener("scroll", () => {
      console.log("User scrolled the page");
      });

---

# Using Browser Functionalities in JavaScript

JavaScript allows interaction with the browser's various functionalities through the **Browser Object Model (BOM)**, which provides objects for working with the browser window, navigation history, location, and more.

---

- **1. Browser Object Model**
  The BOM consists of objects that represent the browser environment:
  - **`window`**: Represents the browser window and is the global object.
  - **`navigator`**: Provides information about the browser and the device.
  - **`history`**: Allows navigation through the browser's history.
  - **`location`**: Represents the URL of the current page and enables URL manipulation.
  - **`document`**: Represents the HTML document loaded in the browser.

---

- **2. Window Object**
  The **`window`** object is the global object in the browser. Its properties and methods provide access to BOM functionalities.

  ### **a. `window.location`**

  - Provides information about the current URL and methods to manipulate it.

    ```jsx
    console.log(window.location.href); // Full URL
    console.log(window.location.hostname); // Hostname
    console.log(window.location.pathname); // Pathname
    console.log(window.location.search); // Query string

    // Redirect to another URL
    window.location.href = "https://example.com";

    // Reload the page
    window.location.reload();
    ```

  ### **b. `window.history`**

  - Allows navigation through the browser's history.

    ```jsx
    // Go back to the previous page
    window.history.back();

    // Go forward to the next page
    window.history.forward();

    // Move a specific number of steps in the history
    window.history.go(-2); // Go back two pages
    ```

---

- **3. Working with Storage**

  ### **a. Local Storage**

  - Stores data with no expiration (persists across sessions).

    ```jsx
    // Save data
    localStorage.setItem("key", "value");

    // Retrieve data
    const value = localStorage.getItem("key");
    console.log(value);

    // Remove data
    localStorage.removeItem("key");

    // Clear all data
    localStorage.clear();
    ```

  ### **b. Session Storage**

  - Stores data for the duration of the page session (cleared when the browser is closed).

    ```jsx
    // Save data
    sessionStorage.setItem("key", "value");

    // Retrieve data
    const value = sessionStorage.getItem("key");
    console.log(value);

    // Remove data
    sessionStorage.removeItem("key");

    // Clear all data
    sessionStorage.clear();
    ```

  ### **c. Cookies**

  - Store small pieces of data with optional expiration.

    ```jsx
    // Set a cookie
    document.cookie =
      "username=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

    // Get cookies
    console.log(document.cookie);

    // Delete a cookie
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    ```

---

- **4. Web APIs in DOM**
  ### **a. Fetch API**
  - Used to make network requests.
    ```jsx
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    ```
  ### **b. Geolocation API**
  - Retrieves the user's location (requires user permission).
    ```jsx
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    ```

# Object-Oriented Programming (OOP) Concepts in JavaScript

Object-Oriented Programming (OOP) in JavaScript is based on the use of **objects**, which are collections of properties and methods. Modern JavaScript also supports **classes**, making it easier to create and manage objects.

---

### **1. Introduction to OOP in JavaScript**

OOP principles include:

- **Encapsulation**: Bundling data (properties) and methods (functions) into objects.
- **Inheritance**: Sharing functionality between objects using prototypes or classes.
- **Polymorphism**: Overriding or redefining methods in derived classes.
- **Abstraction**: Hiding complexity by exposing only essential features.

---

### **2. Understanding `classes` and `objects` in JavaScript**

### **Classes**:

- A template for creating objects with shared properties and methods.
  ```jsx
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }
  }

  const john = new Person("John", 25);
  john.greet(); // Hi, I'm John, and I'm 25 years old.
  ```

### **Objects**:

- Instances of classes or standalone structures.
  ```jsx
  const car = {
    brand: "Toyota",
    model: "Corolla",
    start() {
      console.log("Car started");
    },
  };

  car.start(); // Car started
  ```

---

### **3. Understanding `Constructor` and `Prototypes`**

### **Constructor**:

- A special method in a class for initializing objects.
  ```jsx
  class Animal {
    constructor(type, sound) {
      this.type = type;
      this.sound = sound;
    }

    makeSound() {
      console.log(`${this.type} says ${this.sound}`);
    }
  }

  const dog = new Animal("Dog", "Woof");
  dog.makeSound(); // Dog says Woof
  ```

### **Prototypes**:

- A mechanism by which objects inherit methods and properties.
  ```jsx
  function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
  }

  Animal.prototype.makeSound = function () {
    console.log(`${this.type} says ${this.sound}`);
  };

  const cat = new Animal("Cat", "Meow");
  cat.makeSound(); // Cat says Meow
  ```

### **`this` Keyword**:

- Refers to the object that is executing the current function.
  ```jsx
  class Car {
    constructor(brand) {
      this.brand = brand;
    }

    showBrand() {
      console.log(this.brand);
    }
  }

  const car = new Car("Tesla");
  car.showBrand(); // Tesla
  ```

---

### **4. Methods: `call`, `apply`, and `bind`**

### **`call()`**:

- Invokes a function with a specified `this` context and arguments.
  ```jsx
  const obj = { name: "Alice" };

  function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }

  greet.call(obj, "Hello"); // Hello, Alice
  ```

### **`apply()`**:

- Similar to `call`, but arguments are passed as an array.
  ```jsx
  greet.apply(obj, ["Hi"]); // Hi, Alice
  ```

### **`bind()`**:

- Creates a new function with a specified `this` context.
  ```jsx
  const boundGreet = greet.bind(obj, "Hey");
  boundGreet(); // Hey, Alice
  ```

---

### **5. More Topics in OOP**

### **Class Expression**:

- Classes can also be created as expressions.
  ```jsx
  const Vehicle = class {
    constructor(type) {
      this.type = type;
    }

    displayType() {
      console.log(`This is a ${this.type}`);
    }
  };

  const bike = new Vehicle("Bike");
  bike.displayType(); // This is a Bike
  ```

### **Hoisting**:

- Class declarations are not hoisted.
  ```jsx
  console.log(Person); // ReferenceError
  class Person {}
  ```

### **Inheritance**:

- Extending a class to create a child class.
  ```jsx
  class Animal {
    constructor(name) {
      this.name = name;
    }

    eat() {
      console.log(`${this.name} is eating.`);
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Woof!");
    }
  }

  const dog = new Dog("Buddy");
  dog.eat(); // Buddy is eating.
  dog.bark(); // Woof!
  ```

### Getter and Setter:

- Allow controlled access to object properties.
  ```jsx
  class Person {
    constructor(name) {
      this._name = name; // Private property convention
    }

    get name() {
      return this._name;
    }

    set name(newName) {
      if (newName.length > 0) {
        this._name = newName;
      } else {
        console.log("Invalid name");
      }
    }
  }

  const person = new Person("Alice");
  console.log(person.name); // Alice
  person.name = "Bob";
  console.log(person.name); // Bob
  ```

---

# Asynchronous Programming in JavaScript

Asynchronous programming allows JavaScript to handle tasks like fetching data from a server, timers, and user input without blocking the main thread. This enables efficient execution of code while waiting for external resources or events.

---

### **1. Introduction to Asynchrony in JavaScript**

JavaScript uses a **single-threaded** runtime, meaning it can execute one task at a time. Asynchronous programming allows handling tasks like file reading, API calls, or DOM events without waiting for them to finish.

Key mechanisms include:

- **Callbacks**
- **Promises**
- **`async/await`**

---

### **2. What is the Event Loop?**

The **event loop** ensures that the JavaScript engine executes code, handles events, and processes asynchronous tasks in a non-blocking manner.

### **Key Components**:

- **Call Stack**: Executes synchronous tasks.
- **Web APIs**: External environment for async tasks like `setTimeout`.
- **Task Queue**: Holds callbacks for timed or other async tasks (e.g., `setTimeout`).
- **Microtask Queue**: Holds microtasks (e.g., `Promise` callbacks), processed before tasks in the Task Queue.

### **How It Works**:

1. Synchronous code is executed first.
2. Async tasks are sent to the respective queues after completion.
3. Microtasks (from `Promises`) are processed before tasks in the Task Queue.

---

### **3. Introduction to Callbacks**

Callbacks are functions passed as arguments to other functions to be executed later.

Example:

```jsx
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => {
  console.log("Callback executed");
});
```

### **Problems in Callbacks**:

- **Callback Hell**: Nested callbacks make code difficult to read and maintain.
  ```jsx
  setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
      setTimeout(() => {
        console.log("Step 3");
      }, 1000);
    }, 1000);
  }, 1000);
  ```

---

### **4. Understanding Promises**

A **Promise** represents a value that will be resolved in the future.

### **States**:

- **Pending**: Initial state, neither fulfilled nor rejected.
- **Resolved**: Operation completed successfully.
- **Rejected**: Operation failed.

Example:

```jsx
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

### **Chaining Promises**:

```jsx
promise
  .then((result) => {
    console.log(result);
    return "Next step";
  })
  .then((nextResult) => console.log(nextResult))
  .catch((error) => console.error(error));
```

---

### **5. Promise Methods**

- **`Promise.race()`**: Resolves/rejects with the first settled promise.
  ```jsx
  Promise.race([promise1, promise2]).then(console.log).catch(console.error);
  ```
- **`Promise.all()`**: Resolves only if all promises are resolved; rejects if one fails.
  ```jsx
  Promise.all([promise1, promise2]).then(console.log).catch(console.error);
  ```
- **`Promise.any()`**: Resolves with the first fulfilled promise; rejects if all fail.
  ```jsx
  Promise.any([promise1, promise2]).then(console.log).catch(console.error);
  ```
- **`Promise.allSettled()`**: Resolves with the status of all promises, regardless of success/failure.
  ```jsx
  Promise.allSettled([promise1, promise2]).then(console.log);
  ```

---

### **6. Preventing Callback Hell with `async` & `await`**

The `async` keyword makes a function return a Promise, and `await` pauses execution until the Promise resolves.

Example:

```jsx
async function fetchData() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched"), 1000);
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

---

### **7. `setInterval` & `setTimeout`**

- **`setTimeout`**: Executes code after a delay.
  ```jsx
  setTimeout(() => console.log("Executed after 2 seconds"), 2000);
  ```
- **`setInterval`**: Repeats execution at specified intervals.
  ```jsx
  const interval = setInterval(
    () => console.log("Repeating every 1 second"),
    1000
  );

  // Clear interval
  setTimeout(() => clearInterval(interval), 5000);
  ```

---

### **8. What is `Web API` in JavaScript?**

Web APIs provide additional functionality beyond JavaScript’s core language.

### **a. Fetch API**:

- Fetches data from a server.
  ```jsx
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  ```

### **b. Geolocation API**:

- Retrieves the user's location.
  ```jsx
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
      },
      (error) => console.error(error.message)
    );
  } else {
    console.log("Geolocation not supported.");
  }
  ```

---

# Error Handling in JavaScript

Error handling ensures that code can gracefully handle unexpected issues, preventing crashes and improving user experience.

---

### **1. Introduction to Error Handling**

Errors are inevitable in programming, but with error handling, you can:

- Identify and resolve bugs.
- Ensure that the application continues running smoothly.
- Provide meaningful feedback to users.

---

### **2. Common Types of Errors in JavaScript**

1. **Syntax Errors**:
   - Occur when code violates JavaScript syntax rules.
   - Example:
     ```jsx
     console.log("Hello World  // Missing closing quote

     ```
2. **Runtime Errors**:
   - Occur during code execution due to invalid operations.
   - Example:
     ```jsx
     let result = nonExistentFunction();
     ```
3. **Logical Errors**:
   - Errors in logic that lead to incorrect behavior.
   - Example:
     ```jsx
     const add = (a, b) => a - b; // Logical error in operation
     console.log(add(2, 3)); // Outputs -1 instead of 5
     ```

---

### **3. Understanding the Error Object**

JavaScript provides the `Error` object to represent errors.

### **Properties**:

- **`message`**: A string describing the error.
- **`name`**: Type of error (e.g., `ReferenceError`, `TypeError`).
- **`stack`**: A stack trace for debugging.

Example:

```jsx
try {
  let result = undefinedVariable;
} catch (error) {
  console.log("Error Name:", error.name); // ReferenceError
  console.log("Error Message:", error.message); // undefinedVariable is not defined
  console.log("Stack Trace:", error.stack);
}
```

---

### **4. Handling Exceptions Using `try-catch` and `try-catch-finally`**

1. **`try-catch`**:

   - Use `try` to write code that might throw an error and `catch` to handle the error.

   ```jsx
   try {
     let result = 10 / 0;
     console.log(result);
   } catch (error) {
     console.error("An error occurred:", error.message);
   }
   ```

2. **`try-catch-finally`**:

   - The `finally` block always executes, regardless of an error.

   ```jsx
   try {
     let result = JSON.parse("Invalid JSON");
   } catch (error) {
     console.error("Caught an error:", error.message);
   } finally {
     console.log("Cleanup actions, if any.");
   }
   ```

---

### **5. How to Throw Errors in JavaScript**

Use the `throw` statement to create custom errors.

Example:

```jsx
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed.
}
```

---

### **6. How to Create Custom Errors in JavaScript**

Extend the `Error` object to create custom error types.

Example:

```jsx
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("This is a custom error.");
} catch (error) {
  console.error(error.name); // CustomError
  console.error(error.message); // This is a custom error.
}
```

---

### **7. Error Handling in Asynchronous Code**

1. **Using `try-catch` with `async/await`**:

   ```jsx
   async function fetchData() {
     try {
       let response = await fetch("invalid-url");
       let data = await response.json();
       console.log(data);
     } catch (error) {
       console.error("Error during fetch:", error.message);
     }
   }

   fetchData();
   ```

2. **Handling Errors in Promises**:

   ```jsx
   fetch("invalid-url")
     .then((response) => response.json())
     .catch((error) => {
       console.error("Error in promise:", error.message);
     });
   ```

---

### **Tips for Effective Error Handling**

- Use meaningful error messages.
- Handle specific errors where possible.
- Avoid suppressing errors silently.
- Log errors for debugging and tracking.
- Gracefully recover from errors to improve user experience.

---

# Throttling and Debouncing in JavaScript

**Throttling** and **Debouncing** are techniques to control the rate of execution of a function, often used to optimize performance when handling events like scrolling, resizing, or typing.

---

### **1. Throttling**

Throttling ensures that a function executes at most once in a specified period, regardless of how many times the event is triggered.

- **Use Cases**:
  - Handling window resize events.
  - Limiting API requests during user input.
- **Implementation Example**:
  ```jsx
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  const throttledFunc = throttle(() => console.log("Throttled!"), 1000);
  window.addEventListener("resize", throttledFunc);
  ```

---

### **2. Debouncing**

Debouncing ensures that a function is executed only after a specified delay has passed since the last time it was invoked. If the event is triggered again within the delay, the timer resets.

- **Use Cases**:
  - Auto-saving form data after typing stops.
  - Search bar suggestions after the user stops typing.
- **Implementation Example**:
  ```jsx
  function debounce(func, delay) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }

  const debouncedFunc = debounce(() => console.log("Debounced!"), 1000);
  document.getElementById("input").addEventListener("input", debouncedFunc);
  ```

---

# Comparison of Throttling and Debouncing

### **Comparison of Throttling and Debouncing**

| Feature   | Throttling                     | Debouncing                         |
| --------- | ------------------------------ | ---------------------------------- |
| Execution | Executes at regular intervals. | Executes after a delay.            |
| Use Case  | Scroll events, resize events.  | Typing in a search bar.            |
| Frequency | Limits execution rate.         | Delays execution until inactivity. |

---


**JSON (JavaScript Object Notation)** is a lightweight data-interchange format used for data exchange between systems.

### **1. `JSON.parse()`**

Converts a JSON string into a JavaScript object.

- **Example**:
  ```jsx
  const jsonString = '{"name": "John", "age": 30}';
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject.name); // Output: John
  console.log(jsonObject.age); // Output: 30
  ```
- **Use Cases**:
  - Reading data from APIs or files.

---

### **2. `JSON.stringify()`**

Converts a JavaScript object into a JSON string.

- **Example**:
  ```jsx
  const jsonObject = { name: "John", age: 30 };
  const jsonString = JSON.stringify(jsonObject);
  console.log(jsonString); // Output: {"name":"John","age":30}
  ```
- **Use Cases**:
  - Sending data to APIs.
  - Storing data in localStorage or sessionStorage.

---

### **3. Combining `JSON.parse()` and `JSON.stringify()`**

- Convert an object to JSON and back:
  ```jsx
  const originalObject = { name: "John", age: 30 };
  const jsonString = JSON.stringify(originalObject);
  const parsedObject = JSON.parse(jsonString);

  console.log(parsedObject); // Output: { name: 'John', age: 30 }
  ```

---