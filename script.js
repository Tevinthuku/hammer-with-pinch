var myelement = document.getElementById('myelement');

var mc = new Hammer.Manager(myelement);

// create a pinch and rotate recognizer
var pinch = new Hammer.Pinch();
var rotate = new Hammer.Rotate();

// add the manager
mc.add([pinch, rotate]);

mc.on("pinch rotate", function(ev) {
myelement.textContent += ev.type + " ";
});
