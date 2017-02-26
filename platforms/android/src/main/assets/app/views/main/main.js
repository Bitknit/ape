var frame = require("ui/frame");

exports.settings = function(){
    var top = frame.topmost();
    top.navigate({
        moduleName : "views/takeexam/takeexam",
        transition:{
            name : "slideRight",
            duration : 100
        },
        clearHistory: false
    });
}

exports.expandProfile = function(args){
    
}
