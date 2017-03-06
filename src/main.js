var myModule = chika.module('myApp');

var myControllerMods = {
    custom: {
        fn: function(target, options){
            
        },
        options: {
            opt1: 'opt1',
            opt2: 'opt2'
        }
    },
    touchslide: {}
    
};
    
var progressLoadMods = {
    
    progressBar: {
        options: {
            startValue: 10,
            endValue: 100,
            speed: 40,
            frameValue: 3,
            transitionFrame: 0.1,
            transitionEnd: 1
        }
    }
    
}




myModule.controller('myController', myControllerMods);

myModule.controller('loadProgress', progressLoadMods);












