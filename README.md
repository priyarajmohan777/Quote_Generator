# Quote_Generator
## Date: 10-07-2025
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.

## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Quotes Generator</title>
  <link rel="stylesheet" href="styles.css" />
  
</head>
<body>
  <div class="container">
    <h1>Quotes Generator</h1>
    <p id="quote">Click the button to see a quote</p>
    <p id="author">-</p>
    
    <button onclick="showQuote()">Get Quote</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body
{
  background-color: rgb(178, 223, 174);
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   display:flex;
   justify-content: center;
   align-items:center ;
   height: 90vh;
}

.container
{
  background-color: antiquewhite;
  display: inline-block;
  border:2px solid black;
  border-radius: 10px;
  padding:30px;
  width: 300px;
  text-align: center;
  word-wrap: break-word;

}

button
{
  border:2px solid black;
  border-radius:8px;
  background-color:rgb(162, 149, 185);
  padding:15px;
  justify-content: center;
  display: block;
  margin: 20px auto 0;
}

```
## Output:
<img width="1915" height="1007" alt="image" src="https://github.com/user-attachments/assets/13488643-e937-4190-91f0-535cc4bd0e48" />

## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
