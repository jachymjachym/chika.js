var myModule = chika.module('myApp');

var myControllerMods = {
    custom: {
        fn: function(target, options){
            
            target.addEventListener('click', function(){
                console.log(target);
                console.log(options);
            });
            
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

var anim = {
    
    type: 'transition',
    css: 'opacity',
    value: 0,
//    unit: 'px'
    
}




myModule.controller('myController', myControllerMods);

myModule.controller('loadProgress', progressLoadMods);


document.getElementById('btn').addEventListener('click', function(){
    myModule.animation('move', anim);
});












