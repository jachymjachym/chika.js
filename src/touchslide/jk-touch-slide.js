
    
    var touchslide = function(options){
        
        
        console.log(options);
        
        
//        var elem = target.children[0];
//        var w = elem.children[0].clientWidth;
//        var count = elem.children.length;
//        var fullW = w * count;
//        var unit = fullW / count;
//        
//        elem.style.width = fullW + 'px';
//        
//        var touches = {
//            touchstart: {x: 0, y: 0},
//            touchmove: {x: 0, y: 0},
//            translate: 0,
//            
//        }
//
//        var lastX;
//        
//        function handler(e){
//            
//            switch(e.type){
//                case 'touchstart':
//                    lastX = currentX;
//                    break;
//                case 'touchmove':
//                    var currentX = e.touches[0].clientX;
//                    if(currentX > lastX){
//                        
//                        touches.translate += currentX -lastX;
//                    } else if(currentX < lastX){
//                        
//                        touches.translate -= lastX - currentX;
//                    }
//                    
//                    lastX = currentX;
//                    elem.style.transform = 'translateX(' + touches.translate + 'px)';
//                    elem.style.transitionProperty = 'none';
//                    
//            
//                    break;
//                    
//                case 'touchend':
//                    console.log(e.type);
//                    if(touches.translate > 0){
//                        elem.style.transform = 'translateX(0px)';
//                        elem.style.transition = 'transform 0.5s';
//                    }
//                    
//                    
//                    
//                    function closest (num, arr) {
//                        var curr = arr[0];
//                        var diff = Math.abs (num - curr);
//                        for (var val = 0; val < arr.length; val++) {
//                            var newdiff = Math.abs (num - arr[val]);
//                            if (newdiff < diff) {
//                                diff = newdiff;
//                                curr = arr[val];
//                            }
//                        }
//                        return curr;
//                    }
//                    
//                    
//                    
//                    var array = [];
//                    var number = touches.translate;
//                    for(var i=0; i < count; i++){
//                        array.push(-unit*i);
//                    }
//                    console.log(array);
//                    touches.translate = closest(number, array);
//                    elem.style.transform = 'translateX(' + touches.translate + 'px)';
//                    elem.style.transition = 'transform 0.5s';
//                    
//                    break;
//            }
//            
//        }
//        
//        
//        
//        
//        target.addEventListener('touchstart', function(e){
//            handler(e);
//        });
//        target.addEventListener('touchend', function(e){
//            handler(e);
//        });
//        target.addEventListener('touchmove', function(e){
//            handler(e);
//        });
        
        
    };




