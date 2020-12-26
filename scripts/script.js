
const Scene = require('Scene');
const Patches = require('Patches');
Promise.all([
    Scene.root.findFirst('number'),
    Patches.outputs.getScalar('score')
]).then((results)=>{
    let counter = results[0];
    let scorestring = results[1] ;
    counter.text = scorestring.toString() ;
});



 