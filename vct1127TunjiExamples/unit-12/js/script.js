//GSDevTools.create();
//inTime, outTime, -=aValue
GSDevTools.create();
//GSDevTools.create({animation: "Rectangle_1"});
function rect1() {
    var tl = gsap.timeline({
        id: "Rectangle_1"
    });
    tl.to("#Rectangle_1", {
        opacity: 1,
        duration: 3
    });
    return tl;
}
function rect2() {
    var tl = gsap.timeline({
        id: "Rectangle_2"
    });
    tl.to("#Rectangle_2", {
        opacity: 1,
        duration: 3
    });
    return tl;
}
function sRect() {
    var tl = gsap.timeline({
        id:"short Rectangles"
    });
     tl.to("#Rectangle_10", {x:907})
     tl.to("#Rectangle_9", {x:907})
}

var master = gsap.timeline();
master.add(rect1())
      .add(rect2(), "-=2")     //with a gap of 2 seconds
      .add(sRect(), "-=1")
//rect1();