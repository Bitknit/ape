var frame = require("ui/frame");

exports.settings = function(){
    var top = frame.topmost();
    top.navigate({
        moduleName : "views/takeexamdir/takeexam",
        transition:{
            name : "slideLeft"
        },
        clearHistory: true
    });
}
