# Progress Bar

Page loading progress bar

## html
first we need to declare our target wrapper

so again, we need to choose our module scope `<body cModule='myModule'>`  
and controller inside `<div class="outer" cController='loadProgress'>`

```html
<!DOCTYPE HTML>
<html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    
  </head>
  <body cModule='myModule'>  
      <div class="outer" cController='loadProgress'>
            <div class="inner"></div>
      </div>
      <script type="text/javascript" src="src/chika-base.js"></script>
      <script type="text/javascript" src="src/progressbar/chika-progress-bar.js"></script>
      <script type="text/javascript" src="src/main.js"></script>
  </body>
    
</html>   
```
## javascript
than we call our module `var myModule = chika.module('myModule')`,  
define object with modes for example `progressLoadModes` and object property `progressBar` with options (optional).  
At the end we call our controller `myModule.controller('loadProgress', progressLoadModes)`  

Options:  
1)startValue (number) - where loading bar starts, default is 0 
2)endValue (number) - where loading bar ends, default is 100  
3)speed (number) - speed of animation in miliseconds, default is 60 
4)frameValue (number) - distance per frame, default is 1 
5)transitionFrame (number) - transtition time of frame, default is 0.1 
6)transitionEnd (number) - transtition time of frame, when window is loaded, default is 0.4 

```javascript
var myModule = chika.module('myModule');
    
var progressLoadModes = {
    
    progressBar: {
        options: {
            startValue: 10,
            endValue: 100,
            speed: 40,
            frameValue: 3,
            transitionFrame: 0.1,
            transitionEnd: 0.3
        }
    }
    
}

myModule.controller('loadProgress', progressLoadModes);
```
