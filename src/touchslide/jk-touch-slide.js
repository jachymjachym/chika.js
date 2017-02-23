var touchSlide = {
    fn: function(){
        
        var target = this.element;
        var elem = target.children[0];
        
        var touches = {
            touchstart: {x: 0, y: 0},
            touchmove: {x: 0, y: 0},
            translate: 0,
            
        }
//        this.element.style.transform = 'translateX(' + move + 'px)';
        var lastX;
        
        function handler(e){
            
            switch(e.type){
                case 'touchstart':
                    lastX = currentX;
                case 'touchmove':
                    var currentX = e.touches[0].clientX;
                    if(currentX > lastX){
                        
                        touches.translate += currentX -lastX;
                    } else if(currentX < lastX){
                        
                        touches.translate -= lastX - currentX;
                    }
                    
                    lastX = currentX;
                    elem.style.transform = 'translateX(' + touches.translate + 'px)';
                    break;
                    
                case 'touchend':
                    
                    
                    break;
                    
                    
                    
                
            }
            console.log('last:'+lastX);
            console.log('curr:'+currentX);
            
//            console.log('trans:'+ touches.translate);
//            
//            console.log('curr:'+ currentX);
//            console.log('last:'+ lastX);
//            var move = e.touches[0].clientX;
            
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
        
        
    }
}



module.exports = touchSlide;