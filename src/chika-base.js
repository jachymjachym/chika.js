/**
 * (c) 2017 Jáchym Koudela
 * 
 */

(function(window){
    
    
    window.chika = {
        
        module: function(name){
            
            this.name = name;
            this.element = document.querySelector('[cModule="' + name +'"]');
            
            this.hasProperty = function(obj, key){
                return obj.hasOwnProperty(key);
            };
            
            this.controller = function(contName, mods){
                var elem = this.element.querySelectorAll('[cController="' + contName +'"]');
                var target = Array.prototype.slice.call(elem);

                
                if(this.hasProperty(mods, 'custom')){
                    target.forEach(function(el, index, arr){
                        mods.custom.fn(el, mods.custom.options);
                    });
                }
                
                if(this.hasProperty(mods, 'touchslide')){
                    target.forEach(function(el, index, arr){
                        touchslide(el, mods.touchslide.options);
                    });
                }
                
                if(this.hasProperty(mods, 'progressBar')){
                    target.forEach(function(el, index, arr){
                        progressBar(el, mods.progressBar.options);
                    });
                }
                
                return target;
            };
            
            this.animation = function(contName, options){
                var elem = this.element.querySelectorAll('[cAnimation="' + contName +'"]');
                var target = Array.prototype.slice.call(elem);
                
                target.forEach(function(el, index, arr){
                    
                    var unit = options.unit || '';
                        
                    switch(options.type){
                        case 'transition':
                            el.style[options.css] = options.value + unit;
                            break;
                        case 'RAF':
                            var requestID = requestAnimationFrame(animate);

                            var div = el;

                                div.style.position = 'absolute';
                                var left = 0;
                                div.style.left = left + 'px';
                            // Animate.
                            function animate() {
                              requestID = requestAnimationFrame(animate);

                              // If the box has not reached the end draw on the canvas.
                              // Otherwise stop the animation.
                              if (left <= 500) {
                                div.style.left = left + 'px';
                                left += 2;
                              } else {
                                cancelAnimationFrame(requestID);
                              }
                            }
                            break;
                    }
                        
                });
                
            };
            
            return this;
            
        },
        
        transitionPolyfill: function(el, css, time, easing){
            
            var easing = easing || 'linear';
            
            el.style.transition = css + ' ' + time + 's ' + easing;
            el.style.webkitTransition = css + ' ' + time + 's ' + easing;
            el.style.mozTransition = css + ' ' + time + 's ' + easing;
            el.style.msTransition = css + ' ' + time + 's ' + easing;
            el.style.oTransition = css + ' ' + time + 's ' + easing;
        },
        
        polyfillRAF: function(){
            
            var lastTime = 0;
            var vendors = ['webkit', 'moz', 'ms', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame =
                  window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                      timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };

        },
        
    };
    
    
    chika.polyfillRAF();
    
    
})(window);




