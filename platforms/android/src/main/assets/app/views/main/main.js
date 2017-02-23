var frames = require("ui/frame");

exports.tonext = function(){
    frameTop = frames.topmost();
    frameTop.navigate({
        moduleName: "views/settings/settings",
        transition:{
            name:"slideLeft", duration: 200
        },
        clearHistory:false
    });
}