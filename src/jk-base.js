/**
 * (c) 2017 Jáchym Koudela
 * 
 */

(function(window){
    
    
    window.chika = {
        
        module: function(name){
            
            this.name = name;
            this.element = document.querySelector('[chkApp="' + name +'"]');
            
            this.hasProperty = function(obj, key){
                return obj.hasOwnProperty(key);
            };
            
            this.controller = function(contName, mods){
                var elem = this.element.querySelectorAll('[chkController="' + contName +'"]');
                var target = Array.prototype.slice.call(elem);
                
//                console.log(this.hasProperty(mods, 'touchslide'));
                
                switch(true){
                    case this.hasProperty(mods, 'touchslide'):
                        touchslide('options');
                    break;
                    
                }
                
                return target;
            };
            
            
            
            return this;
            
        }
        
    };
    
    
    
})(window);




//var requirements = {
//    touchSlide: require('./touchslide/jk-touch-slide.js')
//}


//var j$ = function (selector, index){
//
//    this.selector = selector;
//    this.index = index;
//
//    if(typeof index != 'undefined'){
//        this.element = document.querySelectorAll(this.selector)[this.index];
//    } else {
//        this.element = document.querySelectorAll(this.selector);
//    }
//
//    this.consoleElement = function(){
//        console.log(this.element);
//    }
//
//    this.attr = function(name, value){
//        if(!value) return this.element.getAttribute('name');
//        this.element.setAttribute(name, value);
//        return this;
//    }
//
//    this.on = function(type, callback){
//        var i;
//        var el = this.element;
//        if(typeof index != -1){
//            if(el == null || typeof(el) === 'undefined') return;
//            if (el.addEventListener) {
//                el.addEventListener(type, callback, false);
//            } else if (el[i].attachEvent) {
//                el.attachEvent("on" + type, callback);
//            } else {
//                el["on"+type] = callback;
//            }
//        } else {
//            for(i=0; i < el.length; i++){
//                if(el[i] == null || typeof(el[i]) === 'undefined') return;
//                if (el[i].addEventListener) {
//                    el[i].addEventListener(type, callback, false);
//                } else if (el[i].attachEvent) {
//                    el[i].attachEvent("on" + type, callback);
//                } else {
//                    el[i]["on"+type] = callback;
//                }
//            }
//        }
//    }
//
//    return this;
//};
//
//var jk = function(selector, index){
//    return new j$(selector, index);
//};
//
//
//for (var property in requirements) {
//    if (requirements.hasOwnProperty(property)) {
//        j$.prototype[property] = requirements[property].fn;
//    }
//    
//}





//module.exports = jk;




