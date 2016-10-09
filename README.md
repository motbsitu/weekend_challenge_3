#Weekend Challenge 3
Build a calculator application using jQuery, Node, and Express.

##Server Logic & Client Functionality
- The logic for the calculator is housed on the Server.
- The Client takes in the values (via 2 input fields) and the type of mathematical operation (selected using a button on the DOM).
- Each numerical value and the mathematical operator type is bundled up in an object and then sent to the server via a POST request.

- The Server receives it, and creates the logic to compute the numbers as either (1) addition, (2) subtraction, (3) multiplication, and (4) division.

- Once the result of the mathematical operation is determined, it is sent back down to the Client where it is displayed on the DOM.

- A clear button resets the whole experience.
