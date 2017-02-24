var frame = require("ui/frame");

exports.settings = function(){
    var top = frame.topmost();
    top.navigate({
        moduleName : "views/takeexam/takeexam",
        transition:{
            name : "slideLeft"
        },
        clearHistory: false
    });
}
