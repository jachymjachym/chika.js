//var jk =  require('./jk-base.js');
//
//jk('.wrapper', 0).on('touchmove', function(e){
//                
//            })
//            
//          
//jk('.slide-wrapper', 1).touchSlide();
//
//
////helper function
//function $$(selector, context) {
//    context = context || document;
//    var elements = context.querySelectorAll(selector);
//    return Array.prototype.slice.call(elements);
//} 
//
//window.addEventListener("scroll", function() {
//   var scrolledHeight= window.pageYOffset;
//  $$(".slide-wrapper").forEach(function(el,index,array) { 
//      console.log(el);
//      console.log(index);
//      console.log(array);
//    var limit= el.offsetTop+ el.offsetHeight;
//  if(scrolledHeight > el.offsetTop && scrolledHeight <= limit) {
//    el.style.backgroundPositionY=  (scrolledHeight - el.offsetTop) /1.5+ "px";
// 
//    } else {
//     el.style.backgroundPositionY=  "0";
//    }
//     });
//});
//
//console.log($$('.slide-wrapper'));

var promenna = require('./jk-base.js');

obj1.obj2('hoes')
