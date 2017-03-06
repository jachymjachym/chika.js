var progressBar = function(target, options){
    
    document.addEventListener('readystatechange', function(e){
        progress(e);
    }, false);
    
    
    var progress = function(e){
        
        var outer = target;
        var inner = target.querySelector('.inner');
        var startValue = options.startValue || 0;
        var endValue = options.endValue || 100;
        var speed = options.speed || 60;
        var frame = options.frameValue || 1;
        var transitionFrame = options.transitionFrame || 0.1;
        var transitionEnd = options.transitionEnd || 0.4;
        
        var int = setInterval(frame, speed);
        
        if(document.readyState === 'complete'){
            inner.style.width = endValue + '%';
            chika.transitionPolyfill(inner, 'width', transitionEnd);
            setTimeout(function(){
                target.style.opacity = 0;
                chika.transitionPolyfill(target, 'opacity', 0.5);
                
                setTimeout(function(){
                    target.style.display = 'none';
                }, 500);
            }, transitionEnd*1000);
        } else {
            
            function frame(){
                if(startValue < 70){
                    startValue += frame;
                    inner.style.width = startValue + '%';
                    chika.transitionPolyfill(inner, 'width', transitionFrame);
                } else {
                    clearInterval(int);
                }
            }
        }
        
        
        
        
        
    };
}