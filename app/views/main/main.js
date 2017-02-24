var frame = require("ui/frame");

exports.settings = function(){
    var top = frame.topmost();
    top.navigate({
        moduleName : "views/carousel/carousel",
        transition:{
            name : "slideLeft"
        },
        clearHistory: true
    });
}