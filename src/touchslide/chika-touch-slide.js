
    
    var touchslide = function(target, options){
        
        
        var elem = target.children[0];
        var count = elem.children.length;
        
        
        if(options && options.threshold){
            switch(window.innerWidth > options.threshold){
                case true:
                    var w = options.itemsInWindow ? target.clientWidth/options.itemsInWindow : target.clientWidth;
                    var fullW = w * count;
                    var countByUnit = options.itemsInWindow ? elem.children.length/options.itemsInWindow : elem.children.length;
                    var unit = options.itemsInWindow ? fullW / (count/options.itemsInWindow) : fullW / count;
                    break;
                case false:
                    var w = target.clientWidth;
                    var fullW = w * count;
                    var countByUnit = elem.children.length;
                    var unit = fullW / count;
            }
        } else {
            var w = options.itemsInWindow ? target.clientWidth/options.itemsInWindow : target.clientWidth;
            var fullW = w * count;
            var countByUnit = options.itemsInWindow ? elem.children.length/options.itemsInWindow : elem.children.length;
            var unit = options.itemsInWindow ? fullW / (count/options.itemsInWindow) : fullW / count;
        }
        
        elem.style.width = fullW + 'px';
        
        for(var i=0; i < elem.children.length; i++){
            elem.children[i].style.width = w + 'px';
        }
        
        
        var touches = {
            touchstart: {x: 0, y: 0},
            touchmove: {x: 0, y: 0},
            translate: 0,
            
        }

        var lastX;
        
        function handler(e){
            
            switch(e.type){
                case 'touchstart':
                    lastX = currentX;
                    break;
                case 'touchmove':
                    var currentX = e.touches[0].clientX;
                    if(currentX > lastX){
                        
                        touches.translate += currentX -lastX;
                    } else if(currentX < lastX){
                        
                        touches.translate -= lastX - currentX;
                    }
                    
                    lastX = currentX;
                    elem.style.transform = 'translateX(' + touches.translate + 'px)';
                    elem.style.transitionProperty = 'none';
                    
            
                    break;
                    
                case 'touchend':
                    
                    if(touches.translate > 0){
                        elem.style.transform = 'translateX(0px)';
                        elem.style.transition = 'transform 0.5s';
                    }
                    
                    
                    
                    function closest (num, arr) {
                        var curr = arr[0];
                        var diff = Math.abs (num - curr);
                        for (var val = 0; val < arr.length; val++) {
                            var newdiff = Math.abs (num - arr[val]);
                            if (newdiff < diff) {
                                diff = newdiff;
                                curr = arr[val];
                            }
                        }
                        return curr;
                    }
                    
                    
                    
                    var array = [];
                    var number = touches.translate;
                    for(var i=0; i < countByUnit; i++){
                        array.push(-unit*i);
                    }
                    
                    touches.translate = closest(number, array);
                    elem.style.transform = 'translateX(' + touches.translate + 'px)';
                    elem.style.transition = 'transform 0.5s';
                    
                    break;
            }
            
        }
        
        
        
        
        target.addEventListener('touchstart', function(e){
            handler(e);
        });
        target.addEventListener('touchend', function(e){
            handler(e);
        });
        target.addEventListener('touchmove', function(e){
            handler(e);
        });
        
        window.addEventListener('resize', function(){
            elem.style.transform = 'translateX(0px)';
        });
        
        
    };





