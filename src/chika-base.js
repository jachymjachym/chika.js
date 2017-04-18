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
            
            this.controller = function(contName, modes){
                var elem = this.element.querySelectorAll('[cController="' + contName +'"]');
                var target = Array.prototype.slice.call(elem);

                
                if(this.hasProperty(modes, 'custom')){
                    target.forEach(function(el, index, arr){
                        modes.custom.fn(el, modes.custom.options);
                    });
                }
                
                if(this.hasProperty(modes, 'touchslide')){
                    if(chika.isMobile()){
                        target.forEach(function(el, index, arr){
                            window.addEventListener('resize', function(){
                                touchslide(el, modes.touchslide.options);
                            }, false);

                            touchslide(el, modes.touchslide.options);
                        });
                    }
                }
                
                if(this.hasProperty(modes, 'progressBar')){
                    target.forEach(function(el, index, arr){
                        progressBar(el, modes.progressBar.options);
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
            
            this.isMobile = function(){
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            };
            
            this.post = function(url, data, success) {
                var params = typeof data == 'string' ? data : Object.keys(data).map(
                    function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
                ).join('&');

                var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                xhr.open('POST', url);
                xhr.onreadystatechange = function() {

                    if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
                };
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(params);
                return xhr;
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
        
        endsWithPolyfill: function(){
            if (!String.prototype.endsWith) {
                String.prototype.endsWith = function(searchString, position) {
                    var subjectString = this.toString();
                    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                        position = subjectString.length;
                    }
                    position -= searchString.length;
                    var lastIndex = subjectString.lastIndexOf(searchString, position);
                    return lastIndex !== -1 && lastIndex === position;
                };
            }
        },
        
    };
    
    
    chika.polyfillRAF();
    chika.endsWithPolyfill();
    
    
})(window);




