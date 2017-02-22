var touchSlide = {
    fn: function(){
        
        var elem = this.element;
        
        var touches = {
            touchstart: {x: 0, y: 0},
            touchmove: {x: 0, y: 0}
        }
//        this.element.style.transform = 'translateX(' + move + 'px)';
        function handler(e){
            
            switch(e.type){
                case 'touchstart':
//                    touches.touchstart.x = e.touches[0].clientX;
                case 'touchmove':
//                    touches.touchmove.x = 
                case 'touchend':
            }
            
            var move = e.touches[0].pageY;
            console.log(move);
//            var move = e.touches[0].clientX;
//            elem.style.transform = 'translateX(' + move + 'px)';
        }
        
        elem.addEventListener('touchstart', function(e){
            handler(e);
        });
        elem.addEventListener('touchend', function(e){
            handler(e);
        });
        elem.addEventListener('touchmove', function(e){
            handler(e);
        });
        
        
    }
}



module.exports = touchSlide;