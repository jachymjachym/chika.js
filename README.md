# chika.js

javascript library

## intro

First we need to load `chika-base.js` to our html file. It is a core of chika.js
```html
<script type="text/javascript" src="chika-base.js"></script>
```
than we can load our peace of code, `main.js` for example

Lets write some code:
1. Step 1 - choose a scope
2. Step 2 - call a module, which defines our scope where we can put our controllers

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

## using controllers

```html
<!DOCTYPE HTML>
<html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  </head>
  <body> 
    <div class='container' cModule='myModule'>
      <div class="outer" cController='myController'>
            <div class="inner"></div>
      </div>
    </div>
      <script type="text/javascript" src="src/chika-base.js"></script>
      <script type="text/javascript" src="src/main.js"></script>
  </body>
    
</html>  
```
Once we set up `myModule`, we can add some controller to our html

```javascript
var myControllerMods = {
    custom: {
        fn: function(target, options){
            console.log(target); // returns div.outer element
            console.log(options); // returns options object below
        },
        options: {
            opt1: 'opt1',
            opt2: 'opt2'
        }
    }
};

myModule.controller('myController', myControllerMods);
```
This is how we can use custom function, which takes 2 parametres  
`target` means element which controller belongs to, so `<div class="outer">` in this case


