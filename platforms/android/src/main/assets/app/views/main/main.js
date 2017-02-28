var frame = require("ui/frame");
var profiler;
exports.loaded = function(args){
    page = args.object;
    profiler = page.getViewById("profileExpander");
}
exports.settings = function(){
    var top = frame.topmost();
    top.navigate({
        moduleName : "views/takeexam/takeexam",
        transition:{
            name : "slideRight"
        },
        clearHistory: false
    });
}

exports.expandProfile = function(args){
    console.log("Expanding the profile...");
    profiler.animate({
        opacity: 0.8,
        duration: 100
    })
}
exports.subTab = function(args){
    var img = args.object;
    img.animate({
        scalex: 0.5,
        scaley: 0.5,
        duration: 100
    })
}