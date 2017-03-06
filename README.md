# chika.js

javascript library

## intro

First we need to load `chika-base.js` to our html file. It is a core of chika.js
```html
<script type="text/javascript" src="chika-base.js"></script>
```
than we can load our peace of code, `main.js` for example

Lets write some code:
Step 1 - choose a scope
Step 2 - call a module, which defines our scope where we can put our controllers

```html
<!DOCTYPE HTML>
<html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  </head>
  <body> 
    <div class='container' cModule='myModule'>
      <div class="outer">
            <div class="inner"></div>
      </div>
    </div>
      <script type="text/javascript" src="src/chika-base.js"></script>
      <script type="text/javascript" src="src/main.js"></script>
  </body>
    
</html>  
```
Now we chosed `<div class='container' cModule='myModule'>` as our module scope

```javascript
var myModule = chika.module('myModule'); 
```
And this is how we call our module.

## using modules

