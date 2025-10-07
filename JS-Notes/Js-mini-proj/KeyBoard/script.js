// Select the element with id "insert" to display output
const insert = document.getElementById("insert");

// Add an event listener for the "keydown" event on the window object
window.addEventListener("keydown", (e) => {
  // Update the innerHTML of the "insert" element with a table showing the key details
  insert.innerHTML = `
    <div class='color'>
     <table>
      <tr>
       <th>Key</th>
       <th>Keycode</th> 
       <th>Code</th>
      </tr>
      <tr>
       <td>${e.key === " " ? "Space" : e.key}</td>
       <td>${e.keyCode}</td> 
       <td>${e.code}</td>
      </tr>
     </table>
   </div>
  `;
});
