# Touchslide

Responsive slider for touch devices

## html
first we need to declare our target wrapper

so again, we need to choose our module scope `<div class='container' cModule='myModule'>`  
and controller inside `<div class="slide-wrapper" cController='myController'>`

```html
<!DOCTYPE HTML>
<html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  </head>
  <body> 
    <div class='container' cModule='myModule'>
      <div class="slide-wrapper" cController='myController'>
          <div class="item-wrapper">
              <div class='item'></div>
              <div class='item'></div>
              <div class='item'></div>
              <div class='item'></div>
          </div>
      </div>
    </div>
      <script type="text/javascript" src="src/chika-base.js"></script>
      <script type="text/javascript" src="src/touchslide/chika-touch-slide.js"></script>
      <script type="text/javascript" src="src/main.js"></script>
  </body>
    
</html>  
```
## javascript
than we call our module `var myModule = chika.module('myModule')`,  
define object with modes for example `myControllerModes` and object property `touchslide` with options (optional).  

There are 2 options:  
1)itemsInWindow (number) means how many items should be visible in screen or slide-wrapper  
2)threshold (number) means screen width limit. In this example, if you have 2 items visible in wrapper it is aplied from 420px screen width. There is just 1 item visible, when the screen width is less than 420px.

```javascript
var myModule = chika.module('myModule'); 

var myControllerModes = {
    touchslide: {
        options: {
            itemsInWindow: 2,
            threshold: 420
        }
    }
    
};

myModule.controller('myController', myControllerModes);
```
